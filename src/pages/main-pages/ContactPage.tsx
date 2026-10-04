import Image from "../../components/Image.tsx";
import ContactInfo from "../../components/contact/ContactInfo.tsx";
import Card from "../../components/Card.tsx";

function ContactPage(){
    return (
        <div className={"flex flex-col justify-between items-center py-10 xl:px-[12%]"}>
            <div className={"flex flex-col lg:flex-row gap-x-10 gap-y-5"}>
                <div>
                    <Image title={"Me.jpg"} imageUrl={"/assets/images/other/Me.jpg"}
                           alt={"A 21 year old with short brown hair, a cream colored t-shirt and jeans"}/>

                    <div className={"hidden lg:flex flex-col items-center"}>
                        <ContactInfo/>
                    </div>
                </div>

                <div className={"lg:w-3/4"}>
                    <Card title={"AboutMe.txt"}>
                        <div className={"px-5 py-2"}>
                            <h1 className={"text-primary"}>Hoi o/</h1>
                            <p>
                                I'm Demiën van Laarhoven, a 21 year old <span
                                className={"text-secondary"}>game programmer</span> from the Netherlands who loves bringing
                                stuff to life with code.
                            </p>
                            <br/>
                            <p>
                                My first experience with pc gaming started off early at the age of 9.
                                At that time I was playing games such as A Hat in Time and Minecraft,
                                these games kickstarted my love for the medium. This love led to me making mods
                                and, in 2023, even a project to start learning my first game engine.
                            </p>
                            <br/>
                            <p>
                                Later on, I enrolled into Fontys ICT in Eindhoven,
                                where I've followed the <span className={"text-secondary"}>Game Design and Game Production </span>
                                semesters. Throughout my studies I've specialized in <span className={"text-secondary"}>programming gameplay and game systems</span>.
                                I've mainly used C# and Unity, however I have used other engines like Godot in
                                my personal projects.
                            </p>
                            <br/>
                            <p>
                                My biggest strength in programming is my rapid adaptability. This,
                                combined with being eager to learn allows me to pick up new things pretty quickly.
                            </p>
                            <br/>
                            <p>
                                Have any questions or want to connect? You can ask me anything via email or through one of the
                                buttons :).
                            </p>
                        </div>
                    </Card>

                </div>
                <div className={"flex lg:hidden flex-col items-center"}>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage