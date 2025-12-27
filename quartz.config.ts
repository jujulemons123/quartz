import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {}, // Keeps footer clean of GitHub/Discord links
  }),
}

// components for single notes (Home page and Archive notes)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false, showComma: false }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    // Added "Why lists?" link directly under the Page Title
    Component.Html({
      html: `
        <div style="margin-top: -1.5rem; margin-bottom: 2rem;">
          <a style="font-style: italic; font-size: 0.9rem; color: var(--secondary); text-decoration: none;" href="./Why-lists">Why lists?</a>
        </div>
      `
    }),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for folder/list pages (like /The-lists/)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta({ showReadingTime: false, showComma: false })
  ],
  left: [
    Component.PageTitle(),
    // Keep the link consistent on list pages too
    Component.Html({
      html: `
        <div style="margin-top: -1.5rem; margin-bottom: 2rem;">
          <a style="font-style: italic; font-size: 0.9rem; color: var(--secondary); text-decoration: none;" href="./Why-lists">Why lists?</a>
        </div>
      `
    }),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [],
}