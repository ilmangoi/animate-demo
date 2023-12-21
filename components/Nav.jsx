import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { rem } from 'polished'
import Container from './Container'
import Menu from './Menu'
import { useSelector, useDispatch } from 'react-redux'
import { openMenu } from '../store/menuSlice'
import { MenuButtonIcon, CloseButtonIcon } from '@/assets/svg'

const Nav = ({ color }) => {
  const isOpenMenu = useSelector((state) => state.menu.menu)
  const dispatch = useDispatch()

  return (
    <NavWrap color={color}>
      <Container>
        <NavInner>
          <Logo />
          <Menu color={color} isOpenMenu={isOpenMenu} />
          <MenuButton
            href={'https://greensock.com/gsap/'}
            target='_blank'
            color={color}
            onClick={() => dispatch(openMenu({ isOpenMenu }))}
          >
            {isOpenMenu ? (
              <StyledCloseButtonIcon color={color} />
            ) : (
              <StyledMenuButtonIcon color={color} />
            )}
          </MenuButton>
          <Occupy />
        </NavInner>
      </Container>
    </NavWrap>
  )
}

// 占位
const Occupy = styled.div`
  width: 0;
  margin-left: auto;
  @media (max-width: 812px) {
    display: none;
  }
`

const NavWrap = styled.nav`
  background-color: ${(props) => (props.color === 'white' ? 'black' : 'white')};
  position: sticky;
  z-index: 20;
  height: ${rem(90)};
`

const NavInner = styled.div`
  display: flex;
  gap: ${rem(50)};
  align-items: center;
  height: ${rem(90)};
  justify-content: space-between;
  @media (max-width: 812px) {
    gap: ${rem(30)};
  }
`

const MenuButton = styled.button`
  border: none;
  outline: none;
  background: none;
  background-size: cover;
  width: ${rem(25)};
  height: ${rem(25)};
  flex-shrink: 0;
  display: none;
  position: relative;
  z-index: 3;
  @media (max-width: 812px) {
    display: block;
  }
`

const StyledMenuButtonIcon = styled(MenuButtonIcon)`
  fill: ${(props) => (props.color === 'white' ? 'white' : 'black')};
`

const StyledCloseButtonIcon = styled(CloseButtonIcon)`
  fill: ${(props) => (props.color === 'white' ? 'white' : 'black')};
`

export default Nav
