const isProd = process.env.ENVIRONMENT === "prod";
const baseUrl = isProd ? `https://google.com/` : `http://localhost:8080/`;

const site = {
  baseUrl,
  title: "Flightdeck",
  description: "🚀 An opinionated Jamstack starter project for Eleventy.",
  authorName: "Ed Heltzel",
  social: [
    {
      name: "Twitter",
      profile: "edheltzel",
    },
    {
      name: "Github",
      profile: "edheltzel",
    },
    {
      name: "Facebook",
      profile: "edheltzel",
    },
    {
      name: "LinkedIn",
      profile: "edheltzel",
    },
    {
      name: "Instagram",
      profile: "edheltzel",
    },
  ],
};

module.exports = site;
