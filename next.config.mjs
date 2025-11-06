import createMDX from "@next/mdx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Get a relative base path for the website assets when using GitHub Pages.  By default when using GitHub Pages, this appends the repo name. This is an empty string for local development and when the main repository has a custom domain.
 * - This works with environment variables that are set in the "Build with Next.js" step in GitHub Actions.
 *   - GITHUB_ACTIONS: Whether the app is running in a GitHub Actions environment.
 *   - GITHUB_REPOSITORY: The repository name in the format "owner/repo".
 * @param {boolean} mainRepoCustomDomain - Whether the main repository uses a custom domain. If true, the base path will be an empty string.
 * @param {string} mainRepositoryName - The name of the main repository, in the format "owner/repo".
 * @param {string} mainRepoCustomDomain - Whether the main repository uses a custom domain. If true, the base path will be an empty string.
 * @returns {string} - The base path for the application.
 */
function getBasePath(
  mainRepoCustomDomain = false,
  mainRepoName = "openfresno/fe-openfresno.org-doc",
) {
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  const isMainRepo = process.env.GITHUB_REPOSITORY === mainRepoName;
  if (isGitHubActions) {
    if (isMainRepo && mainRepoCustomDomain) {
      return "";
    } else {
      return `/${mainRepoName.split("/")[1]}`;
    }
  } else {
    return "";
  }
}

const basePath = getBasePath();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactCompiler: true,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
