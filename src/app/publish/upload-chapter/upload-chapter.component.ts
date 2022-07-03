import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-chapter',
  templateUrl: './upload-chapter.component.html',
  styleUrls: ['./upload-chapter.component.css'],
})
export class UploadChapterComponent implements OnInit {

  fileToUpload: File | null = null;
  formUploadChapter = new FormGroup({
    chapterName: new FormControl('', [Validators.required]),
    fileChapter: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }
  submit() {
    console.log('Submit Form');
    console.log(this.formUploadChapter.value);
  }

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0);
    this.formUploadChapter.controls['fileChapter'].setValue(this.fileToUpload);
  }



}
