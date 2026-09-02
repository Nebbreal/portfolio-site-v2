import type {Dictionary, ListEntryComponent} from "../helpers/interfaces.ts";

export type project = {
    title: string
    summary: string
    coverImageUrl: string
    skills: skillEntry[]
    developmentTime: string
    developmentStartDate: string
    teamMembers: string
}

export const allSkills: Dictionary<skillEntry> = {
    csharp: {
        label: "C#",
        imageUrl: "/assets/images/skills/CsharpLogo.svg"
    },
    unity:{
        label: "Unity",
        imageUrl: "/assets/images/skills/UnityLogo.svg"
    },
    userTests:{
        label: "User tests",
        imageUrl: "/assets/icons/Person.svg"
    },
    seriousGame:{
        label: "Serious game",
        imageUrl: "/assets/icons/Controller.svg"
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