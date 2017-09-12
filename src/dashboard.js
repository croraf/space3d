
const createDashboard = (container) => {

    const dashboard = {};

    const thrustInfo = document.createElement('div');
    thrustInfo.setAttribute('class', 'thrustInfo');
    thrustInfo.innerHTML='0%';

    container.appendChild( thrustInfo );

    const rocketCooldown = document.createElement('div');
    rocketCooldown.setAttribute('class', 'rocketCooldown');
    rocketCooldown.innerHTML='0';

    container.appendChild( rocketCooldown );

    dashboard.thrustInfo = thrustInfo;
    dashboard.rocketCooldown = rocketCooldown;
    return dashboard;
}

export {createDashboard};
