export default function SiteLayout ({ html, state }) {
  const { store } = state
  const { hideFooterIndex = false } = store

  return html`
    <site-container class='pi-2 pi0-lg'>
      <site-header></site-header>
      <slot></slot>
      <site-footer ${hideFooterIndex ? 'hide_index' : ''}></site-footer>
    </site-container>
  `
}
