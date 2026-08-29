type ImageProps = {
    title: string;
    imageUrl: string;
    alt: string;
}

function Image(props: ImageProps) {
    return (
        <div className={"max-w-100 border-6 border-t-26 border-primary"}>
            <div className={"flex -mt-7 justify-between"}>
                <h3>{props.title}</h3>
                <h3>X</h3>
            </div>

            <img src={props.imageUrl} alt={props.alt} />
        </div>
    )
}

export default Image;