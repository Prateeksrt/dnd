import React from 'react';
import {useState} from "@hookstate/core";
import {statStateGlobal} from "../App";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    List,
    ListItem,
    Typography
} from "@mui/material";
import {ActiveStats, ActiveSubStats} from "./PropTypes";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CharacterActiveStats = () => {
    const activeStats = useState(statStateGlobal).activeStats.get()
    return (
        <Container>
            {activeStats.map(s => <ActiveStatComponent {...s} />)}
        </Container>
    )
}

const ActiveStatComponent = (s: ActiveStats) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>
                    {`${s.type} ${s.value} (${s.modifier > 0 ? "+" : "-"}${s.modifier})`}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List dense={true} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {s.subStats.map(sb => <ActiveSubStatComponent {...sb}/>)}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

const ActiveSubStatComponent = (sb: ActiveSubStats) => {
    return (
        <ListItem alignItems="flex-start">
            <Typography variant="caption">
                {`${sb.proficient? "*" : "_"} ${sb.modifier > 0 ? "+" : ""}${sb.modifier} ${sb.type}`}
            </Typography>
        </ListItem>
    )
}
