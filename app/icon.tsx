import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 12 10"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M2,1 L2,0 M10,1 L10,0" />
          <path d="M3,2 L9,2" />
          <path d="M1,3 L3,3 M5,3 L7,3 M9,3 L11,3" />
          <path d="M0,4 L12,4" />
          <path d="M0,5 L2,5 M4,5 L8,5 M10,5 L12,5" />
          <path d="M0,6 L1,6 M11,6 L12,6" />
          <path d="M2,7 L3,7 M9,7 L10,7" />
          <path d="M0,8 L1,8 M4,8 L5,8 M7,8 L8,8 M11,8 L12,8" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
