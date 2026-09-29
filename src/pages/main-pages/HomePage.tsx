import Button from "../../components/Button.tsx";
import Image from "../../components/Image.tsx";
import {Link} from "react-router";
import HomePageHighlight from "../../components/HomePageHighlight.tsx";
import {FrightlessBirdsProject, MeerMomoProject} from "../../data/projects.ts";

function HomePage() {
    return (
        <div className={"lg:flex lg:justify-between relative"}>
            <div>
                <h1>Hoi o/</h1>
                <h1>I'm <span className={"text-primary"}>Demiën van Laarhoven</span></h1>
                <h2 className={"lg:w-180 mt-2"}>A <span className={"text-secondary"}>gameplay programmer</span> from the Netherlands who loves bringing stuff to life with code.</h2>
                <h2>I am mainly experienced in <span className={"text-secondary"}>Unity</span>.</h2>

                <div className={"flex flex-col mt-10 gap-5"}>
                    <Link to="/projects">
                        <Button className={"w-full max-w-80"}>
                            <h1>Projects</h1>
                        </Button>
                    </Link>
                    <Link to="/aboutme">
                        <Button className={"w-full max-w-80"}>
                            <h1>About me</h1>
                        </Button>
                    </Link>
                </div>

                <div>
                    <h3>//Say hi to Luna for me :)</h3>
                    <Image title={"Luna.jpg"} imageUrl={"/assets/images/other/Luna.jpg"} alt={"A picture of my dog named Luna"}/>
                </div>
            </div>

            <div className={"flex flex-col gap-y-5"}>
                <h2>Highlighted project(s)</h2>
                <HomePageHighlight project={FrightlessBirdsProject} blogUrl={"projects/frightlessbirds"} />
                <HomePageHighlight project={MeerMomoProject} blogUrl={"projects/meermomo"} />
            </div>
        </div>
    )
}

export default HomePage