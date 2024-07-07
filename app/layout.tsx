import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "GPTuesday",
  description: "AI weekly meetups in Miami. Join us to learn about the latest in AI and machine learning!",
  icons: {
    icon: "/images/favicon.png"
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`} />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}');
            `}
          </Script>
      </head>
      <body className={montserrat.className}>{children}
      <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
