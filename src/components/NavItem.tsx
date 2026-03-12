import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

const NavItem = ({itemTitle}: { itemTitle: string }) => {
const {hero} = useContext(SWContext)
    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;