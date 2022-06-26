import styled from "styled-components"
import SideMenu from './components/SideMenu'
import Main from './components/Main'
import { useState } from "react"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const QueueListPage = ({
  authenticated,
  setPathname,
}) => {
  if (!authenticated) {
    console.log('NOT AUTHENTICATED')

    setPathname('/auth/sign-up')

    return
  }

  return (
    <Wrapper>
      <SideMenu />
      <Main />
    </Wrapper>
  )
}

export default QueueListPage
