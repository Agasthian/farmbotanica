import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
  min-height: ${({ fullHeight }) =>
    fullHeight ? "calc(var(--vh, 1vh) * 100)" : "auto"};
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: center;
`

export const Wrapper = styled.div`
  margin-top: 8rem;
`
export const Container = styled.div`
  max-width: 124rem;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`