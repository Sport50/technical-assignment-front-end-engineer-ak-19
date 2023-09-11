import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Alert, Button, Grid, TextField, Typography } from '@mui/material';

const NewArticle = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setbody] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const validateOrThrowError = () => {
        if (!title) throw 'Title is required!';
        if (!body) throw 'Body is required!';
        if (!email) throw 'Email is required!';
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) throw 'Email is not valid!';
    }

    const postToApi = async () => {
        const response = await fetch('/api/articles', {
            method: 'POST',
            body: JSON.stringify({ title, body, authorEmail: email }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) router.push('/');
    }

    const addNewArticle = async () => {
        try {
            validateOrThrowError();
            postToApi();
        } catch (error: string | any) {
            setError(error)
        }
    }

    const goBack = () => router.push('/')

    const clearErrorAndset = (setFunction: Function, value: string) => {
        setError('')
        setFunction(value)
    }

    return (
        <React.Fragment>
            <Button onClick={goBack}>Go back</Button>
            <Typography variant="h6" gutterBottom>
                Add article:
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id="title"
                        label="Title"
                        fullWidth
                        autoComplete="cc-title"
                        variant="standard"
                        value={title} onChange={(e) => clearErrorAndset(setTitle, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id="body"
                        label="Body"
                        fullWidth
                        autoComplete="cc-body"
                        variant="standard"
                        multiline
                        value={body}
                        onChange={(e) => clearErrorAndset(setbody, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        variant="standard"
                        autoComplete="cc-email"
                        value={email}
                        onChange={(e) => clearErrorAndset(setEmail, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={addNewArticle}>
                        Save
                    </Button>
                </Grid>
            </Grid>
            {error && <Alert severity="error"> {error} </Alert>}
        </React.Fragment>
    );
};

export default NewArticle;
