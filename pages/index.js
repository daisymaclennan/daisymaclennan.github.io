import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Text from '../components/Text'

export default () => (
  <Layout>
    <Text>
      <p>
        I am a Junior Web Developer with a passion for good UX and innovative designs.
      </p>
      <p>
        I specialise in React.js development although I have worked on various projects using WordPress, Kentico CMS, Vue.js and Unity.
      </p>
      <p>
        I began working as a developer in December 2018 when I began an apprenticeship with Si digital, a digital agency, based in Southsea, Portsmouth.
        Currently I am working with Distinction, another digital agency, based in Nottingham. 
        I am hoping to find more freelance projects in the near future, this will allow me to take more of my own route design-wise and technology wise.
      </p>
      <p>
        My projects page on this site only shows the projects I have developed/designed on my own. I'm always open to talk about more of the things I've worked on if your there to listen!
      </p>
      <p>
        Contact me on LinkedIn if you are interested! I hope to hear from you :)
      </p>
    </Text>
  </Layout>
)
