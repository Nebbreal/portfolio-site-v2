import ImageOverlay from "./ImageOverlay.tsx";
import {useState} from "react";

type ImageProps = {
    title: string
    imageUrl: string
    alt: string
}

function Image(props: ImageProps) {
    const [isOverlayHidden, setIsOverlayHidden] = useState<boolean>(true)

    return (
        <>
            <div onClick={() => setIsOverlayHidden(false)} className={"max-w-100 primary-border hover:cursor-zoom-in"}>
                <div className={"flex justify-between bg-primary"}>
                    <h3 className={"wrap-anywhere"}>{props.title}</h3>
                    <h3>X</h3>
                </div>

                <img className={"bg-background"} src={props.imageUrl} alt={props.alt} />
            </div>
            <ImageOverlay title={props.title} imageUrl={props.imageUrl} alt={props.alt} isHidden={isOverlayHidden} setIsHidden={setIsOverlayHidden} />
        </>
    )
}

export default Image;