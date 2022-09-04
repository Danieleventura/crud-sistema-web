import { Component, OnInit, ViewChild } from '@angular/core';
import { NguiMapComponent } from '@ngui/map/components/ngui-map.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  nguiMapComponent: NguiMapComponent;
  dataJson: any[];
  stylesHide = {
    hide: [
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      }
    ],
  };
  marker='assets/img/marker-hospital.png';
  constructor() { this.requestData();}

  ngOnInit() { }

  requestData() {
    fetch('assets/data/data.json').then(res => res.json())
    .then(json => {
      this.dataJson = json;
    });
  }

  infoWindow(data) {
    this.nguiMapComponent.openInfoWindow('iw', data);
  }
}

