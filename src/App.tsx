import React from 'react';
import './App.css';
import {
    ActiveStatType,
    ActiveSubStatType,
    Archetype,
    CharacterBackground,
    CharacterClass,
    CharacterRace,
    PassiveStatType
} from "./types/constant";
import {CharacterStats, Profile} from "./components/PropTypes";
import {createState, State} from "@hookstate/core";
import {CharacterSheet} from "./components/CharacterSheet";

const profile: Profile = {
    name: "Rhogar",
    alignment: "None",
    experiencePoint: 0,
    archetype: Archetype.None,
    class: CharacterClass.Fighter,
    race: CharacterRace.DragonBorn,
    background: CharacterBackground.Soldier,
}

const stats: CharacterStats = {
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
                },
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 6,
                    proficient: true
                },
                {
                    type: ActiveSubStatType.Athletics,
                    modifier: 6,
                    proficient: true
                },
            ]
        },{
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
                },
                {
                    type: ActiveSubStatType.Save_Throws,
                    modifier: 6,
                    proficient: true
                },
                {
                    type: ActiveSubStatType.Athletics,
                    modifier: 6,
                    proficient: true
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

export const profileStateGlobal: State<Profile> = createState<Profile>(profile);
export const statStateGlobal: State<CharacterStats> = createState<CharacterStats>(stats);

function App() {
    return (<CharacterSheet/>);
}

export default App;
