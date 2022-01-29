import { HeroList } from "../hero/HeroList";


export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreens</h1>
            <hr />
            <HeroList publisher={'Marvel Comics'}/>
        </div>
    );
};

