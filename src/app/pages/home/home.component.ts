import { Component, OnInit } from '@angular/core';
import { Character } from '@app/interfaces';
import { CharacterService } from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  characters: Character[] = [];
  private query: string = '';

  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.characterService.searchCharacters(this.query).subscribe((res: any) => {
      // if (res && res.results.length > 0) or if (res?.results?.length)
      if (res?.results?.length) {
        console.log('repsonse -> ', res);
        this.characters = [...this.characters, ...res.results];
      } else {
        this.characters = [];
      }
    });
  }
}
