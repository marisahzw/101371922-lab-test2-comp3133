import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
//import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];
  @Output() missionSelect = new EventEmitter<any>();

  constructor(private spacexapiService: SpacexapiService) { }

  ngOnInit(): void {
    this.spacexapiService.getAllMissions().subscribe((missions) => {
      console.log({missions});
      this.missions = missions;
    });
  }

  onFilter(year: string): void {
    if (year) {
      this.spacexapiService.getMissionsByYear(year).subscribe((missions) => {
        this.missions = missions;
      });
    } else {
      this.spacexapiService.getAllMissions().subscribe((missions) => {
        this.missions = missions;
      });
    }
  }

  onMissionSelect(mission: any): void {
    this.missionSelect.emit(mission);
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }
}
