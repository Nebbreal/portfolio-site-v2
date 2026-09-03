import ChapterList from "./ChapterList.tsx";
import ArticleBase from "./ArticleBase.tsx";
import InfoCard from "../../../components/project/InfoCard.tsx";
import type {Chapter} from "../../../types/chapter.ts";
import type {project} from "../../../types/project.ts";
import type {ReactNode} from "react";
import Image from "../../../components/Image.tsx";
import ExternalButtonsList from "./ExternalButtonsList.tsx";

type BlogBaseProps = {
    chapters?: Chapter[]
    projectObj: project
    children?: ReactNode
}

function BlogBase(props: BlogBaseProps) {
    return (
        <div className={"lg:flex lg:justify-center gap-x-3"}>
            <div className={"lg:sticky lg:top-4 lg:self-start lg:max-w-60 mb-2 lg:mb-0 flex flex-col lg:gap-y-2"}>
                <ChapterList chapters={props.chapters} />

                {props.projectObj.externalLinks &&
                    <ExternalButtonsList links={props.projectObj.externalLinks} />
                }
            </div>

            {props.children ?
                <ArticleBase project={props.projectObj}>
                    {props.children}
                </ArticleBase> : (
                    <ArticleBase project={props.projectObj}>
                        <div className={"flex flex-col w-full items-center mt-5"}>
                            <hr className={"text-lowlight opacity-60 w-full"}/>
                            <p className={"text-lowlight"}>No blog article has been added yet, take this picture instead :)</p>
                            <Image title={"Luna2.jpg"} imageUrl={"/assets/images/other/Luna2.jpg"} alt={"A picture of my dog (Luna) looking at the camera in a pleading manner"}/>
                        </div>

                    </ArticleBase>
                )
            }


            <div className={"mt-2 lg:mt-0 flex flex-col items-start gap-y-2 lg:sticky lg:top-4 lg:self-start lg:max-w-60"}>
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