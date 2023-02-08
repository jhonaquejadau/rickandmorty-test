import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '@app/shared';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character: any = {};

  constructor(
    private readonly route: ActivatedRoute,
    private characterServices: CharacterService,
  ) {}

  ngOnInit(): void {
    this.getCharacterDetail();
  }

  getCharacterDetail(): void {
    this.route.params.subscribe((params) => {
      this.characterServices
        .getCharacter(params['id'])
        .subscribe((res: any) => {
          this.character = res;
        });
    });
  }
}
