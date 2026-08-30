import {type project} from "../../types/project.ts";
import InfoCard from "./InfoCard.tsx";

type ProjectProps={
    project: project
}

function Project(props: ProjectProps) {
    const project: project = props.project;
    return (
        <div className={"primary-border hover:scale-110 transition-transform bg-background hover:cursor-pointer"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{project.title}.exe</h3>
                <h3>X</h3>
            </div>

            <div className={"px-2 py-2"}>
                <img src={project.coverImageUrl} alt={project.title + " cover image"} />
                <p>{project.summary}</p>

                <div className={"flex justify-between px-15"}>
                    <div>
                        <h2>Info</h2>
                        <InfoCard title={"DevInfo"} infoEntries={
                            [
                                {
                                    label: project.developmentTime,
                                    imageUrl: "/assets/icons/Clock.svg"
                                },
                                {
                                    label: project.developmentStartDate,
                                    imageUrl: "/assets/icons/Calendar.svg"
                                },
                                {
                                    label: project.teamMembers,
                                    imageUrl: "/assets/icons/Person.svg"
                                }
                            ]
                        }/>
                    </div>
                    <div>
                        <h2>Skills</h2>
                        <InfoCard title={"Skills"} infoEntries={project.skills} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project;