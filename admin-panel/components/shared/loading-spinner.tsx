export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-64 w-64">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent border-r-transparent border-l-transparent dark:border-indigo-400">
        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            d="M4 12v2a2 2 2 0 0112.6162l1.34 6.736 1-3.6175l1.34-4.4696"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
