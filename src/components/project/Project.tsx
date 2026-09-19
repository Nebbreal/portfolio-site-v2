import {type project} from "../../types/project.ts";
import InfoCard from "./InfoCard.tsx";
import InfoListCard from "./InfoListCard.tsx";

type ProjectProps={
    project: project
}

function Project(props: ProjectProps) {
    const project: project = props.project;
    return (
        <div className={"primary-border flex flex-col hover:scale-110 lg:min-h-210 transition-transform bg-background hover:cursor-pointer"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{project.title}.exe</h3>
                <h3>X</h3>
            </div>

            <div className={"flex flex-col flex-1 px-2 py-2"}>
                <img src={project.coverImageUrl} alt={project.title + " cover image"} />
                <p>{project.summary}</p>

                <div className={"flex justify-center mt-auto w-full"}>
                    <div className={"grid grid-cols-2 gap-x-5 w-full content-stretch"}>
                        <div>
                            <h2>Info</h2>
                            <InfoListCard title={"Contributions"} infoListEntries={project.contributions} />
                        </div>
                        <div>
                            <h2>Skills</h2>
                            <InfoCard title={"Skills"} infoEntries={project.skills} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project;