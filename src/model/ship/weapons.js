
const weapons = {
    turret: false,
    rocket: {
        fired: false,
        cooldown: 0
    }
};

const decreaseRocketCooldown = (time) => {
    weapons.rocket.cooldown = time;

    if (time === 0) return;

    setTimeout(()=>{decreaseRocketCooldown(time-1);}, 1000);
}

const fireRocket = () => {

    if (weapons.rocket.cooldown === 0){

        decreaseRocketCooldown(6);
        weapons.rocket.fired = true;
    }
}

export {weapons, fireRocket};
