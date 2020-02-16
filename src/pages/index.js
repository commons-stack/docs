import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Faq from "../components/faq"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="The Commons Stack Docs" />
    <h1>Frequently Asked Questions</h1>
    <Faq data={data.faq.edges} />
  </Layout>
)

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
          childContentfulFaqEntryAnswerRichTextNode {
            json
          }
        }
      }
    }
  }
`
