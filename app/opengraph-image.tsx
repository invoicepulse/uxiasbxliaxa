import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 0
export const alt = 'Model Canvas'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        Model Canvas
      </div>
    ),
    {
      ...size,
    }
  )
}
