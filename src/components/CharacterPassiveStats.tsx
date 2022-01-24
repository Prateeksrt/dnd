import {Avatar, Box, Card, Chip, Container, Grid} from '@mui/material';
import React from 'react';
import {statStateGlobal} from "../App";
import {useState} from "@hookstate/core";
import {PassiveStats} from "./PropTypes";

export const CharacterPassiveStats = () => {
    const passiveStats = useState(statStateGlobal).passiveStats.get()
    return (
        <Container sx={{marginTop: "10px"}}>
            <Grid container spacing="10">
                {passiveStats?.map(s => <PassiveStatComponent {...s} />)}
            </Grid>
        </Container>
    )
}

const PassiveStatComponent = (s: PassiveStats) => {
    return (
        <Grid item>
            <Chip
                variant="outlined"
                avatar={<Avatar>{s.value}</Avatar>}
                label={s.type}
            />
        </Grid>
    )
}
