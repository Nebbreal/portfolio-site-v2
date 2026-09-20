import Button from "../../components/Button.tsx";

function ContactPage(){
    return (
        <div className={"h-[78vh] flex flex-col justify-between items-center py-10"}>
            <h1>Contact</h1>

            <div className={"flex flex-col items-center"}>
                <h2>Email</h2>
                <a href={"mailto:demien401@gmail.com"}><p className={"text-secondary underline"}>demien401@gmail.com</p></a>
            </div>

            <div className={"flex flex-col items-center"}>
                <h2>You can also find me at</h2>
                <div className={"flex flex-col lg:flex-row gap-2"}>
                    <a href={"/assets/files/CV_Demien_van_Laarhoven.pdf"} target={"_blank"}>
                        <Button className={"w-50"} imageUrl={"/assets/icons/Note.svg"}>
                            <p>CV</p>
                        </Button>
                    </a>
                    <a href={"https://nebbdev.itch.io/"} target={"_blank"}>
                        <Button className={"w-50"} imageUrl={"/assets/images/external-icons/ItchIoLogo.svg"}>
                            <p>Itch.io</p>
                        </Button>
                    </a>
                    <a href={"https://github.com/Nebbreal"} rel={"noopener noreferrer"} target={"_blank"}>
                        <Button className={"w-50"} imageUrl={"/assets/images/external-icons/GithubLogo.svg"}>
                            <p>Github</p>
                        </Button>
                    </a>
                    <a href={"https://www.linkedin.com/in/demi%C3%ABn-van-laarhoven/"} rel={"noopener noreferrer"} target={"_blank"}>
                        <Button className={"w-50"} imageUrl={"/assets/images/external-icons/LinkedInLogo.svg"}>
                            <p>LinkedIn</p>
                        </Button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ContactPage