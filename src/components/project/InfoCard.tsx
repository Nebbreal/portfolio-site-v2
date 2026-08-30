import type {ListEntryComponent} from "../../helpers/interfaces.ts";

type InfoCardProps = {
    title: string;
    infoEntries: ListEntryComponent[]
}

function InfoCard(props: InfoCardProps) {
    return (
        <div className={"w-50 primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{props.title}.Card</h3>
                <h3>X</h3>
            </div>
            {props.infoEntries.map((entry, index) => {
                return (
                    <div key={index} className={"flex ps-1 py-2 items-center"}>
                        <img className={"size-15"} src={entry.imageUrl} alt={entry.label + " icon"} />
                        <p>{entry.label}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default InfoCard;