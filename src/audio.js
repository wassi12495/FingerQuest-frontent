class Audio {

  constructor(url, ){}

  static playerHitSounds(level){

    switch (level) {
      case 1:
        Audio.playSound(url)
        break;


    }
  }

  static playSound(url){
    document.getElementById('game').appendChild(div);
    const audioDiv = document.createElement('div');
    audioDiv.innerHTML = `<audio id="hotline" src="git@github.com:wassi12495/FingerQuest-frontent.git" autoplay></audio>`;
    document.getElementById('game').appendChild(audioDiv);


  }


}
