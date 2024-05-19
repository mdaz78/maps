interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(mapDiv, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
