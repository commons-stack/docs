import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Faq from "../components/faq"

const Section = styled.h1`
  text-align: center;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="The Commons Stack Docs" />
      <Section>Frequently Asked Questions</Section>
      <Faq data={data.faqA.edges} />
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
  }
`
