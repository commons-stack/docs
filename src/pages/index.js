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
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Faq {
    faqA: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: { category: { category: { eq: "Commons Stack Overview" } } }
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
        category: {
          category: { eq: "Contributions and Trusted Seed Membership" }
        }
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

    faqC: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: {
        category: { category: { eq: "Augmented Bonding Curve (Iteration 1)" } }
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

    faqD: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: {
        category: { category: { eq: "Conviction Voting (Iteration 3)" } }
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

    faqE: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: { category: { category: { eq: "Token Engineering Design" } } }
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

    faqF: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: {
        category: {
          category: {
            eq: "Commons Stack Component Questions (Iteration 2, 4, 5)"
          }
        }
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

    faqG: allContentfulFaqEntry(
      sort: { fields: [createdAt], order: ASC }
      filter: { category: { category: { eq: "Operating a Commons" } } }
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
