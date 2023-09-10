import type { NextApiRequest, NextApiResponse } from 'next'
import { Article } from '@/types/article';

const articles: Article[] = [
  { id: 1, title: 'Article 1', body: 'Content for Article 1', authorEmail: 'author@gmail.com', publicationDate: new Date().toLocaleDateString('en-US') },
  { id: 2, title: 'Article 2', body: 'Content for Article 2', authorEmail: 'author@gmail.com', publicationDate: new Date().toLocaleDateString('en-US') },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') createArticle(req, res);
  else res.status(200).json(getLast5ArticlesReverseSorted())
}

const getLast5ArticlesReverseSorted = () => articles.slice(Math.max(articles.length - 5, 0)).sort((a, b) => b.id - a.id);

const createArticle = (req: NextApiRequest, res: NextApiResponse<void>) => {
  const article = req.body;
  article.id = articles.length + 1;
  article.publicationDate = new Date().toLocaleDateString('en-US');
  articles.push(article);
  res.status(200).json();
}
