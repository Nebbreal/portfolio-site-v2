import SkillsCard from "../../components/project/SkillsCard.tsx";
import {allSkills} from "../../types/project.ts";

function Projects(){
    return (
        <>
            <h1>Projects</h1>
            <SkillsCard skills={[allSkills["unity"], allSkills["csharp"]]} />
        </>
    )
}

export default Projects