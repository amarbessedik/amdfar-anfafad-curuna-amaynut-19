import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from '../util';

function Map({ countries, center, zoom, casesType}) {
    // console.log("countries MAP >>>", countries);
    return (
      <div id="mapp" className="map">
        <LeafletMap center={center} zoom={zoom}>
          <TileLayer
            fillColor="red"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <ahref="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Loop through countries and draw circles on the screen */}
          {showDataOnMap(countries, casesType)}
        </LeafletMap>
        <br />
        <p
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "#61dafb",
          }}
        >
          Tamaziɣt Tezmmer Atteḍfer Tamusni Tatrart (Aselkiman) am Nettat am
          Tutlayin niḍen. Tekkit af yiwen uzday imdawer neɣ tiqfilt attezrem
          akter. Tzemrem daɣen attṣubem d akssar.
        </p>
      </div>
    ); 
}

export default Map;
