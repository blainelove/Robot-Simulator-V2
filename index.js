document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const movesUl = document.querySelector('ul#moves-container')

  document.addEventListener("keydown", function(event) {
    const li =  document.createElement('li')

    switch(event.key){
      case "ArrowRight":
        li.innerHTML = "right"
        movesUl.append(li)
        break;
      case "ArrowLeft":
        li.innerHTML = "left"
        movesUl.append(li)
        break;
      case "ArrowUp":
        li.innerHTML = "up"
        movesUl.append(li)
        break;
      case "ArrowDown":
        li.innerHTML = "down"
        movesUl.append(li)
        break;
    }

  })

  const moveButton = document.querySelector("button#move-button")

  function doMoves(){
    for(let j = 0; j < movesUl.children.length; j++ ) {
      setTimeout(function(){
        move(movesUl.children[0].innerHTML)
        movesUl.children[0].remove()
      }, 500 * j)
    }
  }

  moveButton.addEventListener('click', doMoves)

  movesUl.addEventListener('click', function(event) {
    console.log(event.target)
    if (event.target.matches('li')){
      event.target.remove()
    }
  })

});
