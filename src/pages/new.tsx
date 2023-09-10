import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Grid, TextField, Typography } from '@mui/material';

const NewArticle = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setbody] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const addNewArticle = async () => {
        const response = await fetch('/api/articles', {
            method: 'POST',
            body: JSON.stringify({ title, body, authorEmail: email }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) router.push('/');
    }

    const goBack = () => router.push('/')

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
                        value={title} onChange={(e) => setTitle(e.target.value)}
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
                        onChange={(e) => setbody(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={addNewArticle}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default NewArticle;
