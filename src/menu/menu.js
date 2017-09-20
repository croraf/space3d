import {menu} from '../model/menu/menu';
import {dashboard} from '../model/dashboard/dashboard';

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
