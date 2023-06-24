/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post, mentions } = store
  const { frontmatter } = post
  const { description = '', published = '', title = '' } = frontmatter

  return html`
      <style>
        h1, .date {
          text-align: var(--align-heading);
        }
      </style>
      <site-layout>
        <article class="h-entry font-body mi-auto pb0 pb4-lg">
          <h1 class="p-name font-heading text3 tracking-1 mbe6">${title}</h1>
          <p class='date dt-published text-1 mbe0'>${published}</p>
          <section slot="e-content doc">${post.html}</section>
          <section class="p-summary hidden">${description}</section>
          <my-h-card class="hidden"></my-h-card>
        </article>
        ${mentions?.length ? '<webmentions-list></webmentions-list>' : ''}
      </site-layout>
  `
}
