import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/interfaces';
import { CharacterService } from '@app/shared';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character: any = {};
  // residents: Character[] = [];

  private Alive: string = 'Alive';
  private dead: string = 'Dead';
  // private unknown: string = 'unknown';
  constructor(
    private readonly route: ActivatedRoute,
    private characterServices: CharacterService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getCharacterDetail();
  }

  getCharacterDetail(): void {
    this.route.params.subscribe((params) => {
      this.characterServices
        .getCharacter(params['id'])
        .subscribe((res: any) => {
          if (res.id) {
            console.log(res);
            this.character = res;
            // this.getLocationInfo(res.location.url)
          } else {
            this.character = {};
          }
        });
    });
  }

  navigateBack(): void {
    this.location.back();
  }

  // getLocationInfo(url: string): void {
  //   this.characterServices.getLocation(url).subscribe((res: any) => {
  //     for (let i = 0; i < res.residents.length; i++){
  //       this.characterServices.getLocation(res.residents[i]).subscribe((resi:any) => {
  //         this.residents.push(resi)
  //       })
  //     }
  //   });
  // }
}
