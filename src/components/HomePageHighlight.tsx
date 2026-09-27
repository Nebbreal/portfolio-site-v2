import { Link } from "react-router";
import type {project} from "../types/project.ts";
import Card from "./Card.tsx";

type HomePageHighlightProps = {
    project: project
    blogUrl: string
}

function HomePageHighlight(props: HomePageHighlightProps) {
    const project = props.project;
    return (
        <Link to={props.blogUrl}>
            <Card title={project.title + ".exe"}>
                <img className={"w-100"} src={project.coverImageUrl} alt={project.title + " cover image"} />
            </Card>
        </Link>
    )
}

export default HomePageHighlight