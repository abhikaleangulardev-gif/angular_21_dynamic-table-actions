import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

interface students {
  firstname: string;
  lastname: string;
  age: number;
  contact: number;
  email: string
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {
  myParentData: string = '';
  myStudent: students = {
    firstname: 'abhishek',
    lastname: 'kale',
    age: 32,
    contact: 323223232,
    email: 'abhi@gmail.com'
  }

  @Input('gettingParentTitlename') gettingParentTitlename: any;

  @Output('SendToStudentDetailsChildToParent')SendToStudentDetailsChildToParent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['gettingParentTitlename'].currentValue);
    this.myParentData = changes['gettingParentTitlename'].currentValue;
  }


  onClick(){
    this.SendToStudentDetailsChildToParent.emit(this.myStudent);
  }
}
