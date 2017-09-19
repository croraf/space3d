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

const autopilot = document.createElement('div');
autopilot.setAttribute('class', 'autopilot');
autopilot.innerHTML='';
dashboard.autopilot = autopilot;
topRow.appendChild(autopilot);

const dummy = document.createElement('div');
dummy.setAttribute('class', 'dummy');
dummy.innerHTML='a';
dashboard.dummy = dummy;
topRow.appendChild(dummy);


const menu = document.createElement('div');
menu.setAttribute('class', 'menu');
menu.innerHTML = 'CONTROLS: <br />' +
'A,S,D,W -> move. <br />Left-click -> fire. <br />CTRL+left-click -> fire rocket. <br />' +
'Right-click -> get object info. <br />Shift -> load cruise.<br /> Esc -> exit cruise or pipeline.<br /> Space -> toggle autopilot. <br />' +
'<br />DISPLAY: <br />Rocket cooldown -> bottom right. <br /> Cruise load -> bottom left.<br />' +
'Selected object info -> bottom middle. <br />' + 
'<br />' +
/* '<br /><br />' + */
'OBJECTIVE: Destroy all targets!';
menu.style.display = 'none';
dashboard.menu = menu;
container.appendChild(menu);


export {dashboard};



/* const spaceshipWindow = document.createElement('div');
spaceshipWindow.setAttribute('class', 'spaceshipWindow'); 
container.appendChild( spaceshipWindow ); */

const gameDescription = document.createElement('div');
gameDescription.setAttribute('class', 'gameDescription');
gameDescription.innerHTML= 'Press F1 to toggle MENU!';
    /* 'CONTROLS: <br />' +
    'A,S,D,W -> move. Left-click -> fire. CTRL+left-click -> fire rocket. ' +
    'Right-click -> get object info. Shift -> load cruise.<br /> ESC -> exit cruise or pipeline.<br /> SPACE -> toggle autopilot. <br />' +
    'INFO DISPLAY: <br />Rocket cooldown -> bottom right. <br /> Cruise load -> bottom left.' +
    'Selected object info -> bottom middle. <br />' + 
    '<br />' +
    'OBJECTIVE: Destroy all targets!'; */
container.appendChild( gameDescription );
