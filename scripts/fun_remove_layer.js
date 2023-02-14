function remove_layer(){
    if (polygon) {
        map.removeLayer(polygon);
    }
}

function remove_point(){
    if (points) {
        map.removeLayer(points);
    }
}