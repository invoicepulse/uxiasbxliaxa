import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const revalidate = 0
export const contentType = 'image/png'
export const size = {
  width: 32,
  height: 32,
}

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          color: 'white',
        }}
      >
        MC
      </div>
    ),
    {
      ...size,
    }
  )
}
