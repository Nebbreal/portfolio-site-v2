import Project from "../../components/project/Project.tsx";
import {FrightlessBirdsProject} from "../../data/projects.ts";

function ProjectsPage(){
    return (
        <>
            <h1>Projects</h1>
            <Project project={FrightlessBirdsProject} />
        </>
    )
}

export default ProjectsPage