function change_species() {
    var sel = document.getElementById("sp_select");

    var sp = sel.options[sel.selectedIndex].text;

    var sp_x = sel.options[sel.selectedIndex].value;
    
    document.getElementById("demo").innerHTML = "You selected: " + sp;
    
    document.getElementById("image").src = "images/" + sp +".png";

  }