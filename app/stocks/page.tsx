"use client";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StockQuote {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  previousClose: string;
  volume: string;
}

interface TimeSeriesData {
  date: string;
  close: string;
}

export default function StocksPage() {
  const [ticker, setTicker] = useState("AAPL");
  const [stockQuote, setStockQuote] = useState<StockQuote | null>(null);
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStockQuote = async (symbol: string) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY}`
      );
      
      const data = await response.json();
      
      if (data["Error Message"]) {
        throw new Error("Invalid stock symbol. Please try again.");
      } else if (data["Note"]) {
        throw new Error("API rate limit reached. Please try again later.");
      } else if (data["Global Quote"]) {
        const quote = data["Global Quote"];
        return {
          symbol: quote["01. symbol"],
          price: quote["05. price"],
          change: quote["09. change"],
          changePercent: quote["10. change percent"],
          previousClose: quote["08. previous close"],
          volume: quote["06. volume"]
        };
      } else {
        throw new Error("No data found for this symbol.");
      }
    } catch (err) {
      throw err;
    }
  };

  const fetchTimeSeriesData = async (symbol: string) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY}`
      );
      
      const data = await response.json();
      
      if (data["Error Message"]) {
        throw new Error("Invalid stock symbol. Please try again.");
      } else if (data["Note"]) {
        throw new Error("API rate limit reached. Please try again later.");
      } else if (data["Time Series (Daily)"]) {
        const timeSeries = data["Time Series (Daily)"];
        const dates = Object.keys(timeSeries).sort().slice(-30); // Last 30 days
        
        return dates.map(date => ({
          date: new Date(date).toLocaleDateString(),
          close: timeSeries[date]["4. close"]
        }));
      } else {
        throw new Error("No time series data found for this symbol.");
      }
    } catch (err) {
      throw err;
    }
  };

  const fetchStockData = async (symbol: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const [quoteData, timeSeriesData] = await Promise.all([
        fetchStockQuote(symbol),
        fetchTimeSeriesData(symbol)
      ]);
      
      setStockQuote(quoteData);
      setTimeSeriesData(timeSeriesData);
    } catch (err: any) {
      setError(err.message);
      setStockQuote(null);
      setTimeSeriesData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticker.trim()) {
      fetchStockData(ticker.trim().toUpperCase());
    }
  };

  useEffect(() => {
    fetchStockData(ticker);
  }, []);

  const chartData = {
    labels: timeSeriesData.map(item => item.date),
    datasets: [
      {
        label: `${ticker} Closing Price`,
        data: timeSeriesData.map(item => parseFloat(item.close)),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#e5e7eb',
        },
      },
      title: {
        display: true,
        text: `${ticker} - 30 Day Price Chart`,
        color: '#e5e7eb',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#9ca3af',
        },
        grid: {
          color: '#374151',
        },
      },
      y: {
        ticks: {
          color: '#9ca3af',
        },
        grid: {
          color: '#374151',
        },
      },
    },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-400 mb-4">
              Stock Quote & Chart 📈
            </h1>
            <p className="text-neutral-300">
              Get real-time stock information and price charts using Alpha Vantage API
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter stock symbol (e.g., AAPL)"
                className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium rounded-lg transition-colors"
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </form>

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-300 max-w-2xl mx-auto">
              {error}
            </div>
          )}

          {/* Stock Quote Display */}
          {stockQuote && (
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-blue-400">
                  {stockQuote.symbol}
                </h2>
                <span className="text-3xl font-bold text-white">
                  ${parseFloat(stockQuote.price).toFixed(2)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Change:</span>
                    <span className={`font-semibold ${
                      parseFloat(stockQuote.change) >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {parseFloat(stockQuote.change) >= 0 ? '+' : ''}{parseFloat(stockQuote.change).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Change %:</span>
                    <span className={`font-semibold ${
                      parseFloat(stockQuote.changePercent) >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {parseFloat(stockQuote.changePercent) >= 0 ? '+' : ''}{parseFloat(stockQuote.changePercent).toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Previous Close:</span>
                    <span className="text-white font-semibold">
                      ${parseFloat(stockQuote.previousClose).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Volume:</span>
                    <span className="text-white font-semibold">
                      {parseInt(stockQuote.volume).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chart Display */}
          {timeSeriesData.length > 0 && (
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <Line data={chartData} options={chartOptions} />
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
              <p className="mt-2 text-neutral-400">Fetching stock data...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
