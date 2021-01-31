  //Menu retratil
  function menuLateral(){
    let menu = document.getElementById("menu");
    let listaMenu = document.getElementById("listaMenu");

    if(menu.style.height == "80px"){
      menu.style.height = "150px";
    } else{
      menu.style.height = "80px";
    }
   
  }