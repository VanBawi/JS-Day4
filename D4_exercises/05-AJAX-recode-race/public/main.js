function keyPress(x){
    if (x.keyCode === 81){
      var first = document.querySelector("#player1_race .active");
      var fir =first.nextElementSibling;
      if (fir === null){
        alert("Red car has won!");
      } else{
        first.classList.remove("active");
        fir.classList.add("active");
      }
  }
   
    if (x.keyCode === 80){
      var second = document.querySelector("#player2_race .active");
      var sec =second.nextElementSibling;
      if (sec === null){
        alert("Blue car has won!");
      } else{
        second.classList.remove("active");
        sec.classList.add("active");
      }
    }
    else if (x.keyCode === 82) {
      location.reload();
    }
  }
  
  document.addEventListener("keyup", keyPress); 