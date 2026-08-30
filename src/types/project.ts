import type {ReactNode} from "react";
import type {Dictionary, ListEntryComponent} from "../helpers/interfaces.ts";

export type project = {
    title: string
    summary: string
    coverImageUrl: string
    skills: skillEntry[]
    developmentTime: string
    developmentStartDate: string
    teamMembers: string
    blogBody: ReactNode | undefined
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
        imageUrl: "assets/icons/Person.svg"
    }
}

export type skillEntry = ListEntryComponent

export type infoEntry = ListEntryComponent & {
    tooltip?: string;
}

export type chapter = {
    label: string
    link: string
}