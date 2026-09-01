import type {Chapter} from "../../../types/chapter.ts";

type ChapterListProps = {
    chapters: Chapter[];
}

function ChapterList(props: ChapterListProps) {
    return (
        <div className={"primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>Chapters.list</h3>
            </div>

            <div className={"p-2"}>
                {props.chapters.map((chapter: Chapter, index) => {
                    return (
                        <a href={"#" + chapter.id} key={index}>
                            <h3>- {chapter.label}</h3>
                        </a>
                    )
                })}
            </div>

        </div>
    )
}

export default ChapterList;