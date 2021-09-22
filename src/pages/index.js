import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
}


const IndexPage = () => (
  
  <ThemeProvider theme = {theme}>
      <Layout>
        <Seo title="Home" />
      </Layout>
  </ThemeProvider>
)

export default IndexPage
