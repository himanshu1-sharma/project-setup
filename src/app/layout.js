import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Providers } from "./redux/providers";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  manifest: "/manifest.json",
  title: "AI Tools Bazaar - World's #1 AI Tools Platform",
  description: "AI Tools Bazaar is the World’s #1 AI tools platform with the largest database of thousands of AI Tools and software. Explore all the latest & Trending AI tools in one place. Updated daily.",
  keywords: "#bestaidirectory, #aitoolsdirectory, #aitoolslist, #aitoolsfree, #aiwebsites, #aidirectory",
  robots: "index, follow",
  charSet: "UTF-8",
  language: "English",
  themeColor: "#09090b",
  appleTouchIcons: [
    { sizes: "48x48", href: "/icons/icon-48x48.png" },
    { sizes: "72x72", href: "/icons/icon-72x72.png" },
    { sizes: "96x96", href: "/icons/icon-96x96.png" },
    { sizes: "128x128", href: "/icons/icon-128x128.png" },
    { sizes: "144x144", href: "/icons/icon-144x144.png" },
    { sizes: "152x152", href: "/icons/icon-152x152.png" },
    { sizes: "192x192", href: "/icons/icon-192x192.png" },
    { sizes: "384x384", href: "/icons/icon-384x384.png" },
    { sizes: "512x512", href: "/icons/icon-512x512.png" }
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
