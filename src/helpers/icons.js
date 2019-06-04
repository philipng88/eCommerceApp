import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSignOutAlt, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faShoppingCart, faSignOutAlt, faDoorOpen)
}

export default Icons 