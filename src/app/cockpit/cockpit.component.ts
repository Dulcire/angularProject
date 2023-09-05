import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  @ViewChild('inputServerContent',{static:true}) inputServerContent :ElementRef;
  //newServerName:''; // html -> [(ngModel)] ="newServerName"
  //newServerContent:''; // html -> [(ngModel)] ="newServerContent"

  constructor(){}
  onAddServerAdded(inputServerName : HTMLInputElement){
    this.serverCreated.emit({
      serverName:inputServerName.value,
      serverContent: this.inputServerContent.nativeElement.value
    });
   }

  onAddBlueprintAdded(inputServerName : HTMLInputElement){
    this.bluePrintCreated.emit({
      serverName:inputServerName.value,
      serverContent: this.inputServerContent.nativeElement.value
    })
  }
}
