// components/SensorData.tsx

// 1. Import connection dari next/server (untuk Next.js App Router versi terbaru)
import { connection } from 'next/server';

export default async function SensorData() {
  // 2. Panggil connection() untuk menandai ini sebagai dynamic request-time boundary
  await connection();

  // 3. Buat nilai acak menggunakan Math.random() setelah boundary
  // Contoh: Nilai suhu acak antara 20 hingga 35 derajat Celcius
  const randomTemperature = (Math.random() * (35 - 20) + 20).toFixed(1);
  const lastUpdated = new Date().toLocaleTimeString();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Kartu Sensor 1: Nilai Dinamis dengan Math.random() */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Suhu Ruangan</h3>
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
        </div>
        <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {randomTemperature} °C
        </div>
        <p className="text-xs text-zinc-400 mt-2">Update: {lastUpdated}</p>
      </div>

      {/* Kartu Sensor 2 & 3 (Contoh data statis/pendukung lainnya jika ada) */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Kelembapan</h3>
        <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">65 %</div>
        <p className="text-xs text-zinc-400 mt-2">Status: Stabil</p>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Tekanan Udara</h3>
        <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">1013 hPa</div>
        <p className="text-xs text-zinc-400 mt-2">Status: Normal</p>
      </div>
    </div>
  );
}