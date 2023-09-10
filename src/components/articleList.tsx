import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Grid, Typography } from '@mui/material';
import { Article } from '@/types/article';
import ArticleComponent from './articleComponent';

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/articles')
      const data = await response.json()
      setArticles(data)
    }

    fetchData()
  }, [])

  const addNewArticle = () => router.push('/new')

  return (
    <div>
      <Button onClick={addNewArticle}>Add new article</Button>
      <Typography variant="h4" gutterBottom> List of the articles:</Typography>
      <Grid container spacing={12}>{articles.map((article: Article) => <ArticleComponent key={article.id} article={article} />)} </Grid>
    </div>
  );
};

export default ArticleList;