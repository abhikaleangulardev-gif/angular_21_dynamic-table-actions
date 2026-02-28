import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../service/student';
import { Students } from '../../interface/student.interface';
import { NgClass } from '@angular/common';
import { debounceTime, filter, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit, OnDestroy {
  isVisiableActionColumn: string = '';
  myStudentList: Students[] = [];
  allStudents: Students[] = []; // Store all students separately
  studentservice: Student = inject(Student);

  mySearchStudentListDetails: string = '';
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    // Subscribe once in ngOnInit
    this.subscription = this.studentservice.mySubject$.subscribe((resp: Students[]) => {
      this.allStudents = resp; // Store all students
      this.applyFilter(); // Apply filter whenever data changes
    });

    this.studentservice.getStudentList();
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    this.subscription.unsubscribe();
  }

  applyFilter() {
    if (!this.mySearchStudentListDetails || this.mySearchStudentListDetails.trim() === '') {
      // If search is empty, show all students
      this.myStudentList = [...this.allStudents];
    } else {
      // Apply search filter
      const searchTerm = this.mySearchStudentListDetails.trim().toLowerCase();
      this.myStudentList = this.allStudents.filter((std: Students) =>
        std.name.toLowerCase().includes(searchTerm) ||
        std.course.toLowerCase().includes(searchTerm) // Also search by city as per placeholder
      );
    }
  }

  onEdit(student: any, index: number) {
    console.log('Edit clicked', student, index);
    // later you can open form / modal here
  }

  onDelete(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      // Find the actual student in allStudents array
      const studentToDelete = this.myStudentList[index];
      const allStudentsIndex = this.allStudents.findIndex(s =>
        s.name === studentToDelete.name &&
        s.age === studentToDelete.age &&
        s.city === studentToDelete.city
      );

      if (allStudentsIndex !== -1) {
        this.allStudents.splice(allStudentsIndex, 1);
        this.applyFilter(); // Reapply filter after deletion
      }
    }
  }

  onChangeOption(event: any) {
    console.log(event.target.value);
    this.isVisiableActionColumn = event.target.value;
  }

  onSearchValue(event: any) {
    this.mySearchStudentListDetails = event.target.value;
    this.applyFilter(); // Apply filter whenever search value changes
  }
}
