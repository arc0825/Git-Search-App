import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }
  handleError(error:Error|HttpErrorResponse){
    if(error instanceof HttpErrorResponse){
      if(!navigator.onLine){
        console.log("No Internet Connection!!")
      }
      else if(error.status===404){
        console.log("Please enter valid username!!!")
      }
      else{
        console.log("ERROR:"+error)
      }
    }
  }
}
