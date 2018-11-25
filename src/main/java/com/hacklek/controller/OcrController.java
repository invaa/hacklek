package com.hacklek.controller;

import com.hacklek.dtos.ImageDto;
import com.hacklek.entity.Medicine;
import com.hacklek.repository.MedicineRepository;
import lombok.extern.log4j.Log4j;
import org.apache.commons.io.FileUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import java.io.*;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.hacklek.constants.Constants.API_KEY;
import static com.hacklek.constants.Constants.OCR_API_URL;
import static com.hacklek.constants.Constants.POL;

@EnableAutoConfiguration
@RestController
@RequestMapping("api/v1/")
@Log4j
public class OcrController {
    @Autowired
    private MedicineRepository medicineRepository;

    private final Pattern PATTERN_PARSED_TEXT = Pattern.compile("\"ParsedText\":(.)+");
    private final Pattern WORD = Pattern.compile("\\w+");

    @RequestMapping(value = "parseImage", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<List<Medicine>> parseEnc(@RequestBody ImageDto imageDto) throws Exception {
        log.info("Parse file endpoint executed.");

        return new ResponseEntity<>(getMedicines(imageDto.getEncodedImage()), HttpStatus.OK);
    }

    private List<Medicine> getMedicines(String encodedImage) throws Exception {
        List<Medicine> medicines = new ArrayList<>();
        String ocrResult = getParsedStringResponseEntity(encodedImage).replaceAll("\\\\r\\\\n","");
        Matcher matcherParsedText = PATTERN_PARSED_TEXT.matcher(ocrResult);

        while (matcherParsedText.find()) {
            String orcPart = matcherParsedText.group();
            Matcher matcher = WORD.matcher(orcPart);

            while (matcher.find()) {
                String str = matcher.group();
                if (!str.isEmpty() && str.length() > 2) {
                    log.debug("Word " + str + " is not a medicine.");
                    List<Medicine> currentList = medicineRepository.findByNameIgnoreCaseStartsWith(str);
                    currentList.stream()
                            .filter(p -> p.getName().equalsIgnoreCase(str)
                                    || p.getName().toLowerCase().startsWith(str + " ")
                                    || p.getName().toLowerCase().startsWith(str.toLowerCase() + ",")
                                    || p.getName().toLowerCase().startsWith(str.toLowerCase() + ".")
                                    || p.getName().toLowerCase().startsWith(str.toLowerCase() + ";")
                            )
                            .findFirst()
                            .ifPresent(medicines::add);
                }
            }
        }
        return medicines;
    }

    @RequestMapping(value = "parseByName", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<List<Medicine>> parse(@RequestParam String fileName) throws Exception {
        log.info("Parse file endpoint executed.");
        return new ResponseEntity<>(getMedicines(getBase64(fileName)), HttpStatus.OK);
    }

    private String getParsedStringResponseEntity(String encodedImage) throws Exception {
        URL obj = new URL(OCR_API_URL); // OCR API Endpoints
        HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

        //add request header
        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

        JSONObject postDataParams = new JSONObject();

        postDataParams.put("apikey", API_KEY);
        postDataParams.put("isOverlayRequired", false);
        postDataParams.put("base64Image", encodedImage);
        postDataParams.put("language", POL);

        // Send post request
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(getPostDataString(postDataParams));
        wr.flush();
        wr.close();

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        return String.valueOf(response);
    }

    private String getBase64(String fileName) throws IOException {
        byte[] fileContent = FileUtils.readFileToByteArray(new File(getClass().getClassLoader().getResource(fileName).getFile()));
        return "data:image/png;base64," + Base64.getEncoder().encodeToString(fileContent);
    }

    private String getPostDataString(JSONObject params) throws Exception {

        StringBuilder result = new StringBuilder();
        boolean first = true;

        Iterator<String> itr = params.keys();

        while (itr.hasNext()) {

            String key = itr.next();
            Object value = params.get(key);

            if (first)
                first = false;
            else
                result.append("&");

            result.append(URLEncoder.encode(key, "UTF-8"));
            result.append("=");
            result.append(URLEncoder.encode(value.toString(), "UTF-8"));

        }
        return result.toString();
    }

}
