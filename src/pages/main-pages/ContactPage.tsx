import Image from "../../components/Image.tsx";
import ContactInfo from "../../components/contact/ContactInfo.tsx";

function ContactPage(){
    return (
        <div className={"flex flex-col justify-between items-center py-10 xl:px-[12%]"}>
            <div className={"flex flex-col lg:flex-row gap-x-10"}>
                <div>
                    <Image title={"Me.jpg"} imageUrl={"/assets/images/other/Me.jpg"}
                           alt={"A 21 year old with short brown hair, a cream colored t-shirt and jeans"}/>

                    <div className={"hidden lg:flex flex-col items-center"}>
                        <ContactInfo/>
                    </div>
                </div>

                <div className={"lg:w-3/4"}>
                    <h1 className={"text-primary"}>Hoi o/</h1>
                    <p>
                        I'm Demiën van Laarhoven, a 21 year old <span
                        className={"text-secondary"}>game programmer</span> from the Netherlands who loves bringing
                        stuff to life with code.
                    </p>
                    <br/>
                    <p>
                        My first experience with (pc) games was when I was little. At that time, I started playing games like
                        A Hat in Time and Minecraft which kickstarted my love for the medium.
                        This love eventually turned into me getting into making mods, and
                        in 2023, even a project to start learning my first game engine.
                    </p>
                    <br/>
                    <p>
                        Later on, I enrolled into Fontys ICT in Eindhoven,
                        where I've followed the <span className={"text-secondary"}>Game Design and Game Production </span>
                        semesters. In those semesters I specialized in <span className={"text-secondary"}>programming gameplay and game systems</span>.
                        During my study I've mainly used C# and Unity, however I have used other engines like Godot in
                        my personal projects.
                    </p>
                    <br/>
                    <p>
                        I would say that my biggest strength in programming is my rapid adaptability,
                        next to being eager to learn allowing me to pick up new things pretty quickly.
                    </p>
                    <br/>
                    <p>
                        Have any questions or want to connect? Feel free to reach out via email or through one of the
                        buttons :).
                    </p>
                </div>
                <div className={"flex lg:hidden flex-col items-center"}>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage