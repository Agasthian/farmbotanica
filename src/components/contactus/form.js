
import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../themes/utils"

const FormGroup = styled.div``

const Label = styled.label`
  font-family: "Neuton", serif;
  font-size: 1.6rem;
  font-weight: 400;
  display: block;
  margin-top: 0.7rem;
  transition: 0.3s all;
  margin-bottom: 0.5em;
`
const Input = styled.input`
  height: 3rem;
  border: none;
  font-family: "Neuton", serif;
  font-size: 1.4rem;
  width: 100%;
`
const Textarea = styled.textarea`
  height: 5rem;
  border: none;
  font-family: "Neuton", serif;
  font-size: 1.4rem;
  width: 100%;
  margin-bottom: 2rem;
`

const Form = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FormGroup>
        <Label for="name">Name</Label>
        <Input name="name" plaecholder="John doe" type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input name="phone" plaecholder="98-xxxx-xxxx" type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="email">E-mail</Label>
        <Input name="email" plaecholder="name@name.com" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Textarea name="message" />
      </FormGroup>
      <StyledLink>Send</StyledLink>
    </form>
  )
}
export default Form
