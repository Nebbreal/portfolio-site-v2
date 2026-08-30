import type {ReactNode} from "react";

type ButtonProps = {
    imageUrl?: string;
    imageAlt?: string;
    onClick?: () => void;
    children?: ReactNode;
}

function Button(props: ButtonProps ) {
    return(
        <button type={"button"} onClick={() => props.onClick && props.onClick()}
                className={(props.children ? "w-80 " : "w-20 ") + "bg-primary h-22 border-b-10 border-r-10 border-primary-dark hover:cursor-pointer flex justify-center items-center"}>
            {props.imageUrl && <img className={"size-15"} src={props.imageUrl} alt={props.imageAlt ?? "Icon"}/>}

            {props.children &&
                <div className={"ms-2"}>
                    {props.children}
                </div>
            }
        </button>
    )
}

export default Button