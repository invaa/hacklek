import {Package} from "./package";

export class Medicine {
  id: number;
  atcCode: string;
  name: string;
  type: string;
  defaultPackage: number;
  substanceId: number;
  packages: Package[];
  analog: Medicine;
}
