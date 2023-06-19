export default function BlogContainer({ html }) {
  return html`
      <style>
        :host {
          display: block;
          max-width: 92vw;
          margin-inline: auto;
        }

        @media screen and (min-width: 48em) {
          :host {
            max-width: 68ch;
          }
        }
      </style>

      <slot></slot>
    `
}
