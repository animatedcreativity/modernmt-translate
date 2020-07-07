exports = module.exports = function() {
  return {
    link: "https://api.modernmt.com",
    key: "", // Get an API key here: https://www.modernmt.com/pricing/
    // if you want to use modernmt-translate-server: https://www.npmjs.com/package/modernmt-translate-server
    server: {
      use: false,
      link: "https://<your_server_name>/translate",
      authorization: "<your_server_authorization_key>", // Lowercase
    },
    offline: {
      use: false,
      database: "database/translations"
    }
  };
};