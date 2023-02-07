import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  characterSearch(value: string) {
    if (value && value.length > 0) {
      this.router.navigate(['/character-list'], {
        queryParams: { input: value },
      });
    } else {
      this.router.navigate(["/home"])
    }
  }
}
