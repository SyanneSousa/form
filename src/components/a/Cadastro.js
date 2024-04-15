"use client"

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Cadastro = () => {

  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    birthDate: "",
  })

  function handleInput(e){
    const value = e.target.value
    const actor = e.target.name

    setFormState({...formState, [actor]:value })
  }

  function handleSubmit(){
    console.log(formState)
  }

  return (

      <FormCadastro>
        <TítuloForm>Cadastro</TítuloForm>

        <InputSection>
          <LabelCampoForm>Nome</LabelCampoForm>
          <CampoForm onChange={handleInput} name={'name'} value={formState.name} placeholder='Valentina'></CampoForm>
        </InputSection>

        <InputSection>
          <LabelCampoForm>Sobrenome</LabelCampoForm>
          <CampoForm onChange={handleInput} name={'surname'} value={formState.surname} placeholder='Ferreira'></CampoForm>
        </InputSection>

        <InputSection>
          <LabelCampoForm>Email</LabelCampoForm>
          <CampoForm onChange={handleInput} name={'email'} value={formState.email} type='email' placeholder='exemplo@email.com'></CampoForm>
        </InputSection>

        <InputSection>
          <LabelCampoForm>Telefone</LabelCampoForm>
          <CampoForm onChange={handleInput} name={'phone'} value={formState.phone} type='tel' placeholder='(XX) XXXXX-XXXX'></CampoForm>
        </InputSection>

        <InputSection>
          <LabelCampoForm>Data de Nascimento</LabelCampoForm>
          <CampoForm onChange={handleInput} name={'birthDate'} value={formState.birthDate} type='date'></CampoForm>
        </InputSection>

          <EnvioButtton onClick={handleSubmit}>Enviar</EnvioButtton>
        
          
      </FormCadastro>

  )
}

export default Cadastro

const FormCadastro = styled.div`
  all: unset;
  background-color: blueviolet;
  min-height: 500px;
  width: 450px;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction:column;
  gap: 16px;
  align-items: center
`
const CampoForm = styled.input`
  height: 30px;
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: transparent;
`
const LabelCampoForm = styled.label`
color: white; 

`
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const TítuloForm = styled.h1`
  text-align: center;
  color: white;
`
const EnvioButtton = styled.button`
all: unset;
  align-content: center;
  height: 30px;
  width: 150px;
  text-align: center;
  background-color: white;
  color: blueviolet;
  padding: 8px 16px;

  transition: all ease-in-out 0.2s;

  border-radius: 4px;

  &:hover{
    background-color:blue;
    color: white;
    cursor: pointer;
  }

`