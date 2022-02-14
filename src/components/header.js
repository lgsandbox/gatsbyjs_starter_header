import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Container } from '../components/styles/Container.styled'
import { StyledHeader } from '../components/styles/Header.styled'
import { Nav } from './styles/Header.styled'

import { Button } from './styles/Button.styled'

const Header = ({ siteTitle }) => (

  <StyledHeader>
    <header>
      <Container>
        <Nav>
          

        <Button>Get Started</Button>

        </Nav>
      </Container>
    </header>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
