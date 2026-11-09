export default function Loading() {
  return (
    <div className="space-y-4 w-full max-w-4xl mx-auto p-4">
      {/* Buat perulangan 3 kartu skeleton */}
      {[1, 2, 3].map((item) => (
        <div 
          key={item} 
          className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-700 animate-pulse"
        >
          {/* Header Card (Mirip judul/ikon sensor) */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded w-1/4"></div>
            <div className="h-6 w-6 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          </div>

          {/* Body Card (Mirip nilai/value sensor) */}
          <div className="space-y-3">
            <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
          </div>

          {/* Footer Card (Mirip waktu update/status) */}
          <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700 flex justify-between items-center">
            <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-1/5"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-1/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}