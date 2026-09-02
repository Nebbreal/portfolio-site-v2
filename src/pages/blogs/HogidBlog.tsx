import BlogBase from "./template/BlogBase.tsx";
import {HogidProject} from "../../data/projects.ts";

function HogidBlog(){
    return (
        <BlogBase projectObj={HogidProject} />
    )
}

export default HogidBlog