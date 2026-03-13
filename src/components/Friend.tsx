import {characters, navItems} from "../utils/constants.ts";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface Props {
    friend: string;
    pos: number;
}

const Friend = ({friend, pos}: Props) => {
    const {changeHero} = useContext(SWContext);

    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    return (
        <NavLink to={`/${navItems[0]}/${friend}`}
            onClick={() => changeHero(friend)}>
            <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
        </NavLink>
    )
}

export default Friend;