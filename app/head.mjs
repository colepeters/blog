import { getLinkTag } from '@enhance/arc-plugin-styles/get-styles'

export default function Head(state) {
  const baseTitle = 'A thin mantle of ash'
  const { req, store } = state

  let meta = {}

  if (req.path.includes('posts/')) {
    meta.title = `${store.post.frontmatter.title} — ${baseTitle}`
    meta.description = store.post.frontmatter.description
  } else {
    meta.title = `${baseTitle}`
    meta.description = 'A personal weblog by Cole Peters'
  }

  const siteUrl = process.env.SITE_URL || 'http://localhost:3333'

  return`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <title>${meta.title}</title>
        <meta name='description' content='${meta.description}' />
        ${getLinkTag()}
        <link rel='stylesheet' href='/_public/css/global.css' />
        <link rel='webmention' href='${siteUrl}/webmention' />
        <link href='https://colepeters.com' rel='me' />
        <link href='https://mastodon.online/@colepeters' rel='me' />
        <link href='https://instagram.com/titledspheres' rel='me' />
        <style>
          @font-face {
            font-family: EB Garamond;
            src: url('/_public/fonts/EBGaramond12-Regular.woff') format('woff');
            font-weight: 400;
          }
          
          @font-face {
            font-family: EB Garamond;
            src: url('/_public/fonts/EBGaramond12-Italic.woff') format('woff');
            font-weight: 400;
            font-style: italic;
          }
        </style>
      </head>
  `
}
