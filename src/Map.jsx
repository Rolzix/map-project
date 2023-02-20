import maplibregl from "maplibre-gl";

const mapbox = {
  map: new maplibregl.Map({
    container: "map",
    style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json",
    center: [23.1172, 60.39],
    zoom: 10,
  }),
  marker() {
    new maplibregl.Marker().setLngLat([30.5, 50.5]).addTo(this.map);
  },

  flyto(lat, lon, zoomi = 10) {
    this.map.flyTo({ center: [lat, lon], zoom: zoomi });
  },
  // addRTLTextPlugin: function (url) {
  //   maplibregl.setRTLTextPlugin(url);
  // },
  addNavigationControl: function () {
    this.map.addControl(new maplibregl.NavigationControl());
  },
};

export { mapbox };
