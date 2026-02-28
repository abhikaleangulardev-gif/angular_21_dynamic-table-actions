import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from "./component/table/table";
import { Parent } from "./component/parent/parent";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dynamic-table-actions');
}
