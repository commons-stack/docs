import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Faq from "../components/faq"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="The Commons Stack Docs" />
      <Faq data={data.faqA.edges} />
      <Faq data={data.faqB.edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Faq {
    faqA: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: {
        category: { category: { eq: "Commons Stack Overview Questions" } }
      }
    ) {
      edges {
        node {
          id
          linkId
          createdAt
          question
          answer {
            json
          }
          category {
            id
            category
          }
        }
      }
    }
    search: localSearchFaq {
      index
      store
    }

    faqB: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: {
        category: { category: { eq: "Commons Stack Core Components" } }
      }
    ) {
      edges {
        node {
          id
          linkId
          createdAt
          question
          answer {
            json
          }
          category {
            id
            category
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
