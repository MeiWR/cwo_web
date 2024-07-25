
//Google Maps Api = AIzaSyBCOKrBYGCeqYd63lJV34t5QFtH8DvalG4
import React from "react";
//import "./App.css";

import Map from "./Map.js";


function Info() {
  return (
    <div className="Info">
        <div className="InfoWrap">
          <div className="InfoTextWrap">
            <h2 className="Blue">Kdy a kde?</h2>
            <p className="Datum">20. - 22. 12. 2024</p>
            <p>Fakulta sportovních studií</p>
            <p>MU Brno</p>
            <div className="Adress">Kamenice 753/5, 625 00 Brno-Bohunice</div>
          </div>
          <div className="WrapMap">
            <Map />
          </div>
        </div>
    </div>
  );
}

export default Info;