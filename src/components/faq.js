import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Collapsible from "react-collapsible"

const ContentContainer = styled.div`
  padding: 20vh 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;

  a {
    color: powderblue;
  }
`

const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-self: center;
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

  .Collapsible__trigger {
    :hover {
      cursor: pointer;
    }
  }
`

const LongDescription = styled.div`
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

const Faq = ({ data }) => {
  return (
    <ContentContainer>
      {data.map(edges => (
        <ContentItem id={edges.node.linkId} key={edges.node.id}>
          <Collapsible trigger={edges.node.question}>
            <LongDescription>
              {documentToReactComponents(edges.node.answer.json)}
            </LongDescription>
          </Collapsible>
        </ContentItem>
      ))}
    </ContentContainer>
  )
}

export default Faq
