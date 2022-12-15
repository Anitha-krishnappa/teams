import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(private http:HttpClient) { }

  userToken="1234";
  teamsLink="post: https://graph.microsoft.com/v1.0/users"+"/"+this.userToken+"/"+"events";

  public  createMeetingLink(createMeetingRequest)
  {
    return this.http.post<any>(this.teamsLink,createMeetingRequest, {
      observe: 'response',withCredentials: true,headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })


    });
   
   }
}
