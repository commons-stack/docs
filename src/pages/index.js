import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Faq from "../components/faq"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Commons Stack FAQ' />
      <Faq data={data.faqA.edges} isopen />
      <Faq data={data.faqB.edges} isopen />
      <Faq data={data.faqC.edges} isopen />
      <Faq data={data.faqD.edges} isopen />
      <Faq data={data.faqE.edges} isopen />
      <Faq data={data.faqF.edges} isopen />
      <Faq data={data.faqG.edges} isopen />
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
      filter: { category: { category: { eq: "Augmented Bonding Curve" } } }
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
      filter: { category: { category: { eq: "Conviction Voting" } } }
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
