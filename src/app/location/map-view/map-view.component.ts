import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
const KEY_GOOGLE = 'AIzaSyArVu_T7hnkFD4FvzxXD8VO7n995KWapm8'
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.less']
})
export class MapViewComponent implements OnInit {

  // apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 10.964112, lng: 106.856461},
    zoom: 10
  };
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 10.964112, lng: 106.856461}
  ];
  constructor(httpClient: HttpClient) {
  }

  ngOnInit() {
  }

}
