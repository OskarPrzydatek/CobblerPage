import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <section>
      <nav>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <article>
        <header>
          <h1>John Doe</h1>
          <p>The London Cobbler Since 1990</p>
        </header>
      </article>
    </section>
  )
}
