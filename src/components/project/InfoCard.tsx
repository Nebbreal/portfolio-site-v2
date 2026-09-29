import type {ListEntryComponent} from "../../helpers/interfaces.ts";
import Card from "../Card.tsx";

type InfoCardProps = {
    title: string;
    infoEntries: ListEntryComponent[]
}

function InfoCard(props: InfoCardProps) {
    return (
        <Card title={props.title + ".Card"}>
            {props.infoEntries.map((entry, index) => {
                return (
                    <div key={index} className={"flex px-1 py-2 items-center"}>
                        <img className={"size-15"} src={entry.imageUrl} alt={entry.label + " icon"} />
                        <p className={"min-w-0 wrap-break-word"}>{entry.label}</p>
                    </div>
                )
            })}
        </Card>
    )
}

export default InfoCard;