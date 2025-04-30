"use client";
import { useState } from 'react'
import VideoLyrics from './VideoLyrics'

export default function Home() {
  const [url, setUrl] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {!submitted ? (
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-2xl font-bold text-center">YouTube + Lyrics Viewer</h1>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Paste YouTube URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <textarea
            className="w-full p-2 border rounded h-40"
            placeholder="Paste lyrics here"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded"
            onClick={() => setSubmitted(true)}
          >
            Show Video and Lyrics
          </button>
        </div>
      ) : (
        <VideoLyrics url={url} lyrics={lyrics} goBack={() => setSubmitted(false)} />
      )}
    </div>
  )
}
