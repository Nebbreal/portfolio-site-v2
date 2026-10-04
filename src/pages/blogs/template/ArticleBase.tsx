import type {project} from "../../../types/project.ts";
import type {ReactNode} from "react";
import type {listEntry} from "../../../types/listEntry.ts";

type BlogBaseProps = {
    project: project
    children: ReactNode
}

function ArticleBase(props: BlogBaseProps) {
    const project = props.project;

    const RenderContributions = (contributions: listEntry[]) =>{
        return(
            <ul>
                {contributions.map((contribution, index) => {
                    return (
                        <>
                            <li key={index}>
                                {contribution.entry}
                            </li>
                            {contribution.children !== undefined && contribution.children.length > 0 && (
                                RenderContributions(contribution.children)
                            )}
                        </>
                    )
                })}
            </ul>
        )
    }

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

                <br />
                <h2 id="My contributions">My contributions</h2>
                <p>
                    {RenderContributions(project.contributions)}
                </p>
                {props.children}
            </div>
        </div>
    )
}

export default ArticleBase;