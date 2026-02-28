import { Component, input, OnInit, output, signal, WritableSignal } from '@angular/core';

interface Students {
  fullname: string;
  age: number,
  contact: number,
  email: string
}

@Component({
  selector: 'app-child-signal',
  imports: [],
  templateUrl: './child-signal.html',
  styleUrl: './child-signal.css',
})
export class ChildSignal implements OnInit {

  // input property with using signal
  myParentInParentComponent = input<string>();

  myParentParagraphDisplayInChildComponent: WritableSignal<any> = signal('');

  // output property with using signal
  myStudent: WritableSignal<Students> = signal<Students>({
    fullname: 'abhishek kale',
    age: 32,
    contact: 23232323,
    email: 'abhi@gmail.com'
  });

  myStudentsObj = output<Students>();


  ngOnInit(): void {
    console.log(this.myParentInParentComponent());
    this.myParentParagraphDisplayInChildComponent.set(this.myParentInParentComponent());
  }


  // eventEmitter
  onClick(){
    this.myStudentsObj.emit(this.myStudent())
  }
}
