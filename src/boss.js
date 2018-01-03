
class Boss{

  static moveBoss(func){
    window.requestAnimationFrame(func)
  }

  static moveBossLeft() {
    const BOSS = document.getElementById('player')
    var leftNumbers = BOSS.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    BOSS.style.left = `${left - 4}px`
    // if (BOSS.style.left > '0px' ){
    //
    // }
    // else{
    //   BOSS.style.left = `${left}px`
    // }

  }

  static moveBossRight() {
    const BOSS = document.getElementById('player')

    var leftNumbers = BOSS.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    BOSS.style.left = `${left + 4}px`
    if (BOSS.style.left > '0px' ){
    }
    else{
      BOSS.style.left = `${left}px`
    }

  }
  static shoot(){
    console.log("shoot")
    Bullet.createBulletDiv();
  }

  static renderBoss(){
    return '<div id="boss" style="bottom: 500px; left: 350px; height: 150px"><img src="http://www.pngmart.com/files/2/Drake-Face-PNG-Clipart.png" style="width: 100%; height: 100%"></div>'
  }

  static appendBoss(){
    const div = document.createElement('div');
    div.innerHTML = Boss.renderBoss();
    document.getElementById('game').appendChild(div);
  }

}
