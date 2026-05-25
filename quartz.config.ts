import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Straight Sauce - DJ",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "plausible" },
    locale: "en-US",
    baseUrl: "dinj-dj.github.io/quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#050505",
          lightgray: "#131225",
          gray: "#5a4ea3",
          darkgray: "#f4f4f4",
          dark: "#f4f4f4",
          secondary: "#8b7cff",
          tertiary: "#6f5cff",
          highlight: "rgba(139,124,255,0.08)",
          textHighlight: "#8b7cff",
        },
        darkMode: {
          light: "#050505",
          lightgray: "#131225",
          gray: "#5a4ea3",
          darkgray: "#f4f4f4",
          dark: "#f4f4f4",
          secondary: "#8b7cff",
          tertiary: "#6f5cff",
          highlight: "rgba(139,124,255,0.08)",
          textHighlight: "#8b7cff",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-dark", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}
export default config