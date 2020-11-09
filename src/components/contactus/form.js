import React from "react"
import styled from "styled-components"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import Button from '../UI/button'
import {StyledIconButton} from '../../themes/utils'


const FormWrapper = styled.div`
flex:1;
padding: 1.5rem 3rem;
`

const FormGroup = styled.div`

`

const Label = styled.label`
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: 400;
  display: block;
  margin-top: 0.7rem;
  transition: 0.3s all;
  margin-bottom: 0.5em;
`
const Input = styled.input`
  height: 3rem;
  border:none;
  border-bottom: 1px solid grey;
  font-family: inherit;
  font-size: 1.4rem;
  width: 100%;
  background-color:transparent;

`
const Textarea = styled.textarea`
  height: 5rem;
  border: none;
  border-bottom: 1px solid grey;
  font-family: inherit
  font-size: 1.4rem;
  width: 100%;
  margin-bottom: 2rem;
`



const Form = () => {
  return (
    <FormWrapper>
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
      <Button>Send <StyledIconButton icon={faPaperPlane} size="1x" /></Button>
    </form>
    </FormWrapper>
  )
}
export default Form
