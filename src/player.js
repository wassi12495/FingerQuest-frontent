
class Player{

  static movePlayer(func){
    window.requestAnimationFrame(func)
  }

  static movePlayerLeft() {
    const PLAYER = document.getElementById('player')
    var leftNumbers = PLAYER.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    PLAYER.style.left = `${left - 4}px`
    // if (PLAYER.style.left > '0px' ){
    //
    // }
    // else{
    //   PLAYER.style.left = `${left}px`
    // }

  }

  static movePlayerRight() {
    const PLAYER = document.getElementById('player')

    var leftNumbers = PLAYER.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    PLAYER.style.left = `${left + 4}px`
    if (PLAYER.style.left > '0px' ){
    }
    else{
      PLAYER.style.left = `${left}px`
    }

  }
  static shoot(){
    console.log("shoot")
    Bullet.createBulletDiv();
  }





}
