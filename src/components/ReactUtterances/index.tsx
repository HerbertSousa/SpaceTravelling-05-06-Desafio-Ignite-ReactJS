export const Comments: React.FC = () => (
  <div
    ref={elem => {
      if (!elem || elem.childNodes.length) {
        return;
      }
      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.async = true;
      scriptElem.crossOrigin = 'anonymous';
      scriptElem.setAttribute('repo', 'HerbertSousa/comentarios');
      scriptElem.setAttribute('issue-term', 'pathname');
      scriptElem.setAttribute('label', 'blog-comment');
      scriptElem.setAttribute('theme', 'github-light');
      elem.appendChild(scriptElem);
    }}
  />
);
