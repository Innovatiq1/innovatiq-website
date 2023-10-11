import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SendEmaiService {

  constructor(private http: HttpClient) { }

  sendEmail(url: string, data: any) {
    return this.http.post(url, data);
  }
 contactEmail(url: string, data: any) {
    return this.http.post(url, data);
  }
}
