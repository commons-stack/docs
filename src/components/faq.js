import React, { useState, useEffect } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import styled from "styled-components"
import Collapsible from "react-collapsible"

import ShareButton from "./ShareButton"

import DownArrow from "../images/down-arrow.svg"

const ContentContainer = styled.div`
  display: grid;
  padding: 0.5rem 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  color: #67de69;
  @media (max-width: 512px) {
    max-width: 80vw;
  }
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
  cursor: pointer;

  :hover {
    color: #278194;
  }
`

const Question = styled.h2`
  font-size: 1.2rem;

  :hover {
    color: #278194;
  }
`
const QuestionSpan = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
  cursor: pointer;
  align-items: center;
`

const ArrowDown = styled.img`
  justify-self: end;
  height: 15px;
  margin: 0.5rem;
  padding: 0.1rem;
`

const ArrowUp = styled.img`
  justify-self: end;
  transform: rotate(180deg);
  height: 15px;
  margin: 0.5rem;
  padding: 0.1rem;
`

const Faq = ({ data, isopen }) => {
  const [hash, setHash] = useState("")

  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, description, file } = node.data.target.fields
        const mimeType = file["en-US"].contentType
        const mimeGroup = mimeType.split("/")[0]

        switch (mimeGroup) {
          case "image":
            return (
              <img
                title={title ? title["en-US"] : null}
                alt={description ? description["en-US"] : null}
                src={file["en-US"].url}
              />
            )
          case "application":
            return (
              <a
                alt={description ? description["en-US"] : null}
                href={file["en-US"].url}
              >
                {title ? title["en-US"] : file["en-US"].details.fileName}
              </a>
            )
          default:
            return (
              <span style={{ backgroundColor: "black", color: "white" }}>
                {" "}
                {mimeType} embedded asset{" "}
              </span>
            )
        }
      },
    },
  }

  useEffect(() => {
    setHash((typeof window !== "undefined" && window.location.hash) || "")
    console.log(hash)
  }, [hash])

  return (
    <ContentContainer>
      <Collapsible
        trigger={
          <QuestionSpan>
            <Category>{data[0].node.category.category}</Category>
            <ArrowDown src={DownArrow} />
          </QuestionSpan>
        }
        triggerWhenOpen={
          <QuestionSpan>
            <Category>{data[0].node.category.category}</Category>
            <ArrowUp src={DownArrow} />
          </QuestionSpan>
        }
        open={isopen}
      >
        {data.map(edges => (
          <ContentItem id={edges.node.linkId} key={edges.node.id}>
            {hash === `#${edges.node.linkId}` ? (
              <Collapsible
                trigger={
                  <QuestionSpan>
                    <Question>{edges.node.question}</Question>
                    <ArrowDown src={DownArrow} />
                  </QuestionSpan>
                }
                triggerWhenOpen={
                  <QuestionSpan>
                    <Question>{edges.node.question}</Question>
                    <ArrowUp src={DownArrow} />
                  </QuestionSpan>
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
                  <QuestionSpan>
                    <Question>{edges.node.question}</Question>
                    <ArrowDown src={DownArrow} />
                  </QuestionSpan>
                }
                triggerWhenOpen={
                  <QuestionSpan>
                    <Question>{edges.node.question}</Question>
                    <ArrowUp src={DownArrow} />
                  </QuestionSpan>
                }
                open={false}
              >
                <LongDescription>
                  {documentToReactComponents(
                    edges.node.answer.json,
                    richTextOptions
                  )}
                </LongDescription>
                <ShareButton data={edges.node.linkId} />
              </Collapsible>
            )}
          </ContentItem>
        ))}
      </Collapsible>
    </ContentContainer>
  )
}

export default Faq
