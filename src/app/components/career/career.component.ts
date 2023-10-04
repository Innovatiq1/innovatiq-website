import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SendEmaiService } from 'src/app/restApi/send-emai.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {

  fileToUpload: File | null = null;
  constructor(public _fb: FormBuilder,public http: SendEmaiService) {

  }
  @ViewChild('fileDropRef', { static: false })
  fileDropEl!: ElementRef;
  // files: any[] = [];
  careerForm!: FormGroup
  ngOnInit(): void {
    this.careerForm = this._fb.group({
      name: [''],
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

    const formData = new FormData();
    formData.append('file', this.careerForm.get('resume')?.value);
    formData.append('name', this.careerForm.get('name')?.value);
    formData.append('phone_number', this.careerForm.get('phone_number')?.value);
    formData.append('position', this.careerForm.get('position')?.value);
    formData.append('discription', this.careerForm.get('discription')?.value);
console.log("formData",formData)
    this.http.sendEmail("http://localhost:3000/sendmail", formData).subscribe(
      data => {
        let res:any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${formData} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      },() => {
      }
    );
  }
}

