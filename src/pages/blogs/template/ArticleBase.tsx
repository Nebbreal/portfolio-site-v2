import type {project} from "../../../types/project.ts";
import type {ReactNode} from "react";

type BlogBaseProps = {
    project: project
    children: ReactNode
}

function ArticleBase(props: BlogBaseProps) {
    const project = props.project;
    return (
        <div className={"lg:w-200 primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{project.title}.exe</h3>
            </div>

            <div className={"p-2"}>
                <h1>{project.title}</h1>
                <div className={"flex justify-center mt-5"}>
                    <img src={project.coverImageUrl} alt={project.title + " cover image"} />
                </div>
                <p>{project.summary}</p>
                {props.children}
            </div>
        </div>
    )
}

export default ArticleBase;