const menu = {
    on: false
};

const toggleMenu = () => {

    if (menu.on) {
        menu.on = false;
    } else if (menu.on === false) {
        menu.on = true;
    }

    
    console.log(menu.on);
};

export {menu, toggleMenu};
