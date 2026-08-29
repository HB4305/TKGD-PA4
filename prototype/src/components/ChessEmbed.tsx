import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface ChessEmbedProps {
  embedId: string
}

export function ChessEmbed({ embedId }: ChessEmbedProps) {
  const [height, setHeight] = useState(420)
  useEffect(() => {
    function receiveHeight(event: MessageEvent) {
      if (event.origin !== 'https://www.chess.com' || !event.data || event.data.id !== embedId) return
      const frameHeight = Number(event.data.frameHeight)
      if (Number.isFinite(frameHeight) && frameHeight > 100) setHeight(frameHeight + 37)
    }
    window.addEventListener('message', receiveHeight)
    return () => window.removeEventListener('message', receiveHeight)
  }, [embedId])

  const url = `https://www.chess.com/emboard?id=${embedId}`
  return (
    <div className="chess-embed">
      <iframe title={`Chess.com board ${embedId}`} src={url} style={{ height }} frameBorder="0" loading="eager" />
    </div>
  )
}
