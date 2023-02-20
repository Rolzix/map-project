import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { mapbox } from "./Map.jsx";
import maplibregl from "maplibre-gl";
import "./App.css";
// Map();
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="leftSide">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* <div className="card"></div> */}
      {/* <h1>Vite + React</h1> */}

      <div className="inputField">
        <form className="fly">
          <fieldset>
            <legend>Fly to coordinates</legend>
            <label>
              Latitude:
              <br />
              <input type="number" name="latitude" id="lat" />
            </label>
            <br />

            <label>
              Longitude:
              <br />
              <input type="number" name="longitude" id="lon" />
            </label>
            <br />

            <label>
              Zoom:
              <br />
              <input type="number" name="zoom" id="zoom" />
            </label>
            <br />
            <br />
            <button onClick={fly}>Fly!</button>
          </fieldset>
        </form>
        {/* <input type="text" name="" placeholder="23.1172" id="lat" />
        <input type="text" name="" placeholder="60.39" id="lon" /> */}
      </div>
    </div>
  );
}

function fly() {
  event.preventDefault();
  let lat = document.querySelector("#lat").value;
  let lon = document.querySelector("#lon").value;
  let zoom = document.querySelector("#zoom").value;
  // console.log(lat, lon);
  mapbox.flyto(lat, lon, zoom);
}

export default App;
// mapbox.addRTLTextPlugin(
//   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js"
// );
// mapbox.addNavigationControl();
// mapbox.marker();
// console.log(mapbox.center);
