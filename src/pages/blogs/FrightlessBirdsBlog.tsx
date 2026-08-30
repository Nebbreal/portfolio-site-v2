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
        <div className={"lg:flex lg:justify-between"}>
            <ChapterList chapters={chapters} />

            <ArticleBase project={FrightlessBirdsProject}>
                {chapters.map((chapter) => {
                    return <h2 id={chapter.id}>{chapter.label}</h2>
                })}
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