document.addEventListener("DOMContentLoaded",()=>{
  Adapter.getItems();
  EventListener.movementListeners()
  Game.runInputCheck()
  Box.setUpBoxes()
})
