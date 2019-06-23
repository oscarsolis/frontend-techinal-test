import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './dropdown-item.component.html'
})
export class DropdownComponent {

  @Input() categories;

  constructor() { }

}
