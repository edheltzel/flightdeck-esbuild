/**
 * Codepen Embeds - ref: https://blog.codepen.io/documentation/embedded-pens/
 * @param {Object} params - The parameters for the Codepen embed
 * @param {string} params.penUrl - Codepen full URL
 * @param {number} [params.height=300] - Height of the embed in pixels
 * @param {string} [params.tabs='result'] - Tabs to show (e.g., 'html', 'html,result', 'css', 'css,result', 'js', 'js,result')
 * @param {string} [params.theme=''] - Theme ID ('light', 'dark', or custom theme ID for pro users)
 * @example {% codepen penUrl="https://codepen.io/jacobberglund/pen/bwrGvx", height=900, tabs="css,result", theme="178" %}
 */

module.exports = (params) => {
  const {
    penUrl,
    height = 300,
    tabs = "result",
    theme = ""
  } = params;

  if (!penUrl) {
    throw new Error("penUrl is required for the Codepen embed");
  }

  const splitUrl = penUrl.split("/");
  const splitProfileUrl = splitUrl.slice(0, -2);
  const userProfile = splitProfileUrl.join("/");
  const slugHash = splitUrl[splitUrl.length - 1];
  const userName = splitProfileUrl[splitProfileUrl.length - 1];

  return `
    <p class="codepen"
      data-height="${height}"
      data-theme-id="${theme}"
      data-default-tab="${tabs}"
      data-slug-hash="${slugHash}"
      data-user="${userName}"
    >
      <span>
        <a href="${penUrl}">See the pen</a>
        (<a href="${userProfile}">@${userName}</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
    <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
};
