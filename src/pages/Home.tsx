import Button from "../components/Button.tsx";
import Image from "../components/Image.tsx";

function Home() {
    return (
        <div className={"mx-12 mt-2"}>
            <p className={"text-lowlight font-heading"}>Home</p>

            <h1>Hoi o/</h1>
            <h1>I'm <span className={"text-primary"}>Demiën van Laarhoven</span></h1>
            <h2>A <span className={"text-secondary"}>gameplay programmer</span> from the Netherlands who loves bringing stuff to life with code</h2>
            <h2>I am mainly experienced in <span className={"text-secondary"}>Unity</span></h2>

            <div className={"flex mt-20 gap-5"}>
                <Button label={"Projects"}/>
                <Button label={"Skills"}/>
                <Button label={"Contact"}/>
            </div>

            <div className={"mt-50"}>
                <Image title={"Luna.jpg"} imageUrl={"assets/images/other/Luna.jpg"} alt={"A picture of my dog named Luna"}/>
            </div>
        </div>
    )
}

export default Home