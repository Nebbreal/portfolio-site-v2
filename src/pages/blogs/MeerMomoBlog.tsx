import BlogBase from "./template/BlogBase.tsx";
import {MeerMomoProject} from "../../data/projects.ts";

function MeerMomoBlog() {
    return (
        <BlogBase projectObj={MeerMomoProject} />
    )
}

export default MeerMomoBlog;