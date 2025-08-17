"use client";

import { useState, useEffect, useCallback } from "react";
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

  const fetchStockData = useCallback(async (symbol: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const [quoteData, timeSeriesData] = await Promise.all([
        fetchStockQuote(symbol),
        fetchTimeSeriesData(symbol)
      ]);
      
      setStockQuote(quoteData);
      setTimeSeriesData(timeSeriesData);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      setStockQuote(null);
      setTimeSeriesData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticker.trim()) {
      fetchStockData(ticker.trim().toUpperCase());
    }
  };

  useEffect(() => {
    fetchStockData(ticker);
  }, [fetchStockData, ticker]);

  const chartData = {
    labels: timeSeriesData.map(item => item.date),
    datasets: [
      {
        label: `${ticker} Closing Price`,
        data: timeSeriesData.map(item => parseFloat(item.close)),
        borderColor: '#0EA5E9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
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
          color: '#0B0B0C',
        },
      },
      title: {
        display: true,
        text: `${ticker} - 30 Day Price Chart`,
        color: '#0B0B0C',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#0B0B0C',
        },
        grid: {
          color: '#2A2A2A',
        },
      },
      y: {
        ticks: {
          color: '#0B0B0C',
        },
        grid: {
          color: '#2A2A2A',
        },
      },
    },
  };

  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-ink mb-4">
              Stock Quote & Chart 📈
            </h1>
            <p className="text-xl text-ink/70">
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
                className="flex-1 px-4 py-3 bg-white border border-stone rounded-lg focus:outline-none focus:border-accent text-ink"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-ink text-cream hover:bg-black disabled:bg-ink/50 font-medium rounded-lg transition-colors"
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </form>

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 max-w-2xl mx-auto">
              {error}
            </div>
          )}

          {/* Stock Quote Display */}
          {stockQuote && (
            <div className="surface p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-cream">
                  {stockQuote.symbol}
                </h2>
                <span className="text-3xl font-bold text-cream">
                  ${parseFloat(stockQuote.price).toFixed(2)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cream/70">Change:</span>
                    <span className={`font-semibold ${
                      parseFloat(stockQuote.change) >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {parseFloat(stockQuote.change) >= 0 ? '+' : ''}{parseFloat(stockQuote.change).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/70">Change %:</span>
                    <span className={`font-semibold ${
                      parseFloat(stockQuote.changePercent) >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {parseFloat(stockQuote.changePercent) >= 0 ? '+' : ''}{parseFloat(stockQuote.changePercent).toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cream/70">Previous Close:</span>
                    <span className="text-cream font-semibold">
                      ${parseFloat(stockQuote.previousClose).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/70">Volume:</span>
                    <span className="text-cream font-semibold">
                      {parseInt(stockQuote.volume).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chart Display */}
          {timeSeriesData.length > 0 && (
            <div className="bg-white border border-stone rounded-2xl p-6">
              <Line data={chartData} options={chartOptions} />
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              <p className="mt-2 text-ink/70">Fetching stock data...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
