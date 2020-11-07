import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Container = styled.div`
  max-width: 124rem;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`

//Center Align Content
export const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
`

// Sub Heading
export const SubHeading = styled.h2`
  font-size: 2.3rem;
  color: var(--secondary);
`

export const SubHeadingH4 = styled.h4`
  color: var(--white);
`

export const SubHeadingH6 = styled.h6`
  color: var(--white);
`

export const StyledLink = styled(Link)`
cursor: pointer;
color:var(--white);
font-weight:500;
text-decoration:none;
transition: all 0.4s ease-out;

&:hover {
  color: ${ props => props.dark ? "var(--light-text)" : "var(--secondary)" };
  border-bottom: ${ props => props.dark ? "3px solid var(--light-text)" : "3px solid var(--secondary)" }; 
}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--lighter);
  
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--secondary);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`