const isDev = process.env.ENV === "development";

const baseUrl = isDev ? `localhost:8080` : `https://google.com/`;
const site = {
  baseUrl,
  title: "The Flightdeck",
  description: "Flightdeck is coming!",
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
