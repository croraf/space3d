import {sounds} from '../model/sounds/sounds';

const setupAudio = () => {

    const rocketMissile = new Audio('rocket_missile.wav');

    rocketMissile.volume = 0.02;
    sounds.rocketMissile = rocketMissile;
    
    /* const bullet = new Audio('bullet2.mp3');
    
    bullet.volume = 0.2;
    sounds.bullet = bullet; */
    /* const audio_file = new Audio('engine3.mp3'); */
    /* audio_file.play();
    audio_file.loop = true;  */
    /* container.appendChild(audio_file);*/

    /* audio_file.addEventListener('timeupdate', function(){
        console.log('rafa');
        var buffer = .44;
        if(this.currentTime > this.duration - buffer){
            this.currentTime = 0;
            this.play();
        }}, false); */

};

export {setupAudio};
