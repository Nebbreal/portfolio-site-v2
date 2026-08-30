import type {skillEntry} from "../../types/project.ts";

type SkillsCardProps = {
    skills: skillEntry[]
}

function SkillsCard(props: SkillsCardProps) {
    return (
        <div className={"max-w-45 primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>Skills.Card</h3>
                <h3>X</h3>
            </div>
            {props.skills.map((skill, index) => {
                return (
                    <div key={index} className={"flex ps-1 py-2 items-center"}>
                        <img className={"size-15"} src={skill.imageUrl} alt={skill.name + " logo"} />
                        <p>{skill.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillsCard;