import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-cover',
  templateUrl: './upload-cover.component.html',
  styleUrls: ['./upload-cover.component.css'],
})
export class UploadCoverComponent implements OnInit {
  imageSrc: string = '';

  myForm = new FormGroup({
    fileCoverWithTitle: new FormControl('', [Validators.required]),
    fileCoverSource: new FormControl('', [Validators.required]),
  });
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileCoverSource: reader.result,
        });
      };
    }
  }

  submit() {
    console.log("Submit Form");
    console.log(this.myForm.value);

  }
  removeImage(){
    this.imageSrc ="";
  }
}
