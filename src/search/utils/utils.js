

export const getSearchUrlFromParams = (params) => {
    const {q, language, sort} = params;
    return `/search?q=${encodeURIComponent(q)}&language=${language ? language : ''}&sort=${sort ? sort : ''}`
}