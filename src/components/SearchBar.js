import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useFlexSearch } from "react-use-flexsearch"
import { Formik, Form, Field } from "formik"
import styled from "styled-components"

const StyledField = styled(Field)`
  background-color: #171717;
  color: #a6a6a6;
  border-color: #67de69;
  border-radius: 45px;
  padding: 0.5rem;
  min-width: 100%;
`

const Results = styled.div`
  grid-template-rows: auto;
`

const SearchBar = ({ index, store }) => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, index, store)

  return (
    <div>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form>
          <StyledField name="query" placeholder="Search" />
        </Form>
      </Formik>
      {query ? (
        <Results>
          <h1>Results</h1>
          {results.length === 0 ? (
            <p>No Results</p>
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
    </div>
  )
}

export default SearchBar
