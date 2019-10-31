import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Text from '../components/Text'

export default () => (
  <Layout>
    <Text>
      <p css={`
        letter-spacing: 0.05em;
        font-weight: 500;
        `}>
        THIS IS MY WORK IN PROGRESS PORTFOLIO SITE!
      </p>
      <p>
        I am a web developer who has been working at Si digital as an apprentice since December 2018. During this time I have worked on building websites using WordPress, React and Next.js. I have also spent time facilitating and formatting requirements for projects that I am working on. For a couple of my projects I have designed and developed the mySQL databases and API endpoints to integrate with them. Although it isn’t my specialty I also enjoy designing user interfaces using Figma and have built a few websites using them (including this one).
      </p>
      <p>
        I will write more for this page when I have perfected the other areas of the site.
      </p>
    </Text>
  </Layout>
)
