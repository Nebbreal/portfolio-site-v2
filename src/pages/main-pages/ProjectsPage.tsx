import Project from "../../components/project/Project.tsx";
import {FrightlessBirdsProject} from "../../data/projects.ts";

function ProjectsPage(){
    return (
        <>
            <h1>Projects</h1>
            <div className={"mt-10 mb-15 grid lg:grid-cols-3 xs:grid-cols-1 gap-10"}>
                <Project project={FrightlessBirdsProject} />
                <Project project={FrightlessBirdsProject} />
                <Project project={FrightlessBirdsProject} />
            </div>
        </>
    )
}

export default ProjectsPage