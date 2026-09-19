import type {listEntry} from "../../types/listEntry.ts";

type InfoCardProps = {
    title: string;
    infoListEntries: listEntry[]
}

function InfoListCard(props: InfoCardProps) {
    const RenderListEntries = (contributions: listEntry[]) =>{
        return(
            <ul>
                {contributions.map((contribution, index) => {
                    return (
                        <>
                            <li key={index}>
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
        <div className={"primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3 className={"wrap-anywhere"}>{props.title}.Card</h3>
                <h3>X</h3>
            </div>

            <p>
                {RenderListEntries(props.infoListEntries)}
            </p>
        </div>
    )
}

export default InfoListCard;