let keys = []
class EventListener{

  static movementListeners(){
    // EventListener.leftListener()
    // EventListener.rightListener()
    // EventListener.spaceListener()
    document.addEventListener('keydown', EventListener.keysPressed)
    document.addEventListener('keyup', EventListener.keysReleased)

  }


  static keysPressed(e){
    keys[e.key] = true
    e.preventDefault()
    console.log(keys)
    EventListener.doKeys()
  }

  static keysReleased(e){
    keys[e.key] = false
    e.preventDefault()
    console.log(keys)
    EventListener.doKeys()

  }

  static doKeys(){

    if(keys["ArrowLeft"] && keys[" "]){
      Player.movePlayerLeft()
      Player.shoot()
    }

    if(keys["ArrowRight"] && keys[" "]){
      Player.movePlayerRight()
      Player.shoot()
    }

    if(keys["ArrowRight"]){
      Player.movePlayerRight()
        console.log("Method")
    }

    if(keys["ArrowLeft"] ){
      Player.movePlayerLeft()
        console.log("Method")

    }
    if(keys[" "] ){
      Player.shoot()
    }

  }

  static rightListener(){
    document.addEventListener('keydown', function(e){
      e.preventDefault()
      const keyName = e.key;

      if (keyName === "ArrowRight") {
          console.log("Right")
          Player.movePlayerRight()
        }
      })
  }

  static leftListener(){
    document.addEventListener('keydown', function(e){
      e.preventDefault()
      const keyName = e.key;
      if (keyName === "ArrowLeft") {
          console.log("Left")
          Player.movePlayerLeft()
      }
    })
  }

  static spaceListener(){
    document.addEventListener('keydown', function(e){
      e.preventDefault()
      const keyName = e.key;
      if (keyName === " ") {
          console.log("Space")
          // Player.movePlayerLeft()
      }
    })
  }



    //     case "ArrowRight":
    //       console.log("Right")
    //       Player.movePlayerRight()
    //       break;
    //     case "ArrowUp":
    //     console.log("up")
    //
    //       break;
    //     case "ArrowDown":
    //     console.log("down")
    //
    //       break;
    //   }
    // })



}
