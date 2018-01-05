LEVEL = 1
class Game {

  static checkInput(){
    EventListener.doKeys()

  }
  static runInputCheck(){
    let inputInterval = setInterval(Game.checkInput, 50)
  }

  static lossRender(){
   return `<img src="http://pixel.nymag.com/imgs/daily/vulture/2015/10/20/drake-dance/drake-11.w529.h352.gif" style="width: 100%; height: 50%"><input type="text" id="username" placeholder="Enter Name"></input>  <label style="background-color: white">Your Score: ${Player.score}</label>  <button id="submit">Submit</button>`
  }
  static winRender(){
   return `<img src="https://static.tumblr.com/e7d7919f1820b1dd8644bbcbc720fd22/2r8vqrs/f1endis25/tumblr_static_tumblr_static_dh8es3dfz9wso4co440kk804s_640.jpg" style="width: 100%; height: 50%"><input type="text" id="username" placeholder="Enter Name"></input>  <label style="background-color: white">Your Score: ${Player.score}</label>  <button id="submit">Submit</button>`
  }

  static endGame(){
    BOSSBULLETINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })

    BOSSINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })
    BOSSINTERVALS.length = 0
    Player.score = (Player.health + Player.ammo) - (Boss.health);
    if (Player.status === "loss") {
      document.getElementById('game').innerHTML = Game.lossRender();
    } else {
      document.getElementById('game').innerHTML = Game.winRender();
    }
    const button = document.getElementById('submit');
    button.addEventListener("click", e => {
      e.preventDefault();
      debugger
      const username = document.getElementById('username').value;
      const jsonBody = {name: username, score: Player.score }
      Adapter.findCreate(jsonBody);
    })
  }


}
