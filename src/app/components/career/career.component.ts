import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendEmaiService } from 'src/app/restApi/send-emai.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {

  fileToUpload: File | null = null;
  constructor(public _fb: FormBuilder,public http: SendEmaiService,public router: Router) {

  }
  @ViewChild('file')
  file!: ElementRef;
  @ViewChild('fileDropRef', { static: false })
  fileDropEl!: ElementRef;
  // files: any[] = [];
  message = '';
  careerForm!: FormGroup
  ngOnInit(): void {
    this.careerForm = this._fb.group({
      name: ['',Validators.required],
      phone_number: [''],
      position: [''],
      discription: [''],
      resume: [null],
    });
  }

  upload() {
    document.getElementById('input')?.click();
  }

  resume(event: any) {
    console.log('events', event.target.files[0]);
   const fileToUpload  = event.target.files[0]
    this.careerForm.get('resume')?.setValue(fileToUpload)

  }

  submitForm() {
    console.log('formSubmit', this.careerForm.value);
  }

  register() {

    // let user = {

    //   name : this.careerForm.value.name,
    //   email : '',
    //   phone:this.careerForm.value.phone_number,
    //   disc:this.careerForm.value.discription,
    //   resume:this.careerForm.value.resume
    //   // name: this.nameFormControl.value,
    //   // email: this.emailFormControl.value
    // }
if(this.careerForm.valid){
  const formData = new FormData();
  formData.append('file', this.careerForm.get('resume')?.value);
  formData.append('name', this.careerForm.get('name')?.value);
  formData.append('phone_number', this.careerForm.get('phone_number')?.value);
  formData.append('position', this.careerForm.get('position')?.value);
  formData.append('discription', this.careerForm.get('discription')?.value);
 console.log("formData",formData)
 Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Thank you! ',
  text:'Your submission has been sent.',
  showConfirmButton: true,
  confirmButtonText: 'OK',
  timer: 6000
})
  this.http.sendEmail("http://18.142.249.36:3004/sendmail", formData).subscribe(
    data => {
      // let res:any = data;
      if(data){
       this.message = 'Email sent successfully!!!'
      }
      console.log(data,"ppop");
    },
    err => {
      console.log(err);
    },() => {
    }
  );
  this.careerForm.reset();
  
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: 'Enter your name, contact number and upload your CV.'
  })
}

  }
}

