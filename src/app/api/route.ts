// app/api/marketNews/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const { FINNHUB_API_KEY } = process.env;

  try {
    const response = await axios.get(`https://finnhub.io/api/v1/news?category=forex,crypto&token=${FINNHUB_API_KEY}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching market news:', error);
    return NextResponse.json({ error: 'Failed to fetch market news' }, { status: 500 });
  }
}
