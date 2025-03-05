// src/api/project/controllers/project.js
const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async find() {
      try {
        const data = await strapi.entityService.findMany(
          "api::project.project",
          {
            populate: ["image"],
          }
        );
        return data;
      } catch (error) {
        console.log("Fetching all project error:", error);
      }
    },

    async filter(ctx) {
      const query = ctx.request.query || {};

      console.log("QUERY:", query);

      let filters = {};
      let sort = {};

      if (query.published === "newest") {
        sort = { published_at: "desc" };
      } else if (query.published === "oldest") {
        sort = { published_at: "asc" };
      }

      // Fix for query.tab
      const tabValues = Array.isArray(query.tab)
        ? query.tab
        : typeof query.tab === "string"
          ? query.tab.split(",")
          : [];

      const tabFilters = [];
      console.log("Tab Values:", tabValues);

      if (tabValues.includes("saved")) {
        tabFilters.push({ isSaved: true });
      }
      if (tabValues.includes("shared")) {
        tabFilters.push({ isShared: true });
      }
      if (tabValues.includes("achievement")) {
        tabFilters.push({ isAchievement: true });
      }

      if (tabFilters.length > 0) {
        filters.$and = tabFilters;
      }
      console.log("Filters Applied:", JSON.stringify(filters, null, 2));

      if (query.grade) {
        filters.grade = {
          $in:
            typeof query.grade === "string"
              ? query.grade.split(",")
              : query.grade,
        };
      }

      const data = await strapi.entityService.findMany("api::project.project", {
        filters,
        populate: ["image"],
        publicationState: "preview",
      });

      return { data, meta: { total: data.length } };
    },

    async searchData(ctx) {
      console.log("SEARCH IS CALLED");

      const { query } = ctx.request.query;

      console.log("QUERY:", query);

      if (!query) {
        return ctx.badRequest("Query parameter is missing");
      }

      try {
        const results = await strapi.entityService.findMany(
          "api::project.project",
          {
            filters: {
              $or: [
                { title: { $containsi: query } },
                { description: { $containsi: query } },
              ],
            },
            populate: ["image"],
          }
        );

        return { data: results };
      } catch (error) {
        return ctx.internalServerError("Something went wrong", error);
      }
    },
  })
);
