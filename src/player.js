PLAYERHEIGHT = 20
PLAYERWIDTH = 40

class Player{

  static movePlayer(func){
    window.requestAnimationFrame(func)
  }

  static movePlayerLeft() {
    const PLAYER = document.getElementById('player')
    var leftNumbers = PLAYER.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    PLAYER.style.left = `${left - 4}px`


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
    if (Player.ammo > 0) {
      Bullet.createBulletDiv();
      Player.ammo--
      document.getElementById('player-ammo').innerHTML = `${Player.ammo}`;
    } else {
      document.getElementById('player-ammo').innerHTML = "You Bout to Die";
    }
  }

  static takeHit(){
    const playerHealth = document.getElementById('player-health')
    Player.health -= 1;
    playerHealth.innerHTML = `${Player.health}`
    if (Player.health === 0) {
      alert("Damnnn You Suck");
      Player.status = "loss";
      Game.endGame();
    }
  }
}

Player.backpack = [];
Player.health = 3;
Player.ammo = 15;
Player.status = ""
