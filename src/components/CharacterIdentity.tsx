import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Form from "react-bootstrap/Form"
import {useState} from "@hookstate/core";
import {profileStateGlobal} from "../App";

export const CharacterIdentity = () => {
    const profile = useState(profileStateGlobal)
    return (
        <>
            <Container>
                <Row>
                    <Col><VL label="Character Name" value={profile.name} size="lg"/></Col>
                    <Col><VL value={profile.race} label="Race"/></Col>
                    <Col><VL value={profile.background} label="Background"/></Col>
                    <Col><VL value={profile.class} label="class"/></Col>
                </Row>
                <Row>
                    <Col xs={3} md="3"/>
                    <Col><VL value={profile.alignment} label="Alignment"/></Col>
                    <Col><VL value={profile.experiencePoint} label="Experience Points"/></Col>
                    <Col><VL value={profile.archetype} label="Archetype"/></Col>
                </Row>
            </Container>
        </>
    );
}

export interface ValueAndLabelProps {
    value: any;
    label: string;
    size?: "sm" | "lg";
}

const VL = ({value, label, size}: ValueAndLabelProps) => (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
            type="email"
            placeholder="Enter email"
            value={value.get()}
            size={size ?? "sm"}
            onChange={(event) => value.set(() => event.target.value)}
        />
        <Form.Text className="text-muted">
            {label}
        </Form.Text>
    </Form.Group>
)

