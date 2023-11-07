import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmaiService } from 'src/app/restApi/send-emai.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  contactForm! : FormGroup
  constructor(private _fb: FormBuilder,public http: SendEmaiService) {

  }
card= true;
  cards(){
  this.card= !this.card
}
before(){
  this.card=true;
}

  
  simpleAlert(){

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
if(this.contactForm.valid){
  const formData = new FormData();
  formData.append('name', this.contactForm.get('name')?.value);
  formData.append('email', this.contactForm.get('email')?.value);
  formData.append('phone', this.contactForm.get('phone')?.value);
  formData.append('subject', this.contactForm.get('subject')?.value);
  formData.append('message', this.contactForm.get('message')?.value);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank you for getting in touch! ',
    text:'We appreciate you contacting Innovatiq.we will get back in touch with you soon!Have a great day!',
    showConfirmButton: true,
    confirmButtonText: 'Okay!',
    timer: 6000
  })

 this.http.sendEmail("http://localhost:3002/contactMail", this.contactForm.value).subscribe(data => {
    console.log("data",data)
    let res:any = data;
    console.log(
      `  is successfully register and mail has been sent and the message id is `,res.messageId
    );

  },
  err => {
    console.log(err);
  },() => {
  }
);
}else {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: 'Enter your name , email, contact number and subject'
  })

}


}
}

