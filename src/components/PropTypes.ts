import {
    Archetype,
    CharacterBackground,
    CharacterClass,
    CharacterRace
} from "../types/constant";

export interface SpecSheetProps {
    profile: Profile
}

export interface Profile {
    archetype: Archetype;
    class: CharacterClass;
    experiencePoint: number;
    alignment: string;
    background: CharacterBackground;
    race: CharacterRace;
    name: string;
}
