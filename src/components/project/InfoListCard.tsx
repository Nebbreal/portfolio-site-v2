import type {listEntry} from "../../types/listEntry.ts";
import Card from "../Card.tsx";

type InfoCardProps = {
    title: string;
    infoListEntries: listEntry[];
    small?: boolean;
}

function InfoListCard(props: InfoCardProps) {
    const RenderListEntries = (contributions: listEntry[]) =>{
        return(
            <ul>
                {contributions.map((contribution, index) => {
                    return (
                        <>
                            <li className={(props.small ? "text-xl" : "")} key={index}>
                                {contribution.entry}
                            </li>
                            {contribution.children !== undefined && contribution.children.length > 0 && (
                                RenderListEntries(contribution.children)
                            )}
                        </>
                    )
                })}
            </ul>
        )
    }

    return (
        <Card title={props.title + ".Card"}>
            <p className={"py-2"}>
                {RenderListEntries(props.infoListEntries)}
            </p>
        </Card>
    )
}

export default InfoListCard;