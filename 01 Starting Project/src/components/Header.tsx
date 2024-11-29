import { type ReactNode } from "react";

type HeaderProps = {

    children: ReactNode;
    image: {
        src: string;
        alt: string;
    }
}

const Header = ({ image, children }: HeaderProps) => {
    return (
        <header>
            <img {...image} />
            {children}
        </header>
    )
}

export default Header