import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const KEY_GOOGLE = 'AIzaSyArVu_T7hnkFD4FvzxXD8VO7n995KWapm8'
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.less']
})
export class MapViewComponent implements OnInit {

  // apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 10.584190, lng: 107.310520},
    zoom: 20
  };
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 10.584190, lng: 107.310520}
  ];
  constructor(httpClient: HttpClient) {
  }

  ngOnInit() {
  }

}
