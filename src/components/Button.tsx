import type {ReactNode} from "react";

type ButtonProps = {
    imageUrl?: string;
    imageAlt?: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

function Button(props: ButtonProps ) {
    return(
        <button type={"button"} onClick={() => props.onClick && props.onClick()}
                className={
                    (props.className && props.className + " ") +
                    (props.children ? "lg:min-w-50 " : "max-w-20 ") +
                    "bg-primary lg:h-22 border-b-10 border-r-10 border-primary-dark hover:cursor-pointer flex justify-center items-center px-1"}>
            {props.imageUrl && <img className={"size-15 object-contain p-1"} src={props.imageUrl} alt={props.imageAlt ?? "Icon"}/>}

            {props.children &&
                <div className={"ms-2"}>
                    {props.children}
                </div>
            }
        </button>
    )
}

export default Button