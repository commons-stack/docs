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

const ApplyButton = styled.button`
  border: unset;
  border: 2px solid #67de69;
  background-color: #171717;
  color: #a6a6a6;
  border-radius: 45px;
  width: 105px;
  font-size: 18px;
  font-weight: 400;
  justify-self: right;
  padding: 0.5rem 1rem;
  align-self: center;
  a {
    text-decoration: none;
  }
  :hover {
    background-color: white;
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
        <ApplyButton type="button">
          <a href="https://the-commons-stack.typeform.com/to/nG7xc1">Apply</a>
        </ApplyButton>
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
