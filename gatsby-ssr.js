import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    setHeadComponents([
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-{{{GTMのタグを入れる}}}"></script>,
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '{{{GTMのタグを入れる}}}', { 'optimize_id': '{{{Optimizeのタグを入れる}}}'});
          `
        }}
      />
    ])
  }
}

