import React, {useState} from 'react';
import {useHookstate} from "@hookstate/core";
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
    const activeStats = useHookstate(statStateGlobal).activeStats.get();
    const [expanded, setExpanded] = useState<boolean|string>(false);
    const handleChange = (panel: string, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <Container>
            {activeStats
                .map(s => ({
                    ...s,
                    expanded: expanded === s.type.toString(),
                    onChange: (event: any, isExpanded: boolean) => handleChange(s.type.toString(), isExpanded)
                }) )
                .map(s => <ActiveStatComponent {...s} />)}
        </Container>
    )
}

interface ExpandedController {
    expanded: boolean,
    onChange: (event: any, x: boolean) => void
}


const ActiveStatComponent = (s: ActiveStats & ExpandedController) => {
    return (
        <Accordion expanded={s.expanded} onChange={s.onChange}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>
                    {`${s.type} ${s.value} (${s.modifier > 0 ? "+" : " "}${s.modifier})`}
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
                {`${sb.modifier > 0 ? "+" : ""}${sb.modifier} ${sb.type}`}
            </Typography>
        </ListItem>
    )
}
