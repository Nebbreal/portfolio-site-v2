import Button from "../../components/Button.tsx";
import Image from "../../components/Image.tsx";
import {Link} from "react-router";

function Home() {
    return (
        <>
            <h1>Hoi o/</h1>
            <h1>I'm <span className={"text-primary"}>Demiën van Laarhoven</span></h1>
            <h2>A <span className={"text-secondary"}>gameplay programmer</span> from the Netherlands who loves bringing stuff to life with code</h2>
            <h2>I am mainly experienced in <span className={"text-secondary"}>Unity</span></h2>

            <div className={"flex mt-20 gap-5"}>
                <Button>
                    <Link to="/projects">
                        <h1>Projects</h1>
                    </Link>
                </Button>
                <Button>
                    <Link to="/skills">
                        <h1>Skills</h1>
                    </Link>
                </Button>
                <Button>
                    <Link to="/contact">
                        <h1>Contact</h1>
                    </Link>
                </Button>
            </div>

            <div className={"mt-50"}>
                <Image title={"Luna.jpg"} imageUrl={"assets/images/other/Luna.jpg"} alt={"A picture of my dog named Luna"}/>
            </div>
        </>
    )
}

export default Home