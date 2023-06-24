import { getLinkTag } from '@enhance/arc-plugin-styles/get-styles'

export default function Head() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3333'
  return`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>Monotonous Processes</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        ${getLinkTag()}
        <link rel='stylesheet' href='/_public/css/global.css' />
        <link rel='webmention' href='${siteUrl}/webmention'>
        <link href='https://colepeters.com' rel='me'>
        <link href='https://mastodon.online/@colepeters' rel='me'>
        <link href='https://instagram.com/titledspheres' rel='me'>
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
