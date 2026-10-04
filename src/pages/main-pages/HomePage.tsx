import Button from "../../components/Button.tsx";
import Image from "../../components/Image.tsx";
import {Link} from "react-router";
import {FrightlessBirdsProject, MeerMomoProject} from "../../data/projects.ts";
import Project from "../../components/project/Project.tsx";

function HomePage() {
    return (
        <div className={"lg:flex relative lg:justify-between"}>
            <div>
                <h1>
                    Hoi o/ <br/>
                    I'm <span className={"text-primary"}>Demiën van Laarhoven</span>
                </h1>
                <h2 className={"lg:w-180 mt-2"}>
                    A <span className={"text-secondary"}>gameplay programmer</span> from the Netherlands who loves bringing stuff to life with code. <br/>
                    I am mainly experienced in <span className={"text-secondary"}>Unity</span>.
                </h2>

                <div className={"flex flex-col mt-3 gap-5"}>
                    <Link to="/projects" className={"max-w-80"}>
                        <Button className={"w-full max-w-80"}>
                            <h1>Projects</h1>
                        </Button>
                    </Link>
                    <Link to="/aboutme" className={"max-w-80"}>
                        <Button className={"w-full max-w-80"}>
                            <h1>About me</h1>
                        </Button>
                    </Link>
                </div>

                <div className={"hidden lg:inline"}>
                    <h3>//Say hi to Luna for me :)</h3>
                    <Image className={"max-w-80"} title={"Luna.jpg"} imageUrl={"/assets/images/other/Luna.jpg"} alt={"A picture of my dog named Luna"}/>
                </div>
            </div>

            <div className={"mt-5 lg:mt-0 lg:w-1/2"}>
                <h2>Highlighted project(s)</h2>
                <div className={"flex flex-col lg:flex-row mt-3 gap-x-10 gap-y-5"}>
                    <Link className={"w-full flex flex-1"} to={"projects/frightlessbirds"}>
                        <Project project={FrightlessBirdsProject} lowDetail />
                    </Link>
                    <Link className={"w-full flex flex-1"} to={"projects/meermomo"}>
                        <Project project={MeerMomoProject} lowDetail />
                    </Link>
                </div>
            </div>

            <div className={"lg:hidden inline"}>
                <h3>//Say hi to Luna for me :)</h3>
                <Image title={"Luna.jpg"} imageUrl={"/assets/images/other/Luna.jpg"} alt={"A picture of my dog named Luna"}/>
            </div>
        </div>
    )
}

export default HomePage