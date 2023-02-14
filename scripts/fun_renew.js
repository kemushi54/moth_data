// Create options according to alphabet selected
function renew(index){
    for(var i = 0; i < alphabet_species[index].length; i++)
    document.species_form.sp_select.options[i]=new Option(alphabet_species[index][i], i);	// 設定新選項
    document.species_form.sp_select.length=alphabet_species[index].length;	// 刪除多餘的選項
  }