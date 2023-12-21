import React, { useEffect } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'
import { Logo1Svg, Logo2Svg, Logo3Svg, Logo4Svg, Logo5Svg, Logo6Svg } from '@/assets/svg'
import gsap from 'gsap'

class LogoAnimate {
  logoIsAnimating = false
  DOMS = {}

  constructor(wrapper) {
    this.selector = gsap.utils.selector(wrapper)
    this.DOMS.logo = this.selector('.header__logo')[0]
    this.DOMS.logoLetters = this.selector('.header__logo-text svg')
    this.DOMS.logoLettersPath = this.selector('.header__logo-text svg path')
    this.DOMS.logoG = this.selector('.header__logo-text svg:first-of-type path')
    this.DOMS.logoGLine = this.selector('.header__logo-text span')
    this.DOMS.logoS = this.selector('.header__logo-text svg:last-of-type path:first-of-type')
    this.DOMS.logoA = this.selector('.header__logo-text svg:last-of-type path:nth-of-type(2)')
    this.DOMS.logoP = this.selector('.header__logo-text svg:last-of-type path:last-of-type')
    this.DOMS.logoTimer = this.selector('.header__logo > svg:nth-of-type(1)')
    this.DOMS.logoBolt = this.selector('.header__logo > svg:nth-of-type(2)')
    this.DOMS.logoKeyHole = this.selector('.header__logo > svg:nth-of-type(3)')
    this.DOMS.logoFlower = this.selector('.header__logo > svg:nth-of-type(4)')
    this.DOMS.logoLine = this.selector('.header__logo-text-line')
    this.logoTlEvents = {
      onComplete: () => {
        this.logoIsAnimating = false
      },
    }
    this.setupLogoTimeline1()
    this.setupLogoTimeline2()
    this.setupLogoTimeline3()
    this.setupLogoTimeline4()
    this.setupLogoTimeline5()
    this.DOMS.logo.addEventListener('mousemove', () => {
      this.playLogoTl()
    })
  }

  playLogoTl() {
    if (this.logoIsAnimating) return
    this.logoIsAnimating = true
    gsap.utils.random([this.tlLogo, this.tlLogo2, this.tlLogo3, this.tlLogo4, this.tlLogo5]).play(0)
  }

  setupLogoTimeline1() {
    const commonParams = {
      ease: 'power4.inOut',
      duration: 0.5,
    }
    this.tlLogo = gsap.timeline({
      paused: true,
      ...this.logoTlEvents,
    })
    this.tlLogo.to(this.DOMS.logoLetters[1], {
      keyframes: [
        {
          x: 20,
          ...commonParams,
        },
        {
          x: 0,
          delay: 0.1,
          ...commonParams,
        },
      ],
    })
    this.tlLogo.to(
      this.DOMS.logoLine,
      {
        keyframes: [
          {
            scaleX: 1,
            ...commonParams,
          },
          {
            scaleX: 0.4,
            delay: 0.1,
            ...commonParams,
          },
        ],
      },
      0
    )
  }

