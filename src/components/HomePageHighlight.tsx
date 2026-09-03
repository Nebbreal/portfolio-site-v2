import { Link } from "react-router";
import type {project} from "../types/project.ts";

type HomePageHighlightProps = {
    project: project
    blogUrl: string
}

function HomePageHighlight(props: HomePageHighlightProps) {
    const project = props.project;
    return (
        <Link to={props.blogUrl}>
            <div className={"primary-border hover:cursor-pointer transition-transform hover:scale-110"}>
                <div className={"flex justify-between bg-primary"}>
                    <h3 className={"wrap-anywhere"}>{project.title}.exe</h3>
                    <h3>X</h3>
                </div>
                <img className={"w-100"} src={project.coverImageUrl} alt={project.title + " cover image"} />
            </div>
        </Link>
    )
}

export default HomePageHighlight