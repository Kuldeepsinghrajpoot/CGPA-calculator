import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'CGPA calculator app',
//   description: 'thsi is a CGPA calcualator app',
//   metadata:'CGPA calcualator app',
//   metadata:'find out the avg cgpa'


// }

export const metadata = {
  title:'CGPA Average Calculator',
generator: 'Next.js',
applicationName: 'CGPA Average Calculator app',
description:' fed up of Asking the formula to calculate cgpa from sgpa , no worries let the app do it for you ',
referrer: 'origin-when-cross-origin',
keywords: ['CGPA calculate','CGPA Calculator','Cgpa Average Calcuate', 'CGPA Average Calcuate app', 'SGPA to CGPA ','Calculate CGPA of all semester'],
authors: [{ name: 'kuldeep Singh Rajpoot' }],

creator: 'Kuldeep Singh Rajpoot',
publisher: 'R',
formatDetection: {
  email: false,
  address: false,
  telephone: false,
},
}

export default function RootLayout({ children }) {
  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "website",
      "name": "CGPA Average Calculator",
      "alternateName":"Average CGPA"
      ,
       "url":"https://cgpa-average-calculator.vercel.app/",
      "description": "fed up of Asking the formula to calculate cgpa from sgpa , no worries let the app do it for you.",
    
      "brand": {
        "@type": "website",
        "name": "CGPA Average Calculator"
      },
     
        "author": {
          "@type": "Person",
          "name": "Kuldeep Singh Rajpoot"
        }
      
    }
  `,
    };
  }
  return (
    <html lang="en">
      <head>
        
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
