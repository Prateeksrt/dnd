import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {profileStateGlobal} from "../App";
import {useState} from "@hookstate/core";

export const CharacterIdentity = () => {
    const profile = useState(profileStateGlobal);
    return (
        <Card sx={{display: "flex", minWidth: 275, maxHeight: 200, marginTop: "10px"}}>
            <CardMedia
                component="img"
                image="/dnd/character_image.jpeg"
                alt="Paella dish"
                sx={{
                    width: "150px"
                }}
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {profile.name.get()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Race: {profile.race.get()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Class: {profile.class.get()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Background: {profile.background.get()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Alignment: {profile.alignment.get()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Archetype: {profile.archetype.get()}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}
