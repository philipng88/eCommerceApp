import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faShoppingCart, faSignOutAlt, faSignInAlt)
}

export default Icons 