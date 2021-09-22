/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    header: '#cff7da',
    body: '#fff',
    footer: '#003333',
    buttonbg: '#fff',
    buttoncolor: '#333',
  },
}



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
 
    <React.Fragment>
      <ThemeProvider theme = {theme}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
              <main>{children}</main>
            </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
