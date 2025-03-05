import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchProjects = async () => {
  try {
    const response = await api.get(`/api/project/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const searchProjects = async (query) => {
  try {
    const response = await api.get(`/api/project/search`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching projects:", error);
    throw error;
  }
};

const filterProjects = async (query) => {
  try {
    const { tab, published, grade } = query;
    const safeTab = Array.isArray(tab) ? tab : tab ? [tab] : undefined;
    const safeGrade = Array.isArray(grade)
      ? grade
      : grade
      ? [grade]
      : undefined;

    const response = await api.get(`/api/project/filter`, {
      params: {
        tab: safeTab?.length ? safeTab.join(",") : undefined,
        grade: safeGrade?.length ? safeGrade.join(",") : undefined,
        published,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error filtering projects:", error);
  }
};

export { fetchProjects, searchProjects, filterProjects };
