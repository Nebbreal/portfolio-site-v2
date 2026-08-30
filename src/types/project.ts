import type {ReactNode} from "react";
import type {Dictionary} from "../helpers/interfaces.ts";

export type project = {
    title: string
    summary: string
    coverImageUrl: string
    skills: skillEntry[]
    info: infoEntry[]
    blogBody: ReactNode
}

export const allSkills: Dictionary<skillEntry> = {
    csharp: {
        name: "Csharp",
        imageUrl: "assets/images/skills/CsharpLogo.svg"
    },
    unity:{
        name: "Unity",
        imageUrl: "assets/images/skills/UnityLogo.svg"
    },
    userTests:{
        name: "User tests",
        imageUrl: "assets/icons/Person.png"
    }
}

export type skillEntry = {
    imageUrl: string
    name: string
}

export type infoEntry = {
    imageUrl: string
    name: string
}

export type chapter = {
    label: string
    link: string
}