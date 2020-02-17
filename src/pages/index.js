import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchBar from "../components/SearchBar"

import Faq from "../components/faq"

const IndexPage = ({ data }) => {
  const jsonObject = JSON.parse(data.search.store)
  console.log(jsonObject)
  return (
    <Layout>
      <SEO title="The Commons Stack Docs" />
      <h1>Frequently Asked Questions</h1>
      <SearchBar index={data.search.index} store={jsonObject} />
      <Faq data={data.faq.edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Faq {
    faq: allContentfulFaqEntry(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          linkId
          createdAt
          question
          answer {
            json
          }
        }
      }
    }
    search: localSearchFaq {
      index
      store
    }
  }
`
