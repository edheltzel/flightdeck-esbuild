/**
 * Button Component – FlightDeck Autopilot
 * @param {Object} [params] - The parameters for the button (all optional)
 * @param {string} [params.type='button'] - The type of button (submit/reset/button)
 * @param {string} [params.text='Button'] - The text to display in the button
 * @param {string} [params.classes='btn'] - The classes to apply to the button (e.g., Tailwind classes)
 * @example {% button type="submit", text="Click Me", classes="btn btn-primary" %}
 */
const button = (params = {}) => {
  const { type = 'button', text = 'Button', classes = 'btn' } = params;
  return `<button class="${classes}" type="${type}">${text}</button>`;
};

/**
 * Button Component for Links – FlightDeck Autopilot
 * @param {Object} [params] - The parameters for the link button (all optional)
 * @param {string} [params.link='/'] - The link to a page or external URL
 * @param {string} [params.text='Button'] - The text to display in the link
 * @param {string} [params.target='_self'] - The target for the link
 * @param {string} [params.classes='btn'] - The classes to apply to the button (e.g., Tailwind classes)
 * @example {% buttonLink link="https://google.com", text="Click Me", target="_blank", classes="btn btn-link" %}
 */
const buttonLink = (params = {}) => {
  const { link = '/', text = 'Button', classes = 'btn', target = '_self' } = params;
  return `<a href="${link}" class="${classes}" target="${target}">${text}</a>`;
};

module.exports = { button, buttonLink };
