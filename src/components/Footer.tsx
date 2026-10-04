import Button from "./Button.tsx";

function Footer() {
    return (
        <div>
            <hr className={"text-primary border-3"}/>
            <div className={"flex flex-col lg:flex-row ms-2 my-1"}>
                <div>
                    <h2 className={"text-lowlight"}>Demiën van Laarhoven</h2>
                    <div className={"flex"}>
                        <h3 className={"text-lowlight"}>Gameplay programmer</h3>
                        <h3 className={"text-lowlight px-2"}>|</h3>
                        <h3 className={"text-lowlight"}>Fontys ICT</h3>
                    </div>

                    <a href={"mailto:demien401@gmail.com"}>
                        <h3 className={"text-secondary"}>demien401@gmail.com</h3>
                    </a>
                </div>
                <div className={"lg:ms-4"}>
                    <h2 className={"text-lowlight"}>Find me at</h2>

                    <div className={"flex lg:flex-col lg:flex-row gap-x-2 gap-y-1"}>
                        <a href={"https://github.com/Nebbreal"} target="_blank" rel="noopener noreferrer">
                            <Button imageUrl={"/assets/images/external-icons/GithubLogo.svg"} imageAlt={"Github Logo"}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/demi%C3%ABn-van-laarhoven/"} target="_blank"
                           rel="noopener noreferrer">
                            <Button imageUrl={"/assets/images/external-icons/LinkedInLogo.svg"} imageAlt={"LinkedIn logo"}/>
                        </a>
                        <a href={"https://nebbdev.itch.io/"} target={"_blank"}>
                            <Button imageUrl={"/assets/images/external-icons/ItchIoLogo.svg"}/>
                        </a>
                        <a href={"https://bsky.app/profile/nebbdev.bsky.social"} rel={"noopener noreferrer"}
                           target={"_blank"}>
                            <Button imageUrl={"/assets/images/external-icons/BskyLogo.svg"} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer