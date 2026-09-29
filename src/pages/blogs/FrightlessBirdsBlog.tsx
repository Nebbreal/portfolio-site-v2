import {FrightlessBirdsProject} from "../../data/projects.ts";
import type {Chapter} from "../../types/chapter.ts";
import Image from "../../components/Image.tsx";
import BlogBase from "./template/BlogBase.tsx";

function FrightlessBirdsBlog() {
    const baseImagePath = "/assets/images/projects/blogs/frightless-birds/"

    const chapters: Chapter[] = [
        {
            id: "My contributions",
            label: "My contributions"
        },
        {
            id: "Core player actions",
            label: "Core player actions"
        },
        {
            id: "Event System",
            label: "Event System"
        },
        {
            id: "Minigame framework",
            label: "Minigame framework"
        },
        {
            id: "Brace Rework",
            label: "Brace Rework"
        },
        {
            id: "Frozen feathers(Minigame)",
            label: "Frozen feathers(Minigame)"
        }
    ]

    return (
        <BlogBase projectObj={FrightlessBirdsProject} chapters={chapters}>
            <h2 id="Core player actions">Core player actions</h2>
            <p>When creating Frightless Birds we had 2 core design pillars,
                <span className={"text-secondary"}> messing with your friends</span> and
                <span className={"text-secondary"}> simplicity</span>.</p>

            <Image title={"References.png"} imageUrl={baseImagePath + "FrightlessBirdsReferenceGames.png"}
                   alt={"A picture of the banner images for Wii Party and Celeste"}
            />
            <p>
                To achieve this we looked into how other games like Celeste kept their controls easy to understand
                and how party games like Wii Party create chaos.
            </p>
            <br/>
            <p>Based on our research we decided to stick to a small amount of actions players have which
                never change to keep things simple.
            </p>

            <h3>Dash</h3>
            <Image title={"Dash.webp"} imageUrl={baseImagePath + "PlayerActionsShowcaseDash.webp"}
                   alt={"A animated image of the player dashing with a quick burst of speed"}
            />
            <h3>Attack</h3>
            <Image title={"Attack.webp"} imageUrl={baseImagePath + "PlayerActionsShowcaseAttack.webp"}
                   alt={"A animated image of the player emitting a screech"}
            />
            <h3>Block</h3>
            <Image title={"Block.webp"} imageUrl={baseImagePath + "PlayerActionsShowcaseBlock.webp"}
                   alt={"A animated image of the player encasing themselves in an egg"}
            />
            <br/>
            <Image title={"InteractionTriangle.png"} imageUrl={baseImagePath + "InteractionTriangle.png"}
                   alt={"A triangle displaying the rock paper scissors system in Frightless Birds, " +
                       "Dash dashes through attack, attack breaks the block and block deflects the dash"}
            />
            <p>These mechanics act in a pseudo rock paper scissors system to aid in creating a dynamic during
                gameplay where players try to mess each other over, while still providing counterplay.
            </p>

            <h2 id="Event System">Event System</h2>
            <p>
                In previous projects I noticed that as the codebase grew code got messier and messier as time went
                on, mainly due to dependencies.
                <br/>
                <br/>
                So for Frightless Birds, instead of making scripts directly call each other I decided to create
                a event system that handles the majority of communication between scripts.
            </p>

            <Image title={"EventSystemStructure.png"} imageUrl={baseImagePath + "EventSystemStructure.png"}
                   alt={"A diagram showcasing the interaction between a GameEvent and a GameEvent listener " +
                       "a GameEventListener register itself to the GameEvent when it gets enabled and " +
                       "deregisters when disabled. When the Raise method is called on the GameEvent every " +
                       "listener will activate their OnEventRaised method."}
            />
            <p>The Event System consists of 2 components, the GameEvent and the GameEventListener. </p>

            <Image title={"GameEventRaise.png"} imageUrl={baseImagePath + "GameEventRaise.png"}
                   alt={"A code block showcasing the Raise method of GameEvent"}
            />
            <br/>
            <Image title={"OnWinGameCall.png"} imageUrl={baseImagePath + "OnWinGameCall.png"}
                   alt={"A code block showcasing the Raise method being called"}
            />
            <br/>
            <Image title={"OnWinGameEditor.png"} imageUrl={baseImagePath + "OnWinGameEditor.png"}
                   alt={"A unity component showcasing the OnWinGame event being linked to a Scoreboard Manager script"}
            />
            <p>GameEvents are referenced in scripts via a <span className={"text-secondary"}>serialized field </span>
                where a trigger for said event is needed which can get called with the <span className={"text-secondary"}>“Raise()”</span> method.</p>

            <Image title={"OnWinGameEventListener.png"} imageUrl={baseImagePath + "OnWinGameEventListener.png"}
                   alt={"A unity component showcasing the Game Event Listener for the 'Win Game' event"}
            />
            <p>This “Raise” method is linked to a GameEvent listener which in turn can be assigned to objects in editor.</p>

            <h2 id="Minigame framework">Minigame framework</h2>

            <p>
                Since Frightless Birds is a minigame based party game we need a system to easily add new minigames.
                <br/>
                For this I designed the Minigame Framework which uses Unity’s serialization to allow developers
                to visually add and configure minigames.
            </p>

            <Image title={"MinigameFrameworkFrozenFeathers.png"} imageUrl={baseImagePath + "MinigameFrameworkFrozenFeathers.png"}
                   alt={"A custom unity scriptable object showing various fields to configure minigame settings"}
            />
            <p>These minigames then are able to be added by simply dragging them into the <span className={"text-secondary"}>GameManager</span>.</p>

            <Image title={"MinigameFrameworkMinigames.png"} imageUrl={baseImagePath + "MinigameFrameworkMinigames.png"}
                   alt={"A unity component showcasing a serializable list which contain the previously mentioned " +
                       "minigame objects"}
            />
            <br/>
            <Image title={"MinigameFrameworkDiagram.png"} imageUrl={baseImagePath + "MinigameFrameworkDiagramv0.3.png"}
                   alt={"A diagram showcasing the structure of the various minigame Framework classes"}
            />
            <p>
                The framework consists of the following parts which interact with each other by making use of a
                <span className={"text-secondary"}> custom event system</span>.
                <ul>
                    <li>GameManager</li>
                    <ul>
                        <li>Handles general game logic like minigame selection.</li>
                    </ul>
                    <li>PlayerManager</li>
                    <ul>
                        <li>Handles player related logic such as freezing them during minigame countdowns.</li>
                    </ul>
                    <li>ScoreboardManager</li>
                    <ul>
                        <li>Handles the UI related to the scoreboard.</li>
                    </ul>
                    <li>MinigameManager(s)</li>
                    <ul>
                        <li>Minigame specific logic contained within it’s one scene.</li>
                    </ul>
                    <li>Individual UI components</li>
                    <ul>
                        <li>Self managed UI components containing their own enable/disable/update logic.</li>
                    </ul>
                </ul>

            </p>

            <h2 id="Brace Rework">Brace Rework</h2>
            <Image title={"Oldbrace.webp"} imageUrl={baseImagePath + "OldBrace.webp"}
                   alt={"A animated image showing the player having a parry like brace with them flashing blue when activating it"}
            />
            <p>Originally our brace functioned a bit like a <span className={"text-secondary"}>Parry</span> which
                allowed people to deflect the dash with the correct timing. However in user testing we found that
                the way that it worked was <span className={"text-secondary"}>too confusing</span>.</p>

            <Image title={"BlockExamples.webp"} imageUrl={baseImagePath + "BlockExamples.webp"}
                   alt={"A animated image showcasing references from various games' defensive mechanics"}
            />
            <p>
                For the redesign I first looked at how other games handled defensive mechanics.
                <br/>
                <br/>
                Based on my research I concluded that I can design an intuitive and balanced defensive mechanic by either:
                <ul>
                    <li>
                        <span className={"text-secondary"}>Giving the defensive mechanic a cost</span>
                        <br/>
                        This cost could be expressed in multiple ways, a few examples are:
                        <ul>
                            <li>A durability system where the defensive mechanic loses durability and eventually breaks if not managed correctly.</li>
                            <li>A timer limiting the amount of time you can be in the defensive state.</li>
                            <li>A clear move that counters the defensive mechanic</li>
                            <li>Not fully blocking the damage but greatly reducing it instead. This punishes staying in the defending stance infinitely.</li>
                        </ul>
                    </li>
                    <span className={"font-bold"}>or/and</span>
                    <li>
                        <span className={"text-secondary"}>Requiring a precise timing</span> for defending the
                        incoming action.
                        <br/>
                        Missing this timing window usually results in taking the full effect of the
                        attack while hitting it usually results in blocking the entire effect.
                    </li>
                </ul>
                Based on these requirements after some internal iteration I came up with the following design.
            </p>

            <Image title={"Block.webp"} imageUrl={baseImagePath + "Block.webp"}
                   alt={"A animated image showcasing the new block where the player encases themselves in an egg"}
            />
            <p>
                The new block allows players to <span className={"text-secondary"}>encase themselves in an egg for 3 seconds </span>
                before they are forced to lower it again.
                <br/>
                <br/>
                If the shield isn’t broken players are able to pull it out again after it has gained at least 50% charge again.
                <br/>
                <br/>
                The max charge is easily configurable on the player controller script.
            </p>

            <Image title={"InteractionTriangle.png"} imageUrl={baseImagePath + "InteractionTriangle.png"}
                   alt={"A triangle displaying the rock paper scissors system in Frightless Birds, " +
                       "Dash dashes through attack, attack breaks the block and block deflects the dash"}
            />
            <p>
                The interaction with the rock paper scissors system was also changed in this redesign. Previously
                when the players were attacked when bracing they would get stunned.
                However this was very unintuitive to players so
                <span className={"text-secondary"}> now the attack breaks the egg</span> and puts it on the full
                cooldown.
                <br/>
                <br/>
                This redesign was then tested again, which this time resulted in a positive outcome due to players no longer getting confused at the functionality of the block.
            </p>

            <h2 id="Frozen feathers(Minigame)">Frozen feathers(Minigame)</h2>
            <p>For Frightless Birds I also desinged and created one of the minigames, that being Frozen Feathers.</p>

            <Image title={"FrozenFeathersPreview.webp"} imageUrl={baseImagePath + "FrozenFeathersPreview.webp"}
                   alt={"A animated image showcasing 4 birds competing with each other " +
                       "and attempting to push the others off of a shrinking ice platform"}
            />
            <p>
                Due to Frozen Feathers being the very first minigame added I wanted it to be <span className={"text-secondary"}>simple to allow the core player mechanics to take the spotlight</span>.
                <br/>
                <br/>
                So in Frozen Feathers players are standing on a ice platform in the ocean that is constantly melting, making the platform shrink in size). However only one player can win which is why they are required to use the mechanics in the rock paper scissor system to come out on top and stay on top of the ice platform.
                <br/>
                <br/>
                Just like the brace rework Frozen Feathers ties into the Minigame Framework to allow for easy tweaking.
            </p>
        </BlogBase>
    )
}

export default FrightlessBirdsBlog