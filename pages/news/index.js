import Link from "next/link"
import { Fragment } from "react"



function NewsPage() {
  

    return (
      <Fragment>
      <h1>This is News page</h1>
      <ul>
        <li><Link href='/news/nextjs'>Nextjs is interesting</Link></li>
        <li><Link href='/news/something'>Learn Nextjs</Link></li>
      </ul>
      </Fragment>
    )
  }
  export default NewsPage