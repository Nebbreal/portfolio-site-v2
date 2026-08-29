import type {ReactNode} from "react";

export type project = {
    title: string;
    summary: string;
    coverImageUrl: string;
    skills: skillEntry[]
    info: infoEntry[]
    blogBody: ReactNode
}

export type skillEntry = {
    imageUrl: string;
    name: string;
}

export type infoEntry = {
    imageUrl: string;
    name: string;
}

export type chapter = {
    label: string;
    link: string;
}