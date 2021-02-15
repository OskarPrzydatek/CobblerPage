import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Layout from "../styles/Layout"


export default function Home() {

  React.useEffect(() => {
    document.title = `John Doe - The London Cobbler`
  })

  return (
    <Layout>
      <div />
      <article>
        <main>
          <h1>John Doe</h1>
          <p>The London Cobbler Since 1990</p>
          <NavBar />
        </main>
      </article>
    </Layout>
  )
}
