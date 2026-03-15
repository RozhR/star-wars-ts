import {characters, period_month} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import HeroGuard from "./ui/HeroGuard.tsx";
import {useHero} from "./ui/useHero.ts";
import {SWContext} from "../utils/context.ts";

const AboutMe = () => {
    const {heroId, isHeroExists} = useHero();
    const {changeHero} = useContext(SWContext);
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            return hero.payload;
        }
    });

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
        if (!hero) {
            fetch(`${characters[heroId].url}`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [heroId]);

    return (
        <HeroGuard isExists={isHeroExists}>
            <>
                {(!!hero) &&
                    <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
                        {Object.keys(hero).map(key => <p key={key}>
                            <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key]}
                        </p>)}
                    </div>
                }
            </>
        </HeroGuard>
    );
}

export default AboutMe;