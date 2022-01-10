import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Bailey</title>
        <meta name="description" content="Bailey's Website" />
      </Head>

      <main className={"main"}>
        <h1 className={"title"}>
          Salutations fellow earthling &#x1F30D;
        </h1>

        <p className={"description"}>
          Welcome to my website
        </p>

        <div className={"grid"}>
          <section>
            <Link href="/about">
              <h2>
                <a href="/about">About Me</a>
              </h2>
            </Link>
            <p>Who is Bailey? &#x1F469;</p>
          </section>

          <section>
            <h2>Work Experience</h2>
            <p>What Bailey has worked on.</p>
            <h2>Playground</h2>
            <p>Strange personal things I've been working on &#x1F914; &#x1F9EA;</p>
          </section>
            {<Contact/>}
        </div>
      </main>
    </div>
  )
}

function wrappedSection(component) {
  return <section>{component}</section>;
};
