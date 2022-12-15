import { Component, OnInit } from '@angular/core';
import {ServiceService } from './service.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myNewApp';
  startTime: any;
  endTime:any;
  meetingName="";
  location="";
  emailValue={
    "emailAddress": {
      "address":"",
      "name": "Anitha"
    },
    "type": "required"
  }
  
    email:"";

dateVisible:boolean=false
 request= {
    "subject": "Create team meeting",
    "body": {
      "contentType": "HTML",
      "content": "Does next month work for you?"
    },
    "start": {
        "dateTime": "",
        "timeZone": "Pacific Standard Time"
    },
    "end": {
        "dateTime": "",
        "timeZone": "Pacific Standard Time"
    },
    "location":{
        "displayName":""
    },
    "attendees": [],
    "isOnlineMeeting": true,
    "onlineMeetingProvider": "teamsForBusiness"
  }
  constructor(private serviceService:ServiceService,public datepipe: DatePipe)
  {

  }
  // startTime:any
  ngOnInit() {
  }
  // FromEvent(From: MatDatepickerInputEvent<Date>) {
  //   var d=new Date(From.value);
  //   var date = d.getDate();
  //   var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  //   var year = d.getFullYear();
  //   var dateStr = year + "/" + month + "/" + date;
  //   console.log("formdate",date);
  //   console.log("form",month);
  //   console.log("form",year);
  //   }
  // //   ToEvent(To: MatDatepickerInputEvent<Date>) {
  // //     var d=new Date(To.value);
  // //     var date = d.getDate();
  // //     console.log("todate",d);
  // //   }
  // ToEvent()
  // {
  //   console.log(this.dateVisible);
  //   this.dateVisible=true;
    
  // }

  submit()
  {
  
   
    let start_date=this.datepipe.transform(this.startTime,'dd-MM-yyyy HH:mm:ss');
    let end_date=this.datepipe.transform(this.endTime,'dd-MM-yyyy HH:mm:ss');
    // console.log("latest_date",start_date);

    var splitvalues =this.email.split(";");
    for(var i=0;i<splitvalues.length;i++)
    {
      this.emailValue.emailAddress.address=splitvalues[i]
     var value= splitvalues[i].split("@");
     this.emailValue.emailAddress.name=value[0];  

    }
    //let latest_date =this.datepipe.transform(this.startTime, 'yyyy-MM-dd hh:mm:ss');
    
  

    this.request.body.content=this.meetingName;
    this.request.start.dateTime=start_date;
    this.request.end.dateTime=end_date;
    this.request.location.displayName=this.location;
    this.request.attendees.push(this.emailValue);

    console.log("request",this.request);
    this.serviceService.createMeetingLink(this.request).subscribe((data: any) => {

    })
  }
  close()
  {
    this.dateVisible=false;
  }

    // submit()
    // {

    // }
}
