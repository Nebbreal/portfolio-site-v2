import {type project} from "../../types/project.ts";
import InfoCard from "./InfoCard.tsx";
import InfoListCard from "./InfoListCard.tsx";
import Button from "../Button.tsx";

type ProjectProps={
    project: project,
    lowDetail?: boolean
}

function Project(props: ProjectProps) {
    const project: project = props.project;

    return (
        <div className={"primary-border bg-primary flex flex-1 flex-col hover:scale-110 transition-transform hover:cursor-pointer"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{project.title}.exe</h3>
            </div>

            <div className={"flex bg-background flex-col flex-1 px-2 py-2"}>
                <img src={project.coverImageUrl} alt={project.title + " cover image"} />

                {props.lowDetail && (
                    <div className={"mt-4"}>
                        <InfoListCard small={props.lowDetail} title={"Contributions"} infoListEntries={project.contributions} />
                    </div>
                )}

                {!props.lowDetail && (
                    <>
                        <p className={"mt-2"}>{project.summary}</p>
                        <div className={"flex justify-center mt-5 w-full"}>
                            <div className={"flex flex-col lg:flex-row gap-x-5 gap-y-5 w-full"}>
                                <div className={"lg:w-1/2"}>
                                    <InfoListCard title={"Contributions"} infoListEntries={project.contributions} />
                                </div>
                                <div className={"lg:w-1/2"}>
                                    <InfoCard title={"Skills"} infoEntries={project.skills} />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className={"flex flex-col lg:flex-row h-full justify-center items-end mt-5 gap-x-5 gap-y-2"}>
                    {project.externalLinks && (
                        <a className={"w-full"} href={project.externalLinks[0].link} target={"_blank"} onClick={(e) => e.stopPropagation()}>
                            <Button small={props.lowDetail} imageUrl={project.externalLinks[0].imageUrl} className={"w-full"}>
                                <h2>{project.externalLinks[0].label}</h2>
                            </Button>
                        </a>
                    )}
                    <Button small={props.lowDetail} className={"w-full"}>
                        <h2>Read Blog</h2>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Project;