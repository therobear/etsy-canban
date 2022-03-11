import React, {useState} from 'react';

const SideNav = () => {
    const [navState, setNavState] = useState({
        expanded: false,
        expandButtonLabel: '>>'
    });

    const NAV_MENU_ID = 'nav-menu';
    const NAV_EXPAND_BTN = 'nav-expand-btn';
    const MAIN_CONTAINER = 'container';

    const expandMenu = () => {
        let tmpState = navState;

        switch (tmpState.expanded) {
            case true:
                tmpState = {
                    expanded: false,
                    expandButtonLabel: '>>'
                }

                document.getElementById(NAV_MENU_ID).style.width = "4rem";
                document.getElementById(MAIN_CONTAINER).style.marginLeft = "6.5rem";
                // document.getElementById(NAV_EXPAND_BTN).style.width = "3.4rem";
                break;

            case false:
                tmpState = {
                    expanded: true,
                    expandButtonLabel: '<<'
                }

                document.getElementById(NAV_MENU_ID).style.width = "14rem";
                document.getElementById(MAIN_CONTAINER).style.marginLeft = "16.5rem";
                // document.getElementById(NAV_EXPAND_BTN).style.width = "13.4rem";
                break;
        }

        setNavState(tmpState);
    };

    return (
        <div id={NAV_MENU_ID} className="nav-main" style={{ borderRight: "1px solid red"}}>
            <div className="nav-title-btns-div">
                <button className="nav-title-btns" onClick={() => expandMenu()}>
                    E
                </button>
                Etsy Order Canban
            </div>
            
        </div>
    );
}

export default SideNav;