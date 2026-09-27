import ImageOverlay from "./ImageOverlay.tsx";
import {useState} from "react";
import Card from "./Card.tsx";

type ImageProps = {
    title: string
    imageUrl: string
    alt: string
}

function Image(props: ImageProps) {
    const [isOverlayHidden, setIsOverlayHidden] = useState<boolean>(true)

    return (
        <>
            <Card title={props.title} onClick={() => setIsOverlayHidden(false)}>
                <img className={"bg-background"} src={props.imageUrl} alt={props.alt} />
            </Card>
            <ImageOverlay title={props.title} imageUrl={props.imageUrl} alt={props.alt} isHidden={isOverlayHidden} setIsHidden={setIsOverlayHidden} />
        </>
    )
}

export default Image;