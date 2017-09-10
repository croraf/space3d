
const createDashboard = (container) => {

    const dashboard = {};

    const thrustInfo = document.createElement('div');
    thrustInfo.setAttribute('class', 'thrustInfo');
    container.appendChild( thrustInfo );

    dashboard.thrustInfo = thrustInfo;
    return dashboard;
}

export {createDashboard};
