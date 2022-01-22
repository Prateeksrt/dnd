import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CharacterSheet from "./components/CharacterSheet";
import {Archetype, CharacterBackground, CharacterClass, CharacterRace} from "./types/constant";
import {Profile} from "./components/PropTypes";
import {createState, State} from "@hookstate/core";

const profile: Profile = {
  archetype: Archetype.None,
  alignment: "None",
  background: CharacterBackground.Soldier,
  class: CharacterClass.Fighter,
  experiencePoint: 0,
  name: "Rhogar",
  race: CharacterRace.DragonBorn
}

export const profileStateGlobal: State<Profile> = createState<Profile>(profile);

function App() {
  return (
    <CharacterSheet/>
  );
}

export default App;
