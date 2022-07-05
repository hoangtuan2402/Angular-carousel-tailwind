import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-drap-drop-chapter',
  templateUrl: './drap-drop-chapter.component.html',
  styleUrls: ['./drap-drop-chapter.component.css'],
})
export class DrapDropChapterComponent implements OnInit {
  users: any;
  indexOver: number = -1;
  usersNew: any
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  drop(event: CdkDragDrop<any>) {
    
    console.log('Drag Event');

    if (event.previousContainer != event.container) {
      let tempOldPosision = event.container.data.name.first;
      event.container.data.name.first = event.previousContainer.data.name.first;
      event.previousContainer.data.name.first = tempOldPosision;
      // console.log(tempOldPosision);
      // this.usersNew = this.swapItems(
      //   this.users,
      //   this.users.indexOf(event.container.data),
      //   this.users.indexOf(event.previousContainer.data)
      // );
    }
  }

  submitList() {
    console.log(this.usersNew);
  }

  swapItems(arr: any, old_index: number, new_index: number) {
    if (new_index <= arr.length) {
      let temp = arr[old_index];
      arr[old_index] = arr[new_index];
      arr[new_index] = temp;
    }
    
    return arr;
  }
}
