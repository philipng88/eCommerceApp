import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSignOutAlt, faSignInAlt, faSearch, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faShoppingCart, faSignOutAlt, faSignInAlt, faSearch, faPlus, faMinus)
}

export default Icons 