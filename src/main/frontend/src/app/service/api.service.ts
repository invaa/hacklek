import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from "./api-constants";
import {Observable} from 'rxjs';
import {Medicine} from "../../model/medicince";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public lookupMedicines(userInput: string): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${ApiConstants.API_LOOKUP_MED}/${userInput}/`);
  }

  public uploadPrescription(base64EncodedImage: string): Observable<Medicine[]> {
    return this.http.post<Medicine[]>(`${ApiConstants.API_OCR_MED}`, {encodedImage: base64EncodedImage});
  }


}
