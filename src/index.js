document.addEventListener("DOMContentLoaded",()=>{
  Adapter.getItems();
  Adapter.getScores();
  EventListener.movementListeners()
  Game.runInputCheck()
  Box.setUpBoxes()
})
