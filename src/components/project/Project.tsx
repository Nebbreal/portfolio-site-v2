import type {project} from "../../types/project.ts";

type ProjectProps={
    project: project
}

function Project(props: ProjectProps) {
    const project: project = props.project;
    return (
        <div className={"max-w-45 primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3></h3>
            </div>
        </div>
    )
}

export default Project;