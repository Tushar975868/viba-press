const initialState = false;

const showHideMobileNavBar = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_NAVBAR": return true;
        case "HIDE_NAVBAR": return false;
        default: return state;
    }
}

export default showHideMobileNavBar;