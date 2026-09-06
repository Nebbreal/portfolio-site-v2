import Button from "../../components/Button.tsx";
import Image from "../../components/Image.tsx";
import {Link} from "react-router";
import HomePageHighlight from "../../components/HomePageHighlight.tsx";
import {FrightlessBirdsProject} from "../../data/projects.ts";

function HomePage() {
    const kittyASCI = `
     ,_     _
     |\\\\_,-~/
     / _  _ |    ,--.
    (  @  @ )   / ,-'
     \\  _T_/-._( (
     /         \`. \\
    |         _  \\ |
     \\ \\ ,  /      |
      || |-_\\__   /
     ((_/\`(____,-'
     `
    return (
        <div className={"lg:flex lg:justify-between min-h-[94vh]"}>
            <div>
                <h1>Hoi o/</h1>
                <h1>I'm <span className={"text-primary"}>Demiën van Laarhoven</span></h1>
                <h2 className={"lg:w-180 mt-2"}>A <span className={"text-secondary"}>gameplay programmer</span> from the Netherlands who loves bringing stuff to life with code.</h2>
                <h2>I am mainly experienced in <span className={"text-secondary"}>Unity</span>.</h2>

                <div className={"flex flex-col mt-10 gap-5"}>
                    <Button>
                        <Link to="/projects">
                            <h1>Projects</h1>
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/contact">
                            <h1>Contact</h1>
                        </Link>
                    </Button>
                </div>

                <div className={"mt-20"}>
                    <h3>//Say hi to Luna for me :)</h3>
                    <Image title={"Luna.jpg"} imageUrl={"/assets/images/other/Luna.jpg"} alt={"A picture of my dog named Luna"}/>
                </div>
            </div>

            <div className={"flex flex-col gap-y-5"}>
                <h2>Highlighted project(s)</h2>
                <HomePageHighlight project={FrightlessBirdsProject} blogUrl={"projects/frightlessbirds"} />
            </div>

            <div className={"absolute h-full w-full flex flex-col items-center justify-center -z-50"}>
                <pre className={"invisible lg:visible text-lowlight"}>
                    {kittyASCI}
                </pre>
            </div>
        </div>
    )
}

export default HomePage