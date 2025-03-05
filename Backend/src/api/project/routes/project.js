module.exports = {
  routes: [
    {
      method: "GET",
      path: "/project/all",
      handler: "project.find",
      config: {
        auth: false, // This disables authentication for this route
      },
    },
    {
      method: "GET",
      path: "/project/filter",
      handler: "project.filter",
      config: {
        auth: false, // This disables authentication for this route
      },
    },
    {
      method: "GET",
      path: "/project/search",
      handler: "project.searchData",
      config: {
        auth: false, // This disables authentication for this route
      },
    },
  ],
};
