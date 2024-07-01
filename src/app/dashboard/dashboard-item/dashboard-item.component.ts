import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
// @Input({required:true}) image!: {src: string; alt:string};
// or use below anything is ok depends upon angular version.
image = input.required<{src: string; alt:string}>();
title= input.required<string>();
}
