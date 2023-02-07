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
    const a = this.characterService.searchCharacters(this.query);
    console.log('a ->', a)
    this.characterService.searchCharacters(this.query)
    .subscribe((res:any) => {
      const {info, results} = res;
      console.log("repsonse -> ",res);
      
      this.characters = [...this.characters, ...results]
    })
  }
}
