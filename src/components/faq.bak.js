import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import Button from '../components/button'

import { colors } from '../utils/presets'

const ContentContainer = styled.div`
  padding: 20vh 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;

  a {
    color: ${colors.highlight};
  }
`
const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(320px 1fr) minmax(320px 1fr);
  grid-template-rows: repeat(5, auto);
  padding-bottom: 5rem;
  justify-self: center;

  @media (max-width: 990px) {
    grid-gap: 0.5rem;
    justify-items: center;
    grid-template-columns: minmax(320px 1fr);
  }
`

const Headline1 = styled.h1`
  grid-column: span 2;
  justify-self: start;
  align-self: end;
  padding: 0 2rem;
  @media (max-width: 990px) {
    font-size: 1.5rem;
    grid-column: span 1;
  }
`
const Headline2 = styled.h2`
  grid-column: span 2;
  justify-self: start;
  align-self: start;
  padding-bottom: 2rem;
  padding: 0 2rem 2rem 2rem;
  @media (max-width: 990px) {
    font-size: 1.5rem;
    grid-column: span 1;
  }
`

const HeadlineFaq = styled.h1`
  color: black;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 20px;
  margin-bottom: 1rem;
  background-color: ${colors.highlight};
  max-width: 80vw;
  margin: 2rem auto;
  @media (max-width: 990px) {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
  }
`

const MainText1 = styled.div`
  color: ${colors.dark};
  grid-column: 1;
  justify-self: center;
  margin: 0;
  padding: 2rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    justify-self: center;
    grid-column: span 1;
  }
`

const MainText2 = styled.div`
  color: ${colors.dark};
  grid-column: 2;
  max-width: 500px;
  justify-self: start;
  margin: 0;
  padding: 2rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 1fr;
    justify-self: center;
    grid-column: 1 / span 1;
  }
`

const ItemContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 2rem;
  justify-items: center;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`

const DonationContainer = styled.div`
  grid-column: span 2;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem 2rem;
  justify-content: center;
  text-align: center;
  max-width: 80vw;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-column: 1 / span 1;
    padding: 0;
  }

  p {
    margin: 0;
  }
`

const ContentItem = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-self: center;
  background: #e4d1d9;
  border-radius: 10px;
  background-position: center;
  background-attachment: fixed;
  color: black;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.5rem;
  border: 2px solid #00000000;
  @media (max-width: 990px) {
    justify-items: center;
    justify-self: center;
    max-width: 80vw;
    grid-gap: 0;
  }

  :hover {
    background-color: #00000000;
    border: 2px solid ${colors.highlight};
  }

  .Collapsible__trigger {
    :hover {
      cursor: pointer;
    }
  }
`

const LongDescription = styled.div`
  max-width: 500px;
  justify-self: center;
  margin: 0;
  padding: 2rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    max-width: 1fr;
  }
`

const AddressHeadline = styled.p``

const Wrap = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  color: ${colors.highlight};

  @media (max-width: 990px) {
    text-overflow: ellipsis;
    max-width: 30vw;
  }

  @media (max-width: 650px) {
    text-overflow: ellipsis;
    max-width: 220px;
  }
`

const ButtonContainer = styled.div`
  padding: 3rem 1rem 1rem 1rem;
  grid-column: span 3;
  text-align: center;

  @media (max-width: 990px) {
    grid-column: span 1;
  }
`

const Faq = ({ headerdata, data, backgroundimage }) => (
  <ContentContainer>
    <ContentHeader>
      <Headline1>{headerdata.node.headline1}</Headline1>
      <Headline2>{headerdata.node.headline2}</Headline2>

      <MainText1
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText.childMarkdownRemark.html,
        }}
      />
      <MainText2
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText2.childMarkdownRemark.html,
        }}
      />
      <ButtonContainer>
        <a
          href="https://beta.giveth.io/dacs/5b37da13a239ac21b383d4da"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button primary>Donate with the Giveth DApp</Button>
        </a>
      </ButtonContainer>
      <DonationContainer>
        <ContentItem>
          <a
            href="https://www.mycrypto.com/?to=0x8f951903c9360345b4e1b536c7f5ae8f88a64e79#send-transaction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate ETH or DAI via MyCrypto
          </a>
        </ContentItem>
        <ContentItem>
          <a
            href="https://leaderboard.giveth.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our Leaderboard and use MetaMask
          </a>
        </ContentItem>
        <ContentItem>
          <AddressHeadline>
            Send directly to our multisig address:
          </AddressHeadline>
          <Wrap>0x8f951903c9360345b4e1b536c7f5ae8f88a64e79</Wrap>
        </ContentItem>
      </DonationContainer>
    </ContentHeader>
    <HeadlineFaq>FAQ</HeadlineFaq>
    <ItemContainer>
      {data.map(edges => (
        <ContentItem key={edges.node.id}>
          <Collapsible trigger={edges.node.headline}>
            <LongDescription
              dangerouslySetInnerHTML={{
                __html: edges.node.contentText.childMarkdownRemark.html,
              }}
            />
          </Collapsible>
        </ContentItem>
      ))}
    </ItemContainer>
  </ContentContainer>
)

export default Faq