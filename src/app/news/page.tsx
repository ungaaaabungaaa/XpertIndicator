'use client';
import Head from 'next/head';
import Nav_Bar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import { Chip } from '@nextui-org/chip';
import NewsCard from '../components/newscard';

interface NewsData {
  category: string;
  headline: string;
  source: string;
  image: string;
  url: string;
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsData[]>([]);

  useEffect(() => {
    const fetchMarketNews = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        console.log('Market News:', data);
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching market news:', error);
      }
    };
    fetchMarketNews();
  }, []);

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Nav_Bar />
      <div className="w-100 p-6 flex items-center justify-center flex-col">
        <br></br>
        <Chip>News</Chip>
        <br></br>
        <h1 className="text-white text-2xl font-semibold text-center">
          Discover Top Trading Insights
        </h1>
        <p className="text-white text-center">
          Browse through our top picks, featuring the most popular and insightful
          News.
        </p>
        <br></br>
        <br></br>
        <div className="w-11/12 flex flex-wrap gap-2 align-middle justify-center">
          {newsData.length > 0 ? (
            newsData.slice(0, 10).map((newsItem, index) => (
              <NewsCard
                key={index}
                category={newsItem.category}
                headline={newsItem.headline}
                source={newsItem.source}
                image={newsItem.image}
                url={newsItem.url}
              />
            ))
          ) : (
            <p className="text-white">Loading news data...</p>
          )}
        </div>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </>
  );
}