import Project from "../../components/project/Project.tsx";
import {FrightlessBirdsProject, HogidProject, MeerMomoProject} from "../../data/projects.ts";
import {Link} from "react-router";

function ProjectsPage(){
    return (
        <>
            <h1>Projects</h1>
            <div className={"mt-10 mb-15 grid lg:grid-cols-3 xs:grid-cols-1 gap-10"}>
                <Link to={"frightlessbirds"}>
                    <Project project={FrightlessBirdsProject} />
                </Link>
                <Link to={"projects/meermomo"}>
                    <Project project={MeerMomoProject} />
                </Link>
                <Project project={HogidProject} />

            </div>
        </>
    )
}

export default ProjectsPage