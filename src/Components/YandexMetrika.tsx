"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ym, { YMInitializer } from "react-yandex-metrika";
import Script from "next/script";

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym("hit", url);
  }, [pathname, searchParams]);

  return (
    <>
      <YMInitializer
        accounts={[parseInt(process.env.NEXT_PUBLIC_YANDEX_METRIKA!)]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Script id="metrika-counter" strategy="afterInteractive" defer>
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(${process.env.NEXT_PUBLIC_YANDEX_METRIKA}, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
      </Script>
    </>
  );
}
