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
  public page!: number;
  render: boolean = false;
  characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {
    this.getCharacterSearched();
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  private getCharacterSearched(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.characterService
        .filterCharacters(params['input'])
        .subscribe((res: any) => {
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
          this.characters = [...this.characters, ...res.results];
        } else {
          this.characters = [];
        }
      });
    }
  }
}
