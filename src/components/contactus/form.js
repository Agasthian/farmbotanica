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
  margin: 0;
  transition: 0.3s all;
`
const Input = styled.input`
  height: 3rem;
  border:none;
  border-bottom: 1px solid grey;
  font-family: inherit;
  font-size: 1.4rem;
  width: 100%;
  background-color:transparent;
  margin-bottom:2rem;
`

const InputCheckbox = styled.input`
margin-bottom:2rem;
margin-top:2rem;
`

const LabelCheckbox = styled.label`
  display:inline;
  margin-right:2rem;
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
      name="contactus"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FormGroup>
        <Label for="name">Name</Label>
        <Input name="name" placeholder="John doe" type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input name="phone" placeholder="98-xxxx-xxxx" type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="email">E-mail</Label>
        <Input name="email" placeholder="name@name.com" type="email" />
      </FormGroup>
      <FormGroup>
        <Label>Type of Enquiry</Label>
        <InputCheckbox type="checkbox" name='domestic1' value='domestic'/>
        <LabelCheckbox for="domestic1"> Domestic</LabelCheckbox>
        <InputCheckbox type="checkbox" name='international' value='international'/>
        <LabelCheckbox for="international"> International</LabelCheckbox>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Textarea name="message" rows='5' placeholder="A short message"/>
      </FormGroup>
      <FormGroup data-netlify-recaptcha="true">
      </FormGroup>
      <Button>Send <StyledIconButton icon={faPaperPlane} size="1x" /></Button>
    </form>
    </FormWrapper>
  )
}
export default Form
