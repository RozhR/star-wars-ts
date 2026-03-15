import ErrorPage from "../ErrorPage";
import type {ReactNode} from "react";

type Props = {
    isExists: boolean
    children: ReactNode
}

const HeroGuard = ({isExists, children}: Props) => {
    if (!isExists) {
        return <ErrorPage/>
    }

    return <>{children}</>;
}

export default HeroGuard;