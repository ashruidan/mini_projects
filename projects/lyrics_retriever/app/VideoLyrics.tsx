interface Props {
  url: string
  lyrics: string
  goBack: () => void
}

const getEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : ''
}

export default function VideoLyrics({ url, lyrics, goBack }: Props) {
  const embedUrl = getEmbedUrl(url)

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <div className="flex-1">
        <iframe
          className="w-full aspect-video rounded"
          src={embedUrl}
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="flex-1 bg-white p-4 rounded shadow overflow-auto max-h-[60vh] whitespace-pre-wrap">
        <h2 className="text-lg font-bold mb-2">Lyrics</h2>
        {lyrics}
      </div>
      <button onClick={goBack} className="mt-4 text-sm underline text-blue-600">
        ← Go Back
      </button>
    </div>
  )
}
