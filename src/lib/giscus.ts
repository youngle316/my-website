const giscusRepo = process.env.NEXT_PUBLIC_GISCUS_REPO as 'string/string';
const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID as string;
const giscusCategory = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

export { giscusRepo, giscusRepoId, giscusCategory, giscusCategoryId };
