import {container} from './setup/webGLsetup';

const dashboard = {};

const textRow = document.createElement('div');
textRow.setAttribute('class', 'textRow');
container.appendChild( textRow );


const thrustInfo = document.createElement('div');
thrustInfo.setAttribute('class', 'thrustInfo');
thrustInfo.innerHTML='0%';

textRow.appendChild( thrustInfo );
dashboard.thrustInfo = thrustInfo;


const selectedItem = document.createElement('div');
selectedItem.setAttribute('class', 'selectedItem');
selectedItem.innerHTML='';

textRow.appendChild( selectedItem );
dashboard.selectedItem = selectedItem;


const rocketCooldown = document.createElement('div');
rocketCooldown.setAttribute('class', 'rocketCooldown');
rocketCooldown.innerHTML='0';

textRow.appendChild( rocketCooldown );
dashboard.rocketCooldown = rocketCooldown;


const winRow = document.createElement('div');
winRow.setAttribute('class', 'winRow');
container.appendChild( winRow );
const winScreen = document.createElement('div');
winScreen.setAttribute('class', 'winScreen');
winScreen.innerHTML='';
dashboard.winScreen = winScreen;
winRow.appendChild( winScreen );


const topRow = document.createElement('div');
topRow.setAttribute('class', 'topRow');
topRow.innerHTML='';
container.appendChild( topRow );

const time = document.createElement('div');
time.setAttribute('class', 'time');
time.innerHTML='0';
dashboard.time = time;

topRow.appendChild(time);

export {dashboard};



/* const spaceshipWindow = document.createElement('div');
spaceshipWindow.setAttribute('class', 'spaceshipWindow'); 
container.appendChild( spaceshipWindow ); */

const gameDescription = document.createElement('div');
gameDescription.setAttribute('class', 'gameDescription');
gameDescription.innerHTML=
    'Use A,S,D,W to move. Left click to fire. Use CTRL+fire to fire rocket.<br />' +
    'Rocket has cooldown, shown bottom right. Right click the objects to get their info.<br />' +
    'Use shift key to enter cruise mode. Cruise engine has to load first (check bottom left corner with loading info).<br />' + 
    'Use pipelines to quickly move through space. Exit cruise or pipeline with ESC.<br /><br />' +
    'OBJECTIVE: Destroy all targets!';
container.appendChild( gameDescription );
