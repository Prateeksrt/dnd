import React from 'react';
import './App.css';
import {CharacterStats, Profile} from "./components/PropTypes";
import {createState, State} from "@hookstate/core";
import {CharacterSheet} from "./components/CharacterSheet";
import {profile, stats} from "./data/initialData";
import {createTheme, Paper, ThemeProvider} from "@mui/material";

export const profileStateGlobal: State<Profile> = createState<Profile>(profile);
export const statStateGlobal: State<CharacterStats> = createState<CharacterStats>(stats);

function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },

    })
    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <CharacterSheet/>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
