import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"
import { ExternalFeedProvider } from "../../app/lib/feed/useExternalFeeds"

export const BlogLayout = ({ children, pageContext = {} }) => {
  // @ts-ignore
  const feeds = pageContext.globals.feeds
  return (
    <ExternalFeedProvider feeds={feeds}>
      <TagProvider>
        <Layout>{children}</Layout>
      </TagProvider>
    </ExternalFeedProvider>
  )
}
