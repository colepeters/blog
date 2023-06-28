export default function SiteHeader ({ html }) {
  return html`
    <style>
      h1, p {
        text-align: var(--align-heading);
      }

      h1:after {
        content: '';
        background-image: url('/_public/favicon.png');
        background-size: contain;
        position: absolute;
        aspect-ratio: 1 / 1;
        inline-size: 2.5em;
        inset-block-start: 2.25em;
        inset-inline-start: -1.75em;
      }

    </style>
    <header>
      <a href='/' class='no-underline'>
        <h1 class='font-heading pbs4 pbe-3 relative inline-block'>
          A thin mantle of ash
        </h1>
        <p class='font-body italic text-1 pbe4'>
          A personal weblog by Cole Peters
        </p>
      </a>
    </header>
  `
}
