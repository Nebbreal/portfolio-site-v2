import type {ReactNode} from "react";

type ButtonProps = {
    imageUrl?: string;
    imageAlt?: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    small?: boolean;
}

function Button(props: ButtonProps ) {
    return(
        <button type={"button"} onClick={() => props.onClick && props.onClick()}
                className={
                    (props.className ? props.className + " " : "") +
                    (props.small ? "lg:h-21 " : "lg:h-22 ") +
                    "bg-primary border-primary-dark hover:cursor-pointer flex justify-center items-center px-1 " +
                    (props.children ? "border-b-10 border-r-10" : "size-17 max-w-17 max-h-17 border-b-8 border-r-8")
                }>
            {props.imageUrl && !props.small && <img className={"object-contain p-1 " + (props.children ? "size-15 [@media_(aspect-ratio:16/10)]:hidden" : "size-12")} src={props.imageUrl} alt={props.imageAlt ?? "Icon"}/>}

            {props.children &&
                <div className={"ms-2"}>
                    {props.children}
                </div>
            }
        </button>
    )
}

export default Button