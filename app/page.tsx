import Image from "next/image";
import { EmailLink } from "./email-link";

export default function Home() {
  return (
    <main>
      <h1>Angels Makuwerere</h1>

      <Image
        className="profile-image"
        src="https://avatars.githubusercontent.com/u/37082400?v=4&s=280"
        width={140}
        height={140}
        alt="Angels Makuwerere"
        priority
      />

      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://github.com/angelsplato">@angelsplato</a> on GitHub
        </li>
        <li>
          <a href="https://www.linkedin.com/in/angelsmakuwerere">
            Angels Makuwerere
          </a>{" "}
          on LinkedIn
        </li>
        <li>
          <EmailLink />
        </li>
      </ul>

      <h2>Interests</h2>
      <p>
        I love to build. Most of my work has been backend systems — payments,
        APIs, and the unglamorous infrastructure that has to stay up. I
        sometimes also tinker with models and notebooks.
      </p>

      <h2>Projects</h2>
      <ul>
        <li>
          I&apos;m a software engineer at{" "}
          <a href="https://entelect.co.za">Entelect</a>, working on
          large-scale applications for clients from Johannesburg and further
          afield. I joined in 2022.
        </li>
        <li>
          I previously built software at{" "}
          <a href="https://zimswitch.co.zw">Zimswitch</a>, Zimbabwe&apos;s
          national electronic funds switch and clearing house.
        </li>
        <li>
          Before that I was a software developer at{" "}
          <a href="https://www.linkedin.com/company/afrosoft-holdings-limited">
            Afrosoft Holdings
          </a>
          .
        </li>
        <li>
          <a href="https://github.com/angelsplato/scam-ad-watch">
            Scam Ad Watch
          </a>
          : a Python tool that watches the Meta Ad Library and flags suspicious
          URLs.
        </li>
        <li>
          <a href="https://github.com/angelsplato/Mental-Health-First">
            Mental Health First
          </a>
          : a Java project for publishing first-person stories from people
          living with mental illness, their families, and the therapists who
          work with them.
        </li>
        <li>
          <a href="https://github.com/angelsplato/the_shop">the_shop</a>: a
          small online shop I built with React and Firebase.
        </li>
        <li>
          <a href="https://github.com/angelsplato/onlineforum">onlineforum</a>,
          a Spring Boot forum API, and the{" "}
          <a href="https://github.com/angelsplato/forum-service-registry">
            Eureka registry
          </a>{" "}
          it talks to.
        </li>
        <li>
          <a href="https://github.com/angelsplato/ds-notebooks">
            ds-notebooks
          </a>{" "}
          and{" "}
          <a href="https://github.com/angelsplato/ai-notebooks">
            ai-notebooks
          </a>
          : scratch space for data science and classical AI algorithms.
        </li>
        <li>
          I keep a pile of{" "}
          <a href="https://github.com/angelsplato/LeetCodeChallenges">
            LeetCode
          </a>{" "}
          solutions in Python, mostly for the exercise.
        </li>
      </ul>

      <h2>Interesting links</h2>
      <p>
        The following are a collection of technical links that I&apos;ve found
        useful.
      </p>
      <ul>
        <li>
          <a href="https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying">
            The Log
          </a>
          . Everything you ever wanted to know about structured logs, and how
          to build distributed systems on top of them.
        </li>
        <li>
          <a href="https://mcfunley.com/choose-boring-technology">
            Choose Boring Technology
          </a>
          . The best argument I know for preferring the stack that will still
          be there in five years.
        </li>
        <li>
          <a href="https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/">
            Parse, don&apos;t validate
          </a>
          . A short piece that changed how I think about boundaries in
          programs.
        </li>
        <li>
          <a href="https://stripe.com/blog/api-versioning">
            API versioning at Stripe
          </a>
          . I found this useful when thinking about how payments APIs have to
          evolve without breaking the world.
        </li>
        <li>
          <a href="https://how.complexsystems.fail/">
            How Complex Systems Fail
          </a>
          . Eighteen short observations that I wish more incident reviews
          started from.
        </li>
        <li>
          <a href="https://aphyr.com/posts/288-the-network-is-reliable">
            The network is reliable
          </a>
          . A reminder, with receipts, that it is not.
        </li>
        <li>
          <a href="https://www.sqlite.org/appfileformat.html">
            SQLite as an application file format
          </a>
          . A quietly radical idea about how to store things.
        </li>
        <li>
          <a href="https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/">
            Falsehoods programmers believe about names
          </a>
          . Character sets and names are both more complicated than they first
          appear.
        </li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>
          BSc Informatics,{" "}
          <a href="https://www.nust.ac.zw">
            National University of Science and Technology
          </a>
          , Bulawayo (2016–2020).
        </li>
      </ul>
    </main>
  );
}
