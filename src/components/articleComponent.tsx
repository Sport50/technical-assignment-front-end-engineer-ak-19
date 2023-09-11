import React from 'react';
import { Article } from '@/types/article';
import { Card, CardContent, Grid, Typography } from '@mui/material';

interface ArticleProps {
  article: Article
}

const ArticleComponent: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Grid item>
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">{article.title}</Typography>
          <Typography variant="subtitle1">Author: {article.authorEmail} </Typography>
          <Typography variant="subtitle1">Publish date: {article.publicationDate.toString()}</Typography>
          <Typography variant="subtitle1" color="primary"><p>{article.body}</p></Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ArticleComponent;