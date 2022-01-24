import React from 'react';
import './App.css';
import {CharacterStats, Profile} from "./components/PropTypes";
import {createState, State} from "@hookstate/core";
import {CharacterSheet} from "./components/CharacterSheet";
import {profile, stats} from "./data/initialData";

export const profileStateGlobal: State<Profile> = createState<Profile>(profile);
export const statStateGlobal: State<CharacterStats> = createState<CharacterStats>(stats);

function App() {
    return (<CharacterSheet/>);
}

export default App;
