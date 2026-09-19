import Project from "../../components/project/Project.tsx";
import {FrightlessBirdsProject, HogidProject, MeerMomoProject} from "../../data/projects.ts";
import {Link} from "react-router";

function ProjectsPage(){
    return (
        <>
            <h1>Projects</h1>
            <div className={"flex flex-col lg:flex-row w-full mt-10 mb-15 gap-10"}>
                <Link className={"w-full flex flex-1"} to={"frightlessbirds"}>
                    <Project project={FrightlessBirdsProject} />
                </Link>
                <Link className={"w-full flex flex-1"} to={"meermomo"}>
                    <Project project={MeerMomoProject} />
                </Link>
                <Link className={"w-full flex flex-1"} to={"hogid"}>
                    <Project project={HogidProject} />
                </Link>
            </div>
        </>
    )
}

export default ProjectsPage