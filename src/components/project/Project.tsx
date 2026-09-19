import {type project} from "../../types/project.ts";
import InfoCard from "./InfoCard.tsx";
import InfoListCard from "./InfoListCard.tsx";

type ProjectProps={
    project: project
}

function Project(props: ProjectProps) {
    const project: project = props.project;
    return (
        <div className={"primary-border bg-primary flex flex-1 flex-col hover:scale-110 lg:min-h-210 transition-transform hover:cursor-pointer"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{project.title}.exe</h3>
                <h3>X</h3>
            </div>

            <div className={"flex bg-background flex-col flex-1 px-2 py-2"}>
                <img src={project.coverImageUrl} alt={project.title + " cover image"} />
                <p>{project.summary}</p>

                <div className={"flex justify-center mt-5 w-full"}>
                    <div className={"flex flex-col lg:flex-row gap-x-5 w-full"}>
                        <div className={"lg:w-1/2"}>
                            <InfoListCard title={"Contributions"} infoListEntries={project.contributions} />
                        </div>
                        <div className={"lg:w-1/2"}>
                            <InfoCard title={"Skills"} infoEntries={project.skills} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;