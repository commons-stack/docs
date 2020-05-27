import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useFlexSearch } from "react-use-flexsearch"
import { Formik, Form, Field } from "formik"
import styled from "styled-components"

const FormikContainer = styled.div`
  form {
    display: flex;
  }
`

const StyledField = styled(Field)`
  border: unset;
  border: 2px solid #67de69;
  background-color: #171717;
  color: #a6a6a6;
  border-radius: 45px;
  padding: 0.5rem;
  width: 100%;
  margin: 0 auto;
  justify-self: center;
`

const Results = styled.div`
  grid-template-rows: auto;

  & li {
    padding-right: 1rem;
  }
`

const SearchBar = ({ index, store }) => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, index, store)

  return (
    <FormikContainer className="activestyle">
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
        className="activestyle"
      >
        <Form className="activestyle">
          <StyledField
            name="query"
            placeholder="Search"
            className="activestyle"
          />
        </Form>
      </Formik>
      {query ? (
        <Results>
          <h1>Results</h1>
          {results.length === 0 ? (
            <div>
              <p> "Couldn't find the answer to your question?</p>
              <p>
                Join our community and ask away!{" "}
                <a href="https://t.me/commonsstack">t.me/commonsstack</a>
              </p>
            </div>
          ) : (
            <ol>
              {results.map(result => (
                <li key={result.id}>
                  <h2>{result.title}</h2>
                  {documentToReactComponents(result.body)}
                </li>
              ))}
            </ol>
          )}
        </Results>
      ) : null}
    </FormikContainer>
  )
}

export default SearchBar
