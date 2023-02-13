function change_threshold() {
        
    var sel = document.getElementById("sp_select");

    var sp = sel.options[sel.selectedIndex].text;
    
    var thr_x = document.getElementById("thr_select").value;

    document.getElementById("demo2").innerHTML = "You selected: " + thr_x;
    
    // remove the old polygon...
    if(polygon){
      map.eachLayer(function (layer) {
         if (layer instanceof L.Polygon) {
             layer.remove()
          }
     });
     }
    
    // load GeoJSON from an external file
    //var layer_url = "https://raw.githubusercontent.com/kemushi54/moth_data/main/data/polygon/" + sp + "_" + thr_x + ".geojson";
    var layer_url = "https://raw.githubusercontent.com/kemushi54/moth_data/main/geojson/" + sp + "_" + thr_x + ".geojson";
    
    polygon = fetch(layer_url)
    .then(res => res.json())
    .then(data => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data).addTo(map);
    });

  }