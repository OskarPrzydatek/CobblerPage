import React from "react"
import NavBar from "../components/NavBar/NavBar"

export default function Home() {

  React.useEffect(() => {
    document.title = `John Doe - The London Cobbler`
  })

  return (
    <section>
      <article>
        <main>
          <h1>John Doe</h1>
          <p>The London Cobbler Since 1990</p>
        </main>
        {/*<nav>
          <ul>
            <li><Link to={"/services"}>Services</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </nav>*/}
        <NavBar />
      </article>
    </section>
  )
}
