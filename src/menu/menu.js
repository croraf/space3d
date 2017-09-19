import {menu} from '../redux/menu/menu';
import {dashboard} from '../dashboard';

let oldMenu = false;

const updateMenu = () => {
    if (menu.on !== oldMenu){
        oldMenu = menu.on;

        if (menu.on) {
            dashboard.menu.style.display = 'block';
        } else {
            dashboard.menu.style.display = 'none';
        }
        
    }
};

export {updateMenu};
