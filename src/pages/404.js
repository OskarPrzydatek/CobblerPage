import React from "react"
import { Link } from "gatsby"
import Layout from "../styles/Layout"

export default function NotFound() {

  React.useEffect(() => {
    document.title = `Broken Shoes?`
  })

  return (
    <Layout>
      <div className="photo" />
      <article>
        <main>
          <h1>Broken Shoes?</h1>
          <p>Ask <Link to={"/"}>John Doe</Link> what to do!</p>
        </main>
      </article>
    </Layout>
  )
}
