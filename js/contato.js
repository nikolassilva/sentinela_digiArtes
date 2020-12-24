var latitude = -19.86897;
var longitude = -43.83876;
var map = L.map('location-map').setView([latitude, longitude], 18);
mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 20,
    }).addTo(map);

L.marker([latitude, longitude]).bindPopup('Sentinela').addTo(map);
