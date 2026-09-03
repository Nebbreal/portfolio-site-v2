import Button from "../../components/Button.tsx";

function ContactPage(){
    return (
        <div className={"h-[80vh] flex flex-col justify-center items-center"}>
            <h1>Contact</h1>
            <h2>Email</h2>
            <a href={"mailto@demien401@gmail.com"}><p className={"text-secondary"}>demien401@gmail.com</p></a>
            <h2>You can also find me at</h2>
            <div className={"flex gap-2"}>
                <Button imageUrl={"/assets/icons/Note.svg"}>
                    <p>CV</p>
                </Button>
                <a href={"https://github.com/Nebbreal"} rel={"noopener noreferrer"} target={"_blank"}>
                    <Button imageUrl={"/assets/images/external-icons/GithubLogo.svg"}>
                        <p>Github</p>
                    </Button>
                </a>
                <a href={"https://www.linkedin.com/in/demi%C3%ABn-van-laarhoven/"} rel={"noopener noreferrer"} target={"_blank"}>
                    <Button imageUrl={"/assets/images/external-icons/LinkedInLogo.svg"}>
                        <p>LinkedIn</p>
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default ContactPage