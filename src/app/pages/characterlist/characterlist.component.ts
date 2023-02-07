import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '@app/interfaces';
import { CharacterService } from '@app/shared';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  allCharacters: Character[] = [];
  private query: string = '';
  public page!: number;

  constructor(
    private characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) {
    this.getCharacterSearched();
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  private getCharacterSearched(): void {
    this.route.queryParams.subscribe((params: Params) => {
      // console.log('params ->', params);
      this.query = params['input'];
      this.searchCharacters();
    });
  }

  private searchCharacters(): void {
    this.characterService.filterCharacters(this.query).subscribe((res: any) => {
      // if (res && res.results.length > 0) or if (res?.results?.length)
      if (res?.results?.length) {
        console.log('repsonse -> ', res);
        this.characters = [...res.results];
      } else {
        this.characters = [];
      }
    });
  }
  
  private getAllCharacters(): void {
    for (let i = 1; i < 43; i++) {
      
      this.characterService.allCharacters(i).subscribe((res: any) => {
        // if (res && res.results.length > 0) or if (res?.results?.length)
        if (res?.results?.length) {
          this.characters = [...this.characters, ...res.results]
        } else {
          this.characters = [];
        }
      });
    }
  }
  
}
