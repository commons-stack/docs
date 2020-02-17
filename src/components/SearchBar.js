import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useFlexSearch } from "react-use-flexsearch"
import { Formik, Form, Field } from "formik"

const SearchBar = ({ index, store }) => {
  console.log(store)

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
          <Field name="query" />
        </Form>
      </Formik>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>{documentToReactComponents(result.body)}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
