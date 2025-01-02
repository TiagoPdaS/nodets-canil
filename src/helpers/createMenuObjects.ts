type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' | 'outros';

export const createMenuObjects = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
        outros: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;

}
