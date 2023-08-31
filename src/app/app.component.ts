import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements=[
    {type:'server',name:'First Server', content:'My First server content.'},
    {type:'blueprint',name:'First Blue Print Server', content:'My First BluePrint server content.'}
  ];
  constructor(){}

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
}