  setupLogoTimeline2() {
    this.tlLogo2 = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
      ...this.logoTlEvents,
    })
    this.tlLogo2.to(this.DOMS.logoS, {
      keyframes: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1,
        },
      ],
      duration: 0.8,
      ease: 'none',
    })
    this.tlLogo2.to(
      this.DOMS.logoBolt,
      {
        keyframes: [
          {
            opacity: 1,
            scale: 1,
          },
          {
            opacity: 0,
            scale: 0,
            delay: 1,
          },
        ],
        duration: 0.8,
        ease: 'none',
      },
      0
    )
  }

  setupLogoTimeline3() {
    this.tlLogo3 = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
      ...this.logoTlEvents,
    })
    this.tlLogo3.to(this.DOMS.logoA, {
      keyframes: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1,
        },
      ],
      duration: 0.8,
      ease: 'none',
    })
    this.tlLogo3.to(
      this.DOMS.logoKeyHole,
      {
        keyframes: [
          {
            opacity: 1,
            scale: 1,
          },
          {
            opacity: 0,
            scale: 0,
            delay: 1,
          },
        ],
        duration: 0.8,
        ease: 'none',
      },
      0
    )
    this.tlLogo3.to(
      this.DOMS.logoP,
      {
        keyframes: [
          {
            x: 13,
          },
          {
            x: 0,
            delay: 1,
          },
        ],
        duration: 0.8,
        ease: 'none',
      },
      0
    )
  }

  setupLogoTimeline4() {
    this.tlLogo4 = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
      ...this.logoTlEvents,
    })
    this.tlLogo4.to([this.DOMS.logoG, this.DOMS.logoGLine], {
      keyframes: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1,
        },
      ],
      duration: 1.2,
      ease: 'none',
    })
    this.tlLogo4.to(
      this.DOMS.logoTimer,
      {
        keyframes: [
          {
            opacity: 1,
            scale: 0.95,
            rotate: 360,
          },
          {
            opacity: 0,
            scale: 0,
            delay: 1,
          },
        ],
        duration: 1.2,
        ease: 'none',
      },
      0
    )
    this.tlLogo4.to(
      this.DOMS.logoLetters[1],
      {
        keyframes: [
          {
            x: 8,
          },
          {
            x: 0,
            delay: 1,
          },
        ],
        duration: 1.2,
        ease: 'none',
      },
      0
    )
  }

  setupLogoTimeline5() {
    this.tlLogo5 = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
      ...this.logoTlEvents,
    })
    this.tlLogo5.to(this.DOMS.logoP, {
      keyframes: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1.3,
        },
      ],
      duration: 1.2,
      ease: 'none',
    })
    this.tlLogo5.to(
      this.DOMS.logoFlower,
      {
        keyframes: [
          {
            opacity: 1,
            scale: 1,
          },
          {
            opacity: 0,
            scale: 0,
            rotate: 360,
            delay: 1,
          },
        ],
        duration: 1.2,
        ease: 'none',
      },
      0
    )
  }
}

const Logo = () => {
  const wrapperRef = React.useRef(null)

  useEffect(() => {
    new LogoAnimate(wrapperRef)
  }, [])

  return (
    <div ref={wrapperRef}>
      <LogoWrap>
        <span className='header__logo-text'>
          <Logo1Svg />
          <Logo2Svg />
          <span className='header__logo-text-line'></span>
        </span>
        <Logo3Svg />
        <Logo4Svg />
        <Logo5Svg />
        <Logo6Svg />
      </LogoWrap>
    </div>
  )
}

const LogoWrap = styled(Link).attrs({
  className: 'header__logo',
  href: '/',
})`
  flex-shrink: 0;
  width: ${rem(36 * 2.7)};
  height: ${rem(36)};
  &.header__logo {
    display: block;
    height: 1.875rem;
    perspective: 1000px;
    position: relative;
    width: 5.125rem;
    z-index: 1;
  }
  &.header__logo svg {
    backface-visibility: hidden;
  }
  &.header__logo > svg {
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale(0);
    z-index: 2;
  }
  &.header__logo > svg:nth-of-type(2) {
    left: 1.6875rem;
  }
  &.header__logo > svg:nth-of-type(3) {
    left: 2.5rem;
  }
  &.header__logo > svg:nth-of-type(4) {
    left: 3.875rem;
  }
  .header__logo-text {
    display: grid;
    height: 100%;
  }
  .header__logo-text svg {
    fill: currentColor;
    grid-area: 1/1;
    height: 100%;
    overflow: visible;
    transition: color 0.1s 0.3s;
  }
  .mobile-menu-isopen .header__logo-text svg {
    transition: color 0.1s 0.2s;
  }
  .header__logo-text-line {
    background: #fffce1;
    border-radius: 1px;
    content: '';
    height: 6px;
    left: 12px;
    position: absolute;
    top: 13.5px;
    transform: skew(-16deg) scaleX(0.4);
    transform-origin: 0 0;
    width: 30px;
  }
`

export default Logo
