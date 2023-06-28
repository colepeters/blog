export default function SiteHeader ({ html }) {
  return html`
    <style>
      h1, p {
        text-align: var(--align-heading);
      }
    </style>
    <header>
      <a href='/' class='no-underline'>
        <h1 class='font-heading pbs4 pbe-3'>
          A thin mantle of ash
        </h1>
        <p class='font-body italic text-1 pbe4'>
          A personal weblog by Cole Peters
        </p>
      </a>
    </header>
  `
}
