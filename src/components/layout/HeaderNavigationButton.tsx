import {Link} from "react-router";

type HeaderNavigationButtonProps = {
    text: string,
    destination: string
}

function HeaderNavigationButton(props: HeaderNavigationButtonProps) {
    return (
        <Link className={"hover:opacity-70 transition-opacity"} to={props.destination}>
            <h3>{props.text}</h3>
        </Link>
    )
}

export default HeaderNavigationButton