import BlogBase from "./template/BlogBase.tsx";
import {MeerMomoProject} from "../../data/projects.ts";
import Image from "../../components/Image.tsx";

function MeerMomoBlog() {
    return (
        <BlogBase projectObj={MeerMomoProject}>
            <h2>The Modular Fish System</h2>
            <p>
                During development of Meer Momo research on other Pillo games showed us that we needed variety in the
                reward players get to keep them engaged with the game for longer periods of time.
            </p>

            <Image title={"FishingGameReferences.jpg"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""} />
            <p>
                When looking at other games that feature fishing like
                <span className={"text-secondary"}> Stardew Valley </span>
                or <span className={"text-secondary"}>WEBFISHING</span> you quickly notice
                that they have a large variety of unique fish.
            </p>
            <br/>
            <p>
                However due to time constraints it is not possible to
                draw a large amount of fish to keep the reward interesting. Because of this it was decided that
                we needed a system that allows us to create <span className={"text-secondary"}>a large amount of unique fish </span>
                while only requiring <span className={"text-secondary"}> a low amount of art assets</span>.
            </p>

            <Image title={"ModularSpriteReferences.jpg"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""} />
            <p>
                In my research I landed on 2 paths I could take for the Modular Fish System,
                a modular sprint sheet or a GameObject with handles approach.
                There are of course more ways to tackle this problem however these seemed to fit this case best.
            </p>
            <br/>

            <h3>Modular sprite sheet</h3>
            <Image title={"ModularSpriteSheetExample.jpg"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""}/>
            <p>
                The modular sprite sheet approach splits the fish sprite up into one spritesheet for each body part.
                When a sprite needs to be created the system slices one of hte variations from each of the spritesheets.
                These sprites then get put together to create a new unique sprite.
            </p>
            <br/>
            <p>
                While this method is <span className={"text-secondary"}>effective and fast to implement</span> it does require <span className={"text-secondary"}>strict rules about the spritesheets</span>,
                is not very scalable and makes it harder to position the cut sprites on different types of bodies.
            </p>
            <br/>

            <h3>GameObject with handles</h3>
            <Image title={"GameObjectExample.jpg"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""}/>
            <p>
                This approach makes use of Unity's object structure to position and assign parts.
            </p>
            <br/>
            <p>
                Handles are created by attaching empty GameObjects (depicted as a red cube) as a child of the body
                GameObject which allows you to put anything in its place, in our case this will be a sprite renderer
                with a randomly attached sprite.
            </p>
            <br/>
            <p>
                This method allows for <span className={"text-secondary"}>great customization and control </span>
                over the sprites that the system creates while being <span className={"text-secondary"}>more maintainable </span>
                than the Modular Sprite sheet approach.
            </p>
            <br/>
            <p>
                However the drawback of this method is that it requires
                <span className={"text-secondary"}> a bit more initial setup</span> as specific fish bodies
                need to have their part slots manually assigned
            </p>
            <br/>

            <h3>The end result</h3>
            <p>
                For Meer Momo I chose to use the <span className={"text-secondary"}>GameObject</span> approach due to its enhanced control, customization and scalability
            </p>
            <Image title={"MFSFishBase.png"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""} />
            <p>
                In the GameObject approach developers can provide the system with fish bases which can contain an infinite
                amount of child parts. These child parts require a tag so that the system knows which sprite to slot into there.
            </p>

            <Image title={"MFSEditorParts.png"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""} />
            <p>
                In the Unity editor developers are able to configure which sprites are able to be selected by the system.
            </p>

            <Image title={"ConfigurationFields.png"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""}/>
            <p>
                Configurations such as the size of the fish, chance for a hat or chance that a color shiftable sprite
                gets picked can also be set here.
            </p>

            <Image title={"GeneratedFishExamples.webp"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={""} />
            <p>
                This all results in a system where a small pool of sprites can create a large amount of Fish
            </p>
        </BlogBase>
    )
}

export default MeerMomoBlog;