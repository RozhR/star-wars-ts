import {useContext, useEffect} from "react";
import {useParams} from "react-router";
import {SWContext} from "../../utils/context.ts";
import {characters, defaultHero} from "../../utils/constants.ts";


export const useHero = () => {
    const {changeHero} = useContext(SWContext);
    const {heroId = defaultHero} = useParams();

    const isHeroExists = heroId in characters;

    useEffect(() => {
        if (isHeroExists) {
            changeHero(heroId);
        }
    }, [heroId]);

    return {heroId, isHeroExists};
};