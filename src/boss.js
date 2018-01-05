let BOSSWIDTH = 90
let BOSSBOTTOM = 500
let BOSSDIRECTION = "left"
let BOSSINTERVALS = []
class Boss{

  static setDirection(){
    const BOSS = document.getElementById('boss')
    if (BOSS.offsetLeft < 10){
      BOSSDIRECTION = "right"
    }
    else if (BOSS.offsetLeft + BOSSWIDTH > 690){
      BOSSDIRECTION = "left"
    }
  }
  static bossMovement(){
    Boss.setDirection()
    if (BOSSDIRECTION === "right"){
      Boss.moveBossRight();
    }else{
      Boss.moveBossLeft();
    }
  }

  static moveBoss(){
    let bossInterval = setInterval(Boss.bossMovement, 70)
    let bossShootInterval = setInterval(Boss.bossShoot, 1500)
    BOSSINTERVALS.push(bossInterval)
    BOSSINTERVALS.push(bossShootInterval)



      // window.requestAnimationFrame(func)

  }

  static moveBossLeft() {
    const BOSS = document.getElementById('boss')
    var leftNumbers = BOSS.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    BOSS.style.left = `${left - 4}px`



  }

  static moveBossRight() {
    const BOSS = document.getElementById('boss')

    var leftNumbers = BOSS.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    BOSS.style.left = `${left + 4}px`


  }

  static bossShoot(){
    console.log("shoot")
    BossBullet.createBossBulletDiv();
  }

  static renderBoss(){
    return '<div id="boss" style="bottom: 500px; left: 350px; height: 150px"><img src="http://www.pngmart.com/files/2/Drake-Face-PNG-Clipart.png" style="width: 100%; height: 100%"></div>'
  }

  static createBoss(){
    const div = document.createElement('div');
    div.innerHTML = Boss.renderBoss();
    document.getElementById('game').appendChild(div);
    const audioDiv = document.createElement('div');
    audioDiv.innerHTML = '<audio id="hotline" src="/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/fingerquestmusic.mp3" autoplay></audio>';
    document.getElementById('game').appendChild(audioDiv);

    Boss.moveBoss()
  }

  static takeHit(){
    const bossHealth = document.getElementById('boss-health')
    Boss.health -= 1;
    console.log(Boss.health);
    bossHealth.innerHTML = `${Boss.health}`
    if (Boss.health === 0) {
      alert("My Hotline Blingin'");
      Game.endGame();
    }
  }

}

Boss.health = 3;
