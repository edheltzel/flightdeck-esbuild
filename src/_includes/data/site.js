const isDev = process.env.ENV === "development";

const baseUrl = isDev ? "localhost:8080" : "https://github.com"; // your website url goes here
const site = {
  baseUrl,
  title: "‍🚀 Flightdeck",
  description: "prepare for takeoff",
  authorName: "Ed Heltzel",
  social: [
    {
      name: "Github",
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
