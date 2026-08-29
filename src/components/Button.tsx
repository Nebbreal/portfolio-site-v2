type ButtonProps = {
    imageUrl?: string;
    imageAlt?: string;
    label: string;
}

function Button(props: ButtonProps) {
    return(
        <button className={"bg-primary w-80 h-22 border-b-10 border-r-10 border-primary-dark hover:cursor-pointer flex justify-center items-center"}>
            {props.imageUrl && <img className={"size-15 me-2"} src={props.imageUrl} alt={props.imageAlt ?? "Icon"}/>}
            <p className={"font-heading text-6xl"}>{props.label}</p>
        </button>
    )
}

export default Button