import {Outlet, useLocation} from "react-router";
import {type ReactNode, useEffect, useState} from "react";
import HeaderNavigationButton from "../components/layout/HeaderNavigationButton.tsx";
import {titleCaseWord} from "../helpers/textHelpers.ts";
import Button from "../components/Button.tsx";

function Layout(){
    let path = useLocation().pathname;
    const [headerNavigationNodes, setHeaderNavigationNodes] = useState<ReactNode[]>([])

    useEffect(() => {
        const navigationPathNodes : ReactNode[] = []
        const pagePaths = path.split("/")

        let currentPath = ""
        pagePaths.map((pagePath, index) => {
            if (pagePath === "" && navigationPathNodes.length === 0) {
                navigationPathNodes.push(<HeaderNavigationButton key={index} text={"Home"} destination={"/"}/>)
            }
            else if (pagePath !== ""){
                currentPath = currentPath + "/" + pagePath
                navigationPathNodes.push(<HeaderNavigationButton key={index} text={"->" + titleCaseWord(pagePath)} destination={currentPath}/>)
            }

        })

        setHeaderNavigationNodes(navigationPathNodes)
    }, [path]);

    return (
        <div className="primary-border min-h-screen">
            <div className={"flex bg-primary"}>
                {headerNavigationNodes.map((node) => {
                    return node
                })}
            </div>

            <div className={"lg:mx-12 mx-3 mt-2 mb-2 min-h-[80vh]"}>
                <Outlet />
            </div>

            <hr className={"text-primary border-3 mt-auto"}/>
            <div className={"flex ms-2 mt-1"}>
                <div>
                    <h2 className={"text-lowlight"}>Demiën van Laarhoven</h2>
                    <h3 className={"text-lowlight"}>Gameplay programmer</h3>
                    <a href={"mailto:demien401@gmail.com"}>
                        <h3 className={"text-secondary"}>demien401@gmail.com</h3>
                    </a>
                </div>
                <div className={"ms-4"}>
                    <h2 className={"text-lowlight"}>Find me at</h2>
                    <div className={"flex gap-x-2"}>
                        <a href={"https://github.com/Nebbreal"} target="_blank" rel="noopener noreferrer">
                            <Button imageUrl={"/assets/images/external-icons/GithubLogo.svg"} imageAlt={"Github Logo"} />
                        </a>
                        <a href={"https://www.linkedin.com/in/demi%C3%ABn-van-laarhoven/"} target="_blank" rel="noopener noreferrer">
                            <Button imageUrl={"/assets/images/external-icons/LinkedInLogo.svg"} imageAlt={"LinkedIn logo"} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout