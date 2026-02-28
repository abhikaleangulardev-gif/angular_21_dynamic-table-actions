import { Component, signal, WritableSignal } from '@angular/core';
import { ChildSignal } from "./child-signal/child-signal";

@Component({
  selector: 'app-parent-signal',
  imports: [ChildSignal],
  templateUrl: './parent-signal.html',
  styleUrl: './parent-signal.css',
})
export class ParentSignal {
  myStudents:WritableSignal<any> = signal<any>('');
  myParagraph: WritableSignal<any> = signal('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');


  gettingChildToParentStudentData(students:any){
    console.log(students);
    this.myStudents.set(students);
    console.log(this.myStudents());
  }
}
