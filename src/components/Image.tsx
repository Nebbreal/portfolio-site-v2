import ImageOverlay from "./ImageOverlay.tsx";
import {useState} from "react";
import * as React from "react";

type ImageProps = {
    title: string
    imageUrl: string
    alt: string
}

function Image(props: ImageProps) {
    const [isMinimized, setIsMinimized] = useState<boolean>(false)
    const [isOverlayHidden, setIsOverlayHidden] = useState<boolean>(true)

    const toggleIsMinimized = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIsMinimized(!isMinimized)
    }

    return (
        <>
            <div onClick={() => setIsOverlayHidden(false)} className={"max-w-100 primary-border hover:cursor-zoom-in"}>
                <div className={"flex justify-between bg-primary"}>
                    <h3 className={"wrap-anywhere"}>{props.title}</h3>

                    <button className={"ps-3 hover:cursor-pointer"} type={"button"} onClick={(e) => toggleIsMinimized(e)}>
                        {isMinimized ? <h3>+</h3> : <h3>-</h3>}
                    </button>
                </div>

                <img hidden={isMinimized} className={"bg-background"} src={props.imageUrl} alt={props.alt} />
            </div>
            <ImageOverlay title={props.title} imageUrl={props.imageUrl} alt={props.alt} isHidden={isOverlayHidden} setIsHidden={setIsOverlayHidden} />
        </>
    )
}

export default Image;