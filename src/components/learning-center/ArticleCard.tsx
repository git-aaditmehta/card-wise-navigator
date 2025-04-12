
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface Article {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-cardwise-teal-500">{article.category}</Badge>
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-xs text-muted-foreground mb-3 mt-1">
          <CalendarIcon className="h-3 w-3 mr-1" />
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{article.excerpt}</p>
        <div className="mt-auto pt-3">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
