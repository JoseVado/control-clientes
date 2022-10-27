import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  isCollapsed = true;
  isDropdownCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
