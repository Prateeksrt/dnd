import {
    Archetype,
    CharacterBackground,
    CharacterClass,
    CharacterRace, PassiveStatType, ActiveStatType, ActiveSubStatType
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

export interface ActiveStats {
    type: ActiveStatType,
    value: number,
    modifier: number,
    subStats: ActiveSubStats[]
}

export interface ActiveSubStats {
    type: ActiveSubStatType,
    modifier: number,
    proficient: boolean,
}

export interface PassiveStats {
    type: PassiveStatType,
    value: number
}

export interface CharacterStats {
    passiveStats?: PassiveStats[],
    activeStats: ActiveStats[]
}
