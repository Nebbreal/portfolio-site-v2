import {Outlet, useLocation} from "react-router";
import {type ReactNode, useEffect, useState} from "react";
import HeaderNavigationButton from "../components/layout/HeaderNavigationButton.tsx";
import {titleCaseWord} from "../helpers/textHelpers.ts";

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
        <div className="primary-border h-screen">
            <div className={"-mt-7 flex"}>
                {headerNavigationNodes.map((node) => {
                    return node
                })}
            </div>

            <div className={"mx-12 mt-2"}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout