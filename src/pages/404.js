import React from "react"
import { Link } from "gatsby"
import Layout from "../styles/Layout"
import { Photo } from "../components/Photo/Photo"
import img from "../img/404.jpg"

export default function NotFound() {

  React.useEffect(() => {
    document.title = `Broken Shoes?`
  })

  return (
    <Layout>
      <Photo
        img={img}
        position={'80% 0'} />
      <article>
        <main>
          <h1>Broken Shoes?</h1>
          <p>Ask <Link to={"/"}>John Doe</Link> what to do!</p>
        </main>
      </article>
    </Layout>
  )
}
