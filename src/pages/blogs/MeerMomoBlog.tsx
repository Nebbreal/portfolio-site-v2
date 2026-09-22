import BlogBase from "./template/BlogBase.tsx";
import {MeerMomoProject} from "../../data/projects.ts";
import Image from "../../components/Image.tsx";
import Button from "../../components/Button.tsx";
import type {Chapter} from "../../types/chapter.ts";

function MeerMomoBlog() {
    const chapters: Chapter[] = [
        {
            label: "The Modular Fish System",
            id: "The Modular Fish System",
        }
    ];

    return (
        <BlogBase projectObj={MeerMomoProject} chapters={chapters}>
            <h2 id={"The Modular Fish System"}>The Modular Fish System</h2>
            <p>
                During development of Meer Momo we did research on other Pillo games to see how they handled rewarding the player.
                That showed us that we needed <span className={"text-secondary"}>variety in the reward players get </span>
                to keep them engaged with the game for
                longer periods of time.
            </p>

            <Image title={"FishingGameReferences.png"} imageUrl={"/assets/images/projects/blogs/meer-momo/FishingGameReferences.png"} alt={"The capsule images of Stardew Valley and WEBFISHING side by side"} />
            <p>
                When looking at other games that feature fishing like
                <span className={"text-secondary"}> Stardew Valley </span>
                or <span className={"text-secondary"}>WEBFISHING</span> you quickly notice
                that they have a large variety of unique fish.
            </p>
            <br/>
            <p>
                However due to the time constraints of the project it is not possible to
                draw a large amount of fish to keep the reward interesting. Which is why it was decided that
                we needed a system that allows us to create <span className={"text-secondary"}>a large amount of unique fish </span>
                while only requiring <span className={"text-secondary"}> a small amount of art assets</span>.
            </p>
            <br/>
            <p>
                In my research I landed on 2 paths I could take for the Modular Fish System,
                a modular sprite sheet or a GameObject with part slots.
                There are more ways to tackle this problem however these seemed to fit this case best.
            </p>
            <br/>

            <h3>Modular sprite sheet</h3>
            <Image title={"ModularSpriteReference.png"} imageUrl={"/assets/images/projects/blogs/meer-momo/ModularSpriteReference.png"} alt={"Depicted are 2 spritesheets, 1 of possible human heads and the other of possible human bodies. Next to it is an arrow pointing toward a human consisting of 2 randomly selected parts. In the bottom left there is text saying 'Credit: Code Monkey on Youtube'"} />
            <p>
                The modular sprite sheet approach splits the fish sprite up into multiple spritesheets, one for each body part.
            </p>
            <br/>
            <p>
                When a sprite needs to be created the system slices one of the variations from each of the spritesheets.
                These sprites then get put together to create a new unique sprite.
            </p>
            <br/>
            <p>
                While this method is <span className={"text-secondary"}>effective and fast to implement</span> it does require <span className={"text-secondary"}>strict rules about the spritesheets</span>,
                is not very scalable and makes it harder to position the cut sprites on different types of bodies.
            </p>
            <br/>

            <h3>GameObject with slots</h3>
            <Image title={"GameObjectExample.png"} imageUrl={"/assets/images/projects/blogs/meer-momo/GameObjectExample.png"} alt={"A grey cube with smaller red cubes attached on top and to the right side of it."}/>
            <p>
                This approach makes use of Unity's object structure to position and assign parts.
            </p>
            <br/>
            <p>
                Part slots are created by attaching empty GameObjects (depicted as a red cube) as a child of the body
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
                <span className={"text-secondary"}> a bit more initial setup</span> as fish bodies
                need to have their part slots manually assigned.
            </p>
            <br/>

            <h3>The end result</h3>
            <p>
                For Meer Momo I chose to use the <span className={"text-secondary"}>GameObject with slots</span> approach due to its enhanced control, customization and scalability
            </p>
            <Image title={"MFSFishBase.png"} imageUrl={"/assets/images/projects/blogs/meer-momo/MFSFishBase.png"} alt={"A body of a fish covered in red squared on the places where the fish's eyes, fins and mouth should be."} />
            <p>
                In the GameObject approach developers can provide the system with <span className={"text-secondary"}>fish bases </span>
                which <span className={"text-secondary"}>can contain an infinite amount of child slots</span>.
                These child slots require <span className={"text-secondary"}>an Unity tag </span>
                so that the system knows which sprite to slot into which slot.
            </p>

            <Image title={"MFSEditorParts.png"} imageUrl={"/assets/images/projects/blogs/meer-momo/MFSEditorParts.png"} alt={"An image of the Unity editor showing multiple lists of fish bases and parts slotted into fields for the system to use."} />
            <p>
                In the Unity editor developers are able to configure which sprites are able to be selected by the system.
            </p>

            <Image title={"MFSEditorConfiguration.png"} imageUrl={"/assets/images/projects/blogs/meer-momo/MFSEditorConfiguration.png"} alt={"An image of the Unity editor showcasing various sliders to configure the system with. The configurable fields are: Fish size, Shiftable Base Chance, Shiftable Part chance, Hat chance, Minimum value, Minimum saturation"}/>
            <p>
                Configurations such as the size of the fish, chance for a hat or chance that a color shiftable sprite
                gets picked can also be set here.
            </p>

            <Image title={"GeneratedFishExamples.webp"} imageUrl={"/assets/images/projects/blogs/meer-momo/MFSShowcase.webp"} alt={"An animated picture showing uniquely colored fish being generated. A panel showcasing the parts selected can be found in the bottom left and a configuration panel in the bottom right."} />
            <p>
                This all results in a system where <span className={"text-secondary"}>a small pool of sprites </span>
                can create a large amount of Fish.
            </p>
            <br/>
            <p>A demo of this system can be found on itch.io</p>
            <a href={"https://nebbdev.itch.io/modular-fish-system-showcase"} target={"_blank"}>
                <Button imageUrl={"/assets/images/external-icons/ItchIoLogo.svg"}>
                    <h3>Play Modular Fish System demo</h3>
                </Button>
            </a>
        </BlogBase>
    )
}

export default MeerMomoBlog;