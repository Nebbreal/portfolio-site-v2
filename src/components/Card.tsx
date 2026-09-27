import {useState} from "react";
import * as React from "react";

type CardProps = {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    children?: React.ReactNode;
    linkTo?: string;
    disableMinimize?: boolean;
}

function Card(props: CardProps) {
    const [isMinimized, setIsMinimized] = useState<boolean>(false)

    const toggleIsMinimized = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        setIsMinimized(!isMinimized)
    }

    return (
        <div onClick={(e) => props.onClick?.(e)} className={"max-w-100 primary-border bg-primary hover:cursor-zoom-in"}>
            <div className={"flex justify-between bg-primary"}>
                <h3 className={"wrap-anywhere"}>{props.title}</h3>

                <button className={"ps-3 hover:cursor-pointer"} type={"button"} hidden={props.disableMinimize}
                        onClick={(e) => toggleIsMinimized(e)}>
                    {isMinimized ? <h3>+</h3> : <h3>-</h3>}
                </button>
            </div>
            <div hidden={isMinimized} className={"bg-background"}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;