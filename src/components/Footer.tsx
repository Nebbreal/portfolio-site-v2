import Button from "./Button.tsx";

function Footer() {
    return <>
        <hr className={"text-primary border-3 mt-auto"}/>
        <div className={"flex ms-2 my-1"}>
            <div>
                <h2 className={"text-lowlight"}>Demiën van Laarhoven</h2>
                <h3 className={"text-lowlight"}>Gameplay programmer</h3>
                <a href={"mailto:demien401@gmail.com"}>
                    <h3 className={"text-secondary"}>demien401@gmail.com</h3>
                </a>
            </div>
            <div className={"ms-4"}>
                <h2 className={"text-lowlight"}>Find me at</h2>
                <div className={"flex gap-x-2"}>
                    <a href={"https://github.com/Nebbreal"} target="_blank" rel="noopener noreferrer">
                        <Button imageUrl={"/assets/images/external-icons/GithubLogo.svg"} imageAlt={"Github Logo"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/demi%C3%ABn-van-laarhoven/"} target="_blank"
                       rel="noopener noreferrer">
                        <Button imageUrl={"/assets/images/external-icons/LinkedInLogo.svg"} imageAlt={"LinkedIn logo"}/>
                    </a>
                </div>
            </div>
        </div>
    </>;
}

export default Footer