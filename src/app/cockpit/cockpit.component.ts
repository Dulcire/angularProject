import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName:'';
  newServerContent:'';

  constructor(){}
  onAddServerAdded(){
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent: this.newServerContent
    });
   }

  onAddBlueprintAdded(){
    this.bluePrintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
}
