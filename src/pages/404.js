import React from "react";
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <section>
      <article>
        <h1>Broken Shoes?</h1>
        <p>Ask <Link to={"/"}>John Doe</Link> what to do!</p>
      </article>
    </section>
  )
}
