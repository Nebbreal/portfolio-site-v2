import type {Chapter} from "../../../types/chapter.ts";
import Card from "../../../components/Card.tsx";

type ChapterListProps = {
    chapters?: Chapter[];
}

function ChapterList(props: ChapterListProps) {
    return (
        <Card title={"Chapters.List"} disableMinimize>
            <div className={"p-2"}>
                {
                    props.chapters ? props.chapters.map((chapter: Chapter, index) =>
                        {
                            return (
                                <a href={"#" + chapter.id} key={index}>
                                    <h3>- {chapter.label}</h3>
                                </a>
                            )
                        }
                    ) :
                    <p className={"text-lowlight"}>No blog article has been added yet</p>
                }
            </div>
        </Card>
    )
}

export default ChapterList;