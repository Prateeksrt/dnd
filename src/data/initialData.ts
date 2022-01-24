import {CharacterStats, Profile} from "../components/PropTypes"
import {
    ActiveStatType, ActiveSubStatType,
    Archetype,
    CharacterBackground,
    CharacterClass,
    CharacterRace,
    PassiveStatType
} from "../types/constant";


export const profile: Profile = {
    name: "Rhogar",
    alignment: "None",
    experiencePoint: 0,
    archetype: Archetype.None,
    class: CharacterClass.Fighter,
    race: CharacterRace.DragonBorn,
    background: CharacterBackground.Soldier,
}

export const stats: CharacterStats = {
    activeStats: [
        {
            type: ActiveStatType.Strength,
            value: 18,
            modifier: 4,
            subStats: [
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 6,
                    proficient: true
                },
                {
                    type: ActiveSubStatType.Athletics,
                    modifier: 6,
                    proficient: true
                }
            ]
        },
        {
            type: ActiveStatType.Dexterity,
            value: 10,
            modifier: 0,
            subStats: [
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 0,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Acrobatics,
                    modifier: 0,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Sleight_of_hand,
                    modifier: 0,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Stealth,
                    modifier: 0,
                    proficient: false
                },
            ]
        },
        {
            type: ActiveStatType.Constitution,
            value: 14,
            modifier: 2,
            subStats: [
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 4,
                    proficient: true
                },
            ]
        },
        {
            type: ActiveStatType.Intelligence,
            value: 15,
            modifier: 2,
            subStats: [
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Arcana,
                    modifier: 2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.History,
                    modifier: 2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Investigation,
                    modifier: 2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Nature,
                    modifier: 2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Religion,
                    modifier: 2,
                    proficient: false
                },
            ]
        },
        {
            type: ActiveStatType.Wisdom,
            value: 7,
            modifier: -2,
            subStats: [
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: -2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Animal_handling,
                    modifier: -2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Insight,
                    modifier: -2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Medicine,
                    modifier: -2,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Perception,
                    modifier: 0,
                    proficient: true
                },
                {
                    type: ActiveSubStatType.Survival,
                    modifier: 0,
                    proficient: true
                },
            ]
        },
        {
            type: ActiveStatType.Charisma,
            value: 10,
            modifier: 0,
            subStats: [
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 0,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Deception,
                    modifier: 0,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Intimidation,
                    modifier: 2,
                    proficient: true
                },
                {
                    type: ActiveSubStatType.Performance,
                    modifier: 0,
                    proficient: false
                },
                {
                    type: ActiveSubStatType.Persuasion,
                    modifier: 0,
                    proficient: false
                },
            ]
        },
    ],
    passiveStats: [
        {
            type: PassiveStatType.Proficiency,
            value: 2
        },
        {
            type: PassiveStatType.Perception,
            value: 10
        },
        {
            type: PassiveStatType.Insight,
            value: 8
        },
        {
            type: PassiveStatType.Inspiration,
            value: 0
        },
    ]
}
