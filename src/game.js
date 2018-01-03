
class Game {

  static checkInput(){
    EventListener.doKeys()

  }
  static runInputCheck(){
    let inputInterval = setInterval(Game.checkInput, 50)
  }
}
