import { Sidebar, ThemeWrapper } from "@components"
import "@styles/globals.css"
import { Providers } from "../redux/Providers.jsx"


export const metadata = {
  title: 'Twitter-clone',
  description: 'The official twitter clone for youtube tutorials',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeWrapper>
            <main className="flex w-full max-[750px]:px-8 px-24 transition-all duration-300 theme bg-skin-fill">
              <Sidebar />
              <div className="main__container w-[80%]">
                {children}
              </div>
            </main>
          </ThemeWrapper>
        </Providers>
      </body>
    </html >
  )
}
