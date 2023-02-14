function change_threshold() {
        
    var sel = document.getElementById("sp_select");

    var sp = sel.options[sel.selectedIndex].text;
    
    var thr_x = document.getElementById("thr_select").value;

    document.getElementById("demo2").innerHTML = "You selected: " + thr_x;
    
    // load GeoJSON from an external file
    var layer_url = "https://raw.githubusercontent.com/kemushi54/moth_data/main/data/polygon/" + sp + "_" + thr_x + ".geojson";
    
    fetch(layer_url)
    .then(res => res.json())
    .then(data => {
      if (polygon) {
        map.removeLayer(polygon);
    }
      // add GeoJSON layer to the map once the file is loaded
      polygon = L.geoJson(data).addTo(map);
    });

  }