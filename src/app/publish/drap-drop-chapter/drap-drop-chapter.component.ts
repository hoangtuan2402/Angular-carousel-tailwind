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
indexOver: number = -1;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  drop(event:CdkDragDrop<any>) {
    console.log("Drag Event");
    
    if (event.previousContainer != event.container) {
        
          let temp = event.container.data.name.first;
          event.container.data.name.first = event.previousContainer.data.name.first;
          event.previousContainer.data.name.first = temp;
          console.log(temp);
          
    }
  }

  submitList(){
      console.log(this.users);
      
  }
}
