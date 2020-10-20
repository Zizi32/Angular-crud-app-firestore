import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfirst';

  Student: string;
  StudentName: string;
  StudentRegistration: number;
  StudentAddress: string;
  StudentEmail: string;
  message: string;
  constructor(public crudservice:CrudService){}
  CreateRecord()
  {
    let Record = {};
    Record['Studentname'] = this.StudentName;
    Record['StudentRegistrationNo'] = this.StudentRegistration;
    Record['Studentaddress'] = this.StudentAddress;
    Record['Studentemailid'] = this.StudentEmail;

    this.crudservice.create_newstudent(Record).then(res => {
      this.StudentName="";
      this.StudentEmail="";
      this.StudentAddress="";
      this.StudentRegistration=undefined;
      this.message="The data has been saved";
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }
}
