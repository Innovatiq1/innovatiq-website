import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { SendEmaiService } from '../restApi/send-emai.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  contactForm! : FormGroup
  constructor(private _fb: FormBuilder,public http: SendEmaiService) {

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
    confirmButtonText: 'OK',
    timer: 6000
  })

 this.http.sendEmail("http://18.142.249.36:3004/contactMail", this.contactForm.value).subscribe(data => {
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
this.contactForm.reset();
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
