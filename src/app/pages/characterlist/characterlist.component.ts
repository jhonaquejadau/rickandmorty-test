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
  
  private query!: string;
  public page!: number;

  constructor(
    private characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) {
    this.getCharactedSearched();
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  private getCharactedSearched(): void {
    this.route.queryParams.subscribe((params: Params) => {
      // console.log('params ->', params);
      this.characterService.filterCharacters(params['input']).subscribe((res: any) => {
        // if (res && res.results.length > 0) or if (res?.results?.length)
        if (res?.results?.length) {
          this.characters = [];
          this.characters = [...res.results];
        } else {
          this.characters = [];
        }
      });
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
