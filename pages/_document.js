import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet" />  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" strategy="beforeInteractive"    async  />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="beforeInteractive"    async  />
        
      </Head>
      <body>
        <Main />
        <NextScript />
        


      </body>
    </Html>
  )
}
