import {container} from './setup/webGLsetup';

const dashboard = {};

const thrustInfo = document.createElement('div');
thrustInfo.setAttribute('class', 'thrustInfo');
thrustInfo.innerHTML='0%';

container.appendChild( thrustInfo );

dashboard.thrustInfo = thrustInfo;


const rocketCooldown = document.createElement('div');
rocketCooldown.setAttribute('class', 'rocketCooldown');
rocketCooldown.innerHTML='0';

container.appendChild( rocketCooldown );
dashboard.rocketCooldown = rocketCooldown;


const selectedItem = document.createElement('div');
selectedItem.setAttribute('class', 'selectedItem');
selectedItem.innerHTML='';

container.appendChild( selectedItem );
dashboard.selectedItem = selectedItem;


export {dashboard};
