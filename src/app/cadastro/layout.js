
"use client"
import React from 'react'
import CadastroPage from './page'
import styled from 'styled-components'
const Layout = () => {

  return (
    <Container><CadastroPage/></Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`