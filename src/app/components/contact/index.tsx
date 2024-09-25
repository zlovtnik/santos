'use client';
import React from "react";
import {Button, ContactPhrase as StyledContactPhrase, Container, Field, Form, Input, Label, TextArea,} from "./style";
import {Tag as StyledTag} from "../home/style";
import axios from "axios";
import {hostname} from "os";

export const Contact: React.FC<{
    props: {
        Tag: String
        ContactPhrase: string; LabelTitles: { 1: string; 2: string; 3: string }; TextAreaPlaceholder: string; ButtonText: string;
    };
}> = ({props}) => {
    const [mail, setMail] = React.useState({
        name: "", email: "", subject: "", message: "",
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        let data = `${mail.name}-${mail.subject}-${mail.email}\n\n${mail.message}`;

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://20.206.213.125:8081',
            headers: {
                'Content-Type': 'text/plain',
                'Host': 'http://20.206.213.125:8081'
            },
            maxRedirects: 0,
            data : data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const {Tag, ContactPhrase, LabelTitles, TextAreaPlaceholder, ButtonText} = props;


    return (<Container>
            <StyledTag>{Tag}</StyledTag>
            <div className="content">
                <StyledContactPhrase>
                    {ContactPhrase}
                </StyledContactPhrase>
                <Form onSubmit={handleSubmit}>
                    <Field>
                        <Label>{LabelTitles[1]}</Label>
                        <Input
                            type="text"
                            maxLength={200}
                            onChange={(v) => setMail((prevstate) => ({
                                ...prevstate, name: v.target.value,
                            }))}
                        />
                    </Field>
                    <Field>
                        <Label>{LabelTitles[2]}</Label>
                        <Input
                            type="email"
                            maxLength={230}
                            onChange={(v) => setMail((prevstate) => ({
                                ...prevstate, email: v.target.value,
                            }))}
                        />
                    </Field>
                    <Field>
                        <Label>{LabelTitles[3]}</Label>
                        <Input
                            type="text"
                            maxLength={200}
                            onChange={(v) => setMail((prevstate) => ({
                                ...prevstate, subject: v.target.value,
                            }))}
                        />
                    </Field>
                    <Field>
                        <TextArea
                            placeholder={TextAreaPlaceholder}
                            maxLength={500}
                            onChange={(v) => setMail((prevstate) => ({
                                ...prevstate, message: v.target.value,
                            }))}
                        ></TextArea>
                    </Field>
                    <Button>{ButtonText}</Button>
                </Form>
            </div>
        </Container>);
};
