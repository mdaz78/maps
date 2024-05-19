export class Map {
  private googleMap: google.maps.Map;

  constructor(mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(mapDiv, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }
}
