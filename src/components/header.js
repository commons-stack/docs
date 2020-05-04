import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import SearchBar from "../components/SearchBar"

import logo from "../images/commonsstack-typelogo.svg"

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

const SearchContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5rem 0;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`

const Logo = styled.img``
const Title = styled.h2`
  justify-self: center;
  align-self: center;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteSearchQuery {
      search: localSearchFaq {
        index
        store
      }
    }
  `)
  const jsonObject = JSON.parse(data.search.store)
  return (
    <header
      style={{
        background: `#17171766`,
        marginBottom: `1.45rem`,
      }}
    >
      <HeaderContainer
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <a href="https://commonsstack.org">
          <Logo src={logo} />
        </a>
        <Title style={{ margin: "0, auto", textAlign: `center` }}>
          <Link
            to="/"
            style={{
              color: `#fff`,
              textDecoration: `none`,
            }}
          >
            Frequently Asked Questions
          </Link>
        </Title>
      </HeaderContainer>
      <SearchContainer>
        <SearchBar index={data.search.index} store={jsonObject} />
      </SearchContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
