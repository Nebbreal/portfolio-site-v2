import ImageOverlay from "./ImageOverlay.tsx";
import {useState} from "react";
import Card from "./Card.tsx";

type ImageProps = {
    title: string
    imageUrl: string
    alt: string
    className?: string
}

function Image(props: ImageProps) {
    const [isOverlayHidden, setIsOverlayHidden] = useState<boolean>(true)

    return (
        <div className={props.className ? props.className : "max-w-100"}>
            <Card title={props.title} onClick={() => setIsOverlayHidden(false)}>
                <img className={"bg-background"} src={props.imageUrl} alt={props.alt} />
            </Card>
            <ImageOverlay title={props.title} imageUrl={props.imageUrl} alt={props.alt} isHidden={isOverlayHidden} setIsHidden={setIsOverlayHidden} />
        </div>
    )
}

export default Image;