import "@styles/globals.css"


export const metadata = {
  title: 'Twitter-clone',
  description: 'The official twitter clone for youtube tutorials',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
