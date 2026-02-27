import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../service/student';
import { Students } from '../../interface/student.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  isVisiableActionColumn:string = '';
  myStudentList: Students[] = [];
  studentservice: Student = inject(Student);

  ngOnInit(): void {
    this.getAllStudentList();
    this.studentservice.getStudentList();
  }

  getAllStudentList() {
    this.studentservice.mySubject$.subscribe((_resp: any) => {
      console.log(_resp);
      this.myStudentList = _resp;
    })
  }

  onEdit(student: any, index: number) {
    console.log('Edit clicked', student, index);

    // later you can open form / modal here
  }

  onDelete(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.myStudentList.splice(index, 1);
    }
  }

  onChangeOption(event:any){
    console.log(event.target.value);
    this.isVisiableActionColumn = event.target.value;
  }
}
