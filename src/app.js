const GeowikiAPI = require('@geowiki-net/geowiki-api')
const LeafletGeowiki = require('@geowiki-net/leaflet-geowiki/minimal')
LeafletGeowiki.modules.push(require('@geowiki-net/leaflet-geowiki/src/panes'))

var options = {}

// Create Leaflet map object
var map = L.map('map').setView([ 48.21, 16.37], 12)

// Show OSM map background
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// create link to overpass database (this could be a file too, e.g. data.osm or data.osm.bz2)
const todoData = new GeowikiAPI('Leuchtuerme2035.geojson')

// Initialize Geowiki viewer
todoLayer = new LeafletGeowiki({
  geowikiAPI: todoData,
  styleFile: 'todo.yaml',
}).addTo(map)

// create link to overpass database (this could be a file too, e.g. data.osm or data.osm.bz2)
const doneData = new GeowikiAPI('https://radnetz-dashboard.radlobby.at/bauprojekte.geojson?type=1&title=&jahr=&field_bilanzjahr_value=&tags_id=Stadtentwicklungsplan%20%2F%20STEP%202035%20%281538%29&field_bezirk_target_id=All&field_status_target_id=All&field_verschoben=All&field_radlobby_prioritaet_value=All&field_netz_id=All&field_route_target_id=All',{
  isFile: 'true',
  fileFormat: 'GeoJSON'
})

// Initialize Geowiki viewer
doneLayer = new LeafletGeowiki({
  geowikiAPI: doneData,
  styleFile: 'bauprojekte.yaml',
}).addTo(map)

// We could also add the map info with this command
//geowiki.setOption('info', { dom: document.getElementById('info') })
