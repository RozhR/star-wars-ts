import OpeningCrawl from "./OpeningCrawl.tsx";
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import {useHero} from "./ui/useHero.ts";
import HeroGuard from "./ui/HeroGuard.tsx";

const Home = () => {
    const {isHeroExists} = useHero();

    return (
        <HeroGuard isExists={isHeroExists}>
            <main>
                <Hero/>
                <DreamTeam/>
                <OpeningCrawl/>
            </main>
        </HeroGuard>
    );
}
export default Home;