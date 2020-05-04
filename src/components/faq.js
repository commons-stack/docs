import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Collapsible from "react-collapsible"

import ShareButton from "./ShareButton"

const ContentContainer = styled.div`
  display: grid;
  padding: 3rem 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  color: #67de69;
`

const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-self: center;
  background-position: center;
  background-attachment: fixed;
  background-color: #17171766;
  color: white;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin: 0.5rem;
  border: 5px solid #17171766;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 990px) {
    justify-items: center;
    justify-self: center;
    max-width: 80vw;
    grid-gap: 0;
  }

  h2 {
    margin: 0;
    padding: 0.5rem;
    color: #67de69;
  }
  .Collapsible__trigger {
    :hover {
      cursor: pointer;
    }
  }

  .Collapsible__contentInner {
    background: #17171766;
    color: white;
  }
`

const LongDescription = styled.div`
  justify-self: center;
  margin: 0;
  padding: 2rem;
  @media (max-width: 990px) {
    max-width: 1fr;
  }
`

const Category = styled.h2`
  color: white;
`

const Faq = ({ data }) => {
  const hash = (typeof window !== "undefined" && window.location.hash) || ""
  console.log(hash)
  return (
    <ContentContainer>
      <Category>{data[0].node.category.category}</Category>
      {data.map(edges => (
        <ContentItem id={edges.node.linkId} key={edges.node.id}>
          {hash === `#${edges.node.linkId}` ? (
            <Collapsible
              trigger={
                <span>
                  <h2>{edges.node.question}</h2>
                </span>
              }
              open={true}
            >
              <LongDescription>
                {documentToReactComponents(edges.node.answer.json)}
              </LongDescription>
              <ShareButton data={edges.node.linkId} />
            </Collapsible>
          ) : (
            <Collapsible
              trigger={
                <span>
                  <h2>{edges.node.question}</h2>
                </span>
              }
              open={false}
            >
              <LongDescription>
                {documentToReactComponents(edges.node.answer.json)}
              </LongDescription>
              <ShareButton data={edges.node.linkId} />
            </Collapsible>
          )}
        </ContentItem>
      ))}
    </ContentContainer>
  )
}

export default Faq
