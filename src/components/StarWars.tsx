import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useHero} from "./ui/useHero.ts";
import HeroGuard from "./ui/HeroGuard.tsx";


const StarWars = () => {
    const {isHeroExists} = useHero();

    return (
        <HeroGuard isExists={isHeroExists}>
            <Text>{starWarsInfo}</Text>
        </HeroGuard>
    );
}

export default StarWars;