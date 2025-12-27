import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "JGW's Archive",
    enableGPA: false,
    enablePageViews: false,
    defaultDateType: "created",
    generateSocialImages: false,
    baseUrl: "jujulemons123.github.io/quartz",
    ignorePatterns: [], 
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cormorant Garamond", // Restored per your request
        body: "Lustria",             // Restored per your request
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFDE7",          // Your exact background
          lightgray: "#C5C2A5",      
          gray: "#979690",
          darkgray: "#4A3728",
          dark: "#1B2620",
          secondary: "#8B0000",      // Your exact red
          tertiary: "#225C59",
          highlight: "rgba(139, 0, 0, 0.05)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Popovers(), // Fixed: keeps build green
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        showFolderTitle: false, 
        showFolderCount: false, 
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config