import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-drap-drop-chapter',
  templateUrl: './drap-drop-chapter.component.html',
  styleUrls: ['./drap-drop-chapter.component.css']
})
export class DrapDropChapterComponent implements OnInit {
users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }


  submitList(){
      console.log(this.users);
      
  }
}
