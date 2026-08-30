type ImageProps = {
    title: string;
    imageUrl: string;
    alt: string;
}

function Image(props: ImageProps) {
    return (
        <div className={"max-w-100 primary-border"}>
            <div className={"flex justify-between bg-primary"}>
                <h3>{props.title}</h3>
                <h3>X</h3>
            </div>

            <img src={props.imageUrl} alt={props.alt} />
        </div>
    )
}

export default Image;