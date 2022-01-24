import React from 'react';
import {Container} from "@mui/material";
import {CharacterIdentity} from "./CharacterIdentity";
import {CharacterPassiveStats} from "./CharacterPassiveStats";
import {CharacterActiveStats} from "./CharacterActiveStats";

export const CharacterSheet = () => {
    return (
        <Container>
            <CharacterIdentity />
            <CharacterPassiveStats />
            <CharacterActiveStats />
        </Container>
    );
}
