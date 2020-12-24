import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"



export const Section = styled.section`
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? "65vh" : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: center;
  
`

//Section min height
//min-height: ${({ fullHeight }) =>
//fullHeight ? "calc(var(--vh, 1vh) * 100)" : "auto"};

export const Wrapper = styled.div`
  margin-top: ${({ topmargin }) => (topmargin ? "16rem" : "8rem")};
  margin-bottom: ${({ bottommargin }) => (bottommargin ? "6rem" : "0")};

  @media ${props => props.theme.mediaQueries.smaller} {
    margin-top: ${({ topmarginmobile }) => (topmarginmobile ? "11rem" : "6rem")};;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    margin-top: 0;
  }
`
export const Container = styled.div`
  max-width: 124rem;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;

  @media ${props => props.theme.mediaQueries.smallest} {

    padding: 0 3rem;
  }
`

// Used in category/pages
export const ProductListWrapper = styled.div`
max-width: 120rem;
`;
export const ProductListHeadingWrapper = styled.div`
display:flex;
`;
export const ProductListContent = styled.div`
display:flex;
flex-direction: column;
flex: 0 0 35%;
background-color: var(--navbar);
padding: 3rem;
`;
export const ProductListHeading = styled.div`
display:flex;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: center;
`

export const ProductListHeadingH1 = styled.h1`
margin:0;
`;
export const ProductListHeadingH3 = styled.h3`
margin:1rem;
`;
export const ProductListHeadingP = styled.p`
margin:0.5rem;
color:var(--primary);
font-weight:700;
`;

export const ProductListImg = styled(Img)`
height: 40rem;
flex:1;
`;

export const ProductListBackLink = styled(Link)`
font-family:Poppins;
text-decoration:none;
color:var(--text);
font-weight:600;
transition: color 0.2s ease-out 0s;

&:hover{
  color:var(--primary)
}
`;