export default function SiteFooter ({ html, state }) {
  const { attrs } = state
  const hideIndex = Object.keys(attrs).includes('hide_index')

  return html`
    <style>
      footer {
        border-color: hsla(0deg 0% 50% / 0.5);
      }

      a {
        text-decoration-thickness: 1px;
      }
    </style>
    <footer class='pb4 leading5 border-bs1 border-solid'>
      <p class='mbe0'>
        <a rel='me' href='/rss' class='block font-body text-2 uppercase tracking3'>RSS</a>
        <a rel='me' href='https://mastodon.online/@colepeters' class='block font-body text-2 uppercase tracking3'>Mastodon</a>
        <a rel='me' href='https://instagram.com/tiltedspheres' class='block font-body text-2 uppercase tracking3'>Instagram</a>
      </p>
      ${hideIndex ? '' : `
        <p>
          <a href='/' class='font-body mbe0 text-2 uppercase tracking3'>&larr; Index</a>
        </p>
      `}
    </footer>
  `
}
