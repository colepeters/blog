export default function SiteLayout ({ html }) {
  return html`
    <site-container class='pi-2 pi0-lg'>
      <site-header></site-header>
        <slot></slot>
      <site-footer></site-footer>
    </site-container>
  `
}
