import ChapterList from "./ChapterList.tsx";
import ArticleBase from "./ArticleBase.tsx";
import InfoCard from "../../../components/project/InfoCard.tsx";
import type {Chapter} from "../../../types/chapter.ts";
import type {project} from "../../../types/project.ts";
import type {ReactNode} from "react";

type BlogBaseProps = {
    chapters?: Chapter[]
    projectObj: project
    children?: ReactNode
}

function BlogBase(props: BlogBaseProps) {
    return (
        <div className={"lg:flex lg:justify-center gap-x-3"}>
            {props.chapters && (
                <div className={"lg:sticky lg:top-4 lg:self-start lg:max-w-60"}>
                    <ChapterList chapters={props.chapters} />
                </div>
            )}


            {props.children &&
                <ArticleBase project={props.projectObj}>
                    {props.children}
                </ArticleBase>
            }


            <div className={"mt-2 lg:mt-0 flex flex-col items-center gap-y-2 lg:sticky lg:top-4 lg:self-start lg:max-w-60"}>
                <InfoCard title={"DevInfo"} infoEntries={[
                    {
                        label: props.projectObj.developmentTime,
                        imageUrl: "/assets/icons/Clock.svg"
                    },
                    {
                        label: props.projectObj.developmentStartDate,
                        imageUrl: "/assets/icons/Calendar.svg"
                    },
                    {
                        label: props.projectObj.teamMembers,
                        imageUrl: "/assets/icons/Person.svg"
                    }
                ]} />
                <InfoCard title={"Skills"} infoEntries={props.projectObj.skills} />
            </div>
        </div>
    )
}

export default BlogBase