import { Component } from '@angular/core';
//import { Mission } from './models/mission';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101371922-lab-test2-comp3133';
  selectedMission: any = {} as any;

  onMissionSelect(mission: any): void {
    this.selectedMission = mission;
  }
}
