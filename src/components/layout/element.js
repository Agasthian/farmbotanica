import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: center;
`
//Section min height
//min-height: ${({ fullHeight }) =>
//fullHeight ? "calc(var(--vh, 1vh) * 100)" : "auto"};

export const Wrapper = styled.div`
  margin-top: ${({ topmargin }) => (topmargin ? "11rem" : "8rem")};
  margin-bottom: ${({ bottommargin }) => (bottommargin ? "6rem" : "0")};

  @media ${props => props.theme.mediaQueries.smaller} {
    margin-top: 6rem;
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
`
