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







const spaceshipWindow = document.createElement('div');
spaceshipWindow.setAttribute('class', 'spaceshipWindow'); 
container.appendChild( spaceshipWindow );

export {dashboard};
