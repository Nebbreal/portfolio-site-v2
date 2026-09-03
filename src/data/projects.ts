import {allSkills, type project} from "../types/project.ts";

//Note: Max 251 characters supported in summary to keep styling consistent

export const FrightlessBirdsProject: project = {
    title: "Frightless Birds",
    summary: "Frightless birds is a 4 player party game made for the Enversed arcade table centered around simplicity and messing with your friends.",
    coverImageUrl: "/assets/images/projects/cover-images/FrightlessBirdsPreview.webp",
    skills: [allSkills["unity"], allSkills["csharp"], allSkills["userTests"]],
    developmentTime: "3 Months",
    developmentStartDate: "Mar 2026",
    teamMembers: "5 (+1 temporary) members",
}

export const MeerMomoProject: project = {
    title: "Meer Momo",
    summary:"Meer Momo is a fishing game made for mental or physically less abled people to still play and enjoy gaming. The project was made for Hulan's 'Pillo' platform which uses a pillow as a controller.",
    coverImageUrl:"/assets/images/projects/cover-images/MeerMomoPreview.png",
    skills: [allSkills["unity"], allSkills["csharp"], allSkills["seriousGame"]],
    developmentTime: "1.5 months",
    developmentStartDate: "May 2025",
    teamMembers: "5 members"
}

export const HogidProject: project = {
    title: "Hogid",
    summary: "HOGID is a short puzzle game game for the first loot goblins with the theme: 'One room wonders'. Our goal was to create a game where the password game meets a room decorator.",
    coverImageUrl: "/assets/images/projects/cover-images/HogidPreview.png",
    skills: [allSkills["unity"], allSkills["csharp"]],
    developmentTime: "4 days",
    developmentStartDate: "May 2025",
    teamMembers: "2 members"
}