import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { SendEmaiService } from '../restApi/send-emai.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  contactForm! : FormGroup
  constructor(private _fb: FormBuilder,public http: SendEmaiService) {

  }

  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      subject:['',Validators.required],
      message:['']
    })
  }
submit(){
  console.log(this.contactForm.value);

  const formData = new FormData();
  formData.append('name', this.contactForm.get('name')?.value);
  formData.append('email', this.contactForm.get('email')?.value);
  formData.append('phone', this.contactForm.get('phone')?.value);
  formData.append('subject', this.contactForm.get('subject')?.value);
  formData.append('message', this.contactForm.get('message')?.value);
 console.log("formData",formData);
 this.http.sendEmail("http://localhost:3002/contactMail", formData).subscribe(
  data => {
    let res:any = data;
    console.log(
      ` ${formData} is successfully register and mail has been sent and the message id is ${res.messageId}`
    );
  },
  err => {
    console.log(err);
  },() => {
  }
);
}
}
