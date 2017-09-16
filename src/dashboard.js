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


const winScreen = document.createElement('div');
winScreen.setAttribute('class', 'winScreen');
winScreen.innerHTML='';
container.appendChild( winScreen );
dashboard.winScreen = winScreen;


const spaceshipWindow = document.createElement('div');
spaceshipWindow.setAttribute('class', 'spaceshipWindow'); 
container.appendChild( spaceshipWindow );

export {dashboard};


const gameDescription = document.createElement('div');
gameDescription.setAttribute('class', 'gameDescription');
gameDescription.innerHTML=
    'Use A,S,D,W to move. Left click to fire. Use CTRL+fire to fire rocket.<br />' +
    'Rocket has cooldown, shown bottom right. Right click the objects to get their info.<br />' +
    'Use shift key to enter cruise mode. Cruise engine has to load first (check bottom left corner with loading info).<br />' + 
    'OBJECTIVE: Destroy targets! (2 targets in this version)';
container.appendChild( gameDescription );
