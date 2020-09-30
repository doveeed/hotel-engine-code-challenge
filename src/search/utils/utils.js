export const getSearchUrlFromParams = (params) => {
  const { q, language, sort, page, pageSize } = params;
  return `/search?q=${encodeURIComponent(q)}&language=${
    language ? language : ""
  }&sort=${sort ? sort : ""}&page=${page ? page : "1"}&per_page=${
    pageSize ? pageSize : "30"
  }`;
};
