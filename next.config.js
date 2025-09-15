const createMDX = require("@next/mdx");
const path = require("path");

// Make images work with relative GH Pages URLS.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// Only set basePath if it is on GitHub Pages.
const basePath = isGitHubActions ? "/fe-openfresno.org-doc" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);
