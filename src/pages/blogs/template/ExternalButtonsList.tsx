import Button from "../../../components/Button.tsx";
import type {externalLink} from "../../../types/project.ts";

type ExternalButtonsListProps = {
    links: externalLink[]
}

function ExternalButtonsList(props : ExternalButtonsListProps) {
    return (
        <div className={"primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>External.list</h3>
            </div>

            <div className={"p-2 flex flex-col gap-y-3 justify-center"}>
                {props.links.map((link, index) => {
                    return (
                        <a href={link.link} key={index} target="_blank">
                            <Button imageUrl={link.imageUrl}>
                                <h3>{link.label}</h3>
                            </Button>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default ExternalButtonsList