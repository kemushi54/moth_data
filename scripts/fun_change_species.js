function change_species() {
    var sel = document.getElementById("sp_select");

    var sp = sel.options[sel.selectedIndex].text;

    var sp_x = sel.options[sel.selectedIndex].value;
    
    document.getElementById("demo").innerHTML = "You selected: " + "<i>" + sp + "</i>";
    
    document.getElementById("image").src = "images/" + sp +".png";

    // load GeoJSON from an external file
    // remove points if points exist
    // add points from source
    var point_url = "https://raw.githubusercontent.com/kemushi54/moth_data/main/data/points/" + sp + ".geojson";
    
    fetch(point_url)
    .then(res => res.json())
    .then(data => {
      if (points) {
        map.removeLayer(points);
    }
      // add GeoJSON layer to the map once the file is loaded
      points = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 5,
            color: 'red'
          });
        }
      }).addTo(map);
    });

  }