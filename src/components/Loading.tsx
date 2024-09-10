import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <svg className="animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full animate-color-mix" />
        </div>
      </div>
      <style>{`
        @keyframes color-mix {
          0%, 100% { background-color: #8B5CF6; }
          33% { background-color: #10B981; }
          66% { background-color: #FBBF24; }
        }
        .animate-color-mix {
          animation: color-mix 3s infinite;
        }
      `}</style>
    </div>
  )
}