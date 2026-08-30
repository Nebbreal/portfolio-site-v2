import ArticleBase from "./template/ArticleBase.tsx";
import {FrightlessBirdsProject} from "../../data/projects.ts";
import ChapterList from "./template/ChapterList.tsx";
import InfoCard from "../../components/project/InfoCard.tsx";
import type {Chapter} from "../../types/chapter.ts";

function FrightlessBirdsBlog() {
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
        <div className={"lg:flex lg:justify-center gap-x-3"}>
            <div>
                <ChapterList chapters={chapters} />
            </div>

            <ArticleBase project={FrightlessBirdsProject}>
                <h2 id="My contributions">My contributions</h2>
                    <p>
                        - Core player actions design (Group effort)<br/>
                        - Minigame Framework<br/>
                        - Brace rework<br/>
                        - Frozen Feathers (Minigame)<br/>
                        - Kiwi model
                    </p>

                <h2 id="Core player actions">Core player actions</h2>
                <p>When creating Frightless Birds we had 2 core design pillars,
                    <span className={"text-secondary"}> messing with your friends</span> and
                    <span className={"text-secondary"}> simplicity</span>.</p>

                <h1 className={"text-red-600"}>PUT IMAGE HERE</h1>
                <p>To achieve this we looked into how other games like Celeste kept their controls easy to understand and how party games like Wii Party create chaos.</p>
                <br/>
                <p>Based on our research we decided to stick to a small amount of actions players have which never change to keep things simple.</p>

                <h2 id="Event System">Event System</h2>

                <h2 id="Minigame framework">Minigame framework</h2>

                <h2 id="Brace Rework">Brace Rework</h2>

                <h2 id="Frozen feathers(Minigame)">Frozen feathers(Minigame)</h2>
            </ArticleBase>

            <div className={"mt-2 lg:mt-0 flex flex-col items-center gap-y-2 sticky"}>
                <InfoCard title={"DevInfo"} infoEntries={[
                    {
                        label: FrightlessBirdsProject.developmentTime,
                        imageUrl: "/assets/icons/Clock.svg"
                    },
                    {
                        label: FrightlessBirdsProject.developmentStartDate,
                        imageUrl: "/assets/icons/Calendar.svg"
                    },
                    {
                        label: FrightlessBirdsProject.teamMembers,
                        imageUrl: "/assets/icons/Person.svg"
                    }
                ]} />
                <InfoCard title={"Skills"} infoEntries={FrightlessBirdsProject.skills} />
            </div>
        </div>

    )
}

export default FrightlessBirdsBlog