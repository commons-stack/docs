/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

import backgroundImageSwirl from "../images/Blend_Group_31.svg"
import backgroundImageWave from "../images/Vector1.svg"

const All = styled.div`
  background-image: url(${backgroundImageSwirl});
  background-repeat: no-repeat;
`

const Background = styled.div`
  background-image: url(${backgroundImageWave});
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100vw;
`
const Content = styled.div`
  position: unset;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  padding-top: 10vh;
  font-size: 14px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <All>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Content style={{}}>
        <main>{children}</main>
        <Background />
        <Footer>
          Copyright © {new Date().getFullYear()}
          {` `}
          <a href="https://www.commonsstack.org">The Commons Stack.</a>
          {` `}
          All rights reserved.
        </Footer>
      </Content>
    </All>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
