import React from 'react';
import {CharacterIdentity} from "./CharacterIdentity";
import {Container} from "react-bootstrap";

const sheetContainerStyle = {
    padding: "15px",
    backgroundColor: "grey",
}

const CharacterSheet = () => {
    return (
        <Container style={sheetContainerStyle}>
            <CharacterIdentity/>
        </Container>
    );
};

CharacterSheet.propTypes = {};

export default CharacterSheet;
