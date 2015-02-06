var map;
function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(40.418641, -86.892279)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var latlng = [ [40.418641, -86.892279], [40.423460, -86.922749],
  [40.446476, -86.921740], [40.398086, -86.869823], [40.402821, -86.839289]];
  
  markers = []
  // randomly make a heatmap around these area
  for(i=0; i<5; i++) {
    markerList = []
    for (j=0; j<100; j++) {
      randomLat = (Math.random() - 0.5) / 50;
      randomLng = (Math.random() - 0.5) / 50;
      markerList = markerList.concat([ new google.maps.LatLng(latlng[i][0] + randomLat, latlng[i][1] + randomLng)]);
    }
    markers = markers.concat(markerList);
  }

  var pointArray = new google.maps.MVCArray(markers);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });
changeOpacity();
changeRadius();
//changeGradient();
  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 15);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
}

google.maps.event.addDomListener(window, 'load', initialize);