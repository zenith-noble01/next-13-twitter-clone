import { Header, Sidebar } from "@components"
import "@styles/globals.css"


export const metadata = {
  title: 'Twitter-clone',
  description: 'The official twitter clone for youtube tutorials',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex w-full bg-black text-white px-24">
          <Sidebar />
          <div className="main__container  w-3/4">
            {children}
          </div>
        </main>
      </body>
    </html >
  )
}
