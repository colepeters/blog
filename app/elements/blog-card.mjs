export default function BlogPost({ html, state }) {
  const { attrs, store } = state
  const { key } = attrs
  const { href, frontmatter } = store.posts[key]
  const { description, title } =
    frontmatter
  return html`
    <style>
      :host {
        display: block;
      }

      h1 {
        text-decoration: underline;
        text-decoration-thickness: 0.033em;
        text-underline-offset: 0.075em;
      }

      .avatar {
        width: 40px;
        aspect-ratio: 1 / 1;
      }
    </style>
    <a href="${href}" class="no-underline">
      <article class="pb2">
        <div class="font-body">
          <h1 class="font-heading">${title}</h1>
          <p class="text-1">${description}</p>
        </div>
      </article>
    </a>
  `
}
