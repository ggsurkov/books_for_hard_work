import {Injectable} from "@angular/core";

@Injectable()
export class ObjectService {


  mergeObjects(firstObj, SecondObj) {
    for (let key in SecondObj) {
      firstObj[key] = SecondObj[key];
    }
    return firstObj
  }
}
