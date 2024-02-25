// Initialize and add the map
let map;

async function initMap() {
  // ubicación de Oh Do Kwan
  const position = { lat: 9.9181415, lng: -84.1035409 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // Mapa con Oh Do Kwan centrado
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // el marcador posicionado en Oh Do Kwan
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Taekwondo Oh Do Kwan",
  });
}

initMap();