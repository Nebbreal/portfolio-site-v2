import Button from "../Button.tsx";

function ContactInfo() {
    return <>
        <div className={"flex flex-col items-center"}>
            <h2>Email</h2>
            <a href={"mailto:demien401@gmail.com"}><p
                className={"text-secondary underline"}>demien401@gmail.com</p></a>
        </div>

        <h2>You can also find me at</h2>
        <div className={"grid grid-cols-2 gap-x-5 gap-y-2"}>
            <a href={"/assets/files/CV_Demien_van_Laarhoven.pdf"} target={"_blank"}>
                <Button className={"w-full"} imageUrl={"/assets/icons/Note.svg"}>
                    <p>CV</p>
                </Button>
            </a>
            <a href={"https://nebbdev.itch.io/"} target={"_blank"}>
                <Button className={"w-full"} imageUrl={"/assets/images/external-icons/ItchIoLogo.svg"}>
                    <p>Itch.io</p>
                </Button>
            </a>
            <a href={"https://github.com/Nebbreal"} rel={"noopener noreferrer"} target={"_blank"}>
                <Button className={"w-full"} imageUrl={"/assets/images/external-icons/GithubLogo.svg"}>
                    <p>Github</p>
                </Button>
            </a>
            <a href={"https://www.linkedin.com/in/demi%C3%ABn-van-laarhoven/"} rel={"noopener noreferrer"}
               target={"_blank"}>
                <Button className={"w-full"} imageUrl={"/assets/images/external-icons/LinkedInLogo.svg"}>
                    <p>LinkedIn</p>
                </Button>
            </a>
            <a href={"https://bsky.app/profile/nebbdev.bsky.social"} rel={"noopener noreferrer"}
               target={"_blank"}>
                <Button className={"w-full"} imageUrl={"/assets/images/external-icons/BskyLogo.svg"}>
                    <p>BlueSky</p>
                </Button>
            </a>
        </div>
    </>;
}

export default ContactInfo