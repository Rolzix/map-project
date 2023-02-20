// export default function Map() {
//   var map = new maplibregl.Map({
//     container: "map",
//     style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json", // Style URL; see our documentation for more options
//     center: [23.1172, 60.39], // Initial focus coordinate
//     zoom: 10,
//   });

//   var marker = new maplibregl.Marker().setLngLat([30.5, 50.5]).addTo(map);

//   // // MapLibre GL JS does not handle RTL text by default, so we recommend adding this dependency to fully support RTL rendering.
//   // maplibregl.setRTLTextPlugin(
//   //   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js"
//   // );

//   // Add zoom and rotation controls to the map.
//   map.addControl(new maplibregl.NavigationControl());
// }

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
