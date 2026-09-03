import type {Dispatch} from "react";

type ImageOverlayProps = {
    title: string
    imageUrl: string
    alt: string
    isHidden: boolean
    setIsHidden: Dispatch<boolean>
}

function ImageOverlay(props: ImageOverlayProps) {
    return (
        <div hidden={props.isHidden} onClick={() => props.setIsHidden(true)} className={"fixed inset-0 top-0 left-0 bg-backdrop flex justify-center items-center"}>
            <div onClick={(e) => e.stopPropagation()} className={"primary-border"}>
                <div className={"flex justify-between bg-primary"}>
                    <h3 className={"wrap-anywhere"}>{props.title}</h3>

                    <button onClick={() => props.setIsHidden(true)} className={"hover:cursor-pointer"}>
                        <h3>X</h3>
                    </button>
                </div>

                <img className={"max-w-[90vw] max-h-[90vh] lg:max-w-[70vw] lg:max-h-[70vh] w-auto h-auto"} src={props.imageUrl} alt={props.alt} />
            </div>
        </div>
    )
}

export default ImageOverlay