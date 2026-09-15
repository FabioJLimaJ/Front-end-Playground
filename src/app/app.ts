import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableCode } from './components/table-code/table-code';
import { Navbar } from './components/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableCode, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bot-pen');
}
