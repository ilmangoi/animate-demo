import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Container from './Container'
import { rem } from 'polished'
import Button from './Button'
import gsap from 'gsap'
import { CityGraph } from '@/assets/svg'

const TimelineOctopus = () => {
  const octopusStateAnimation = useRef(null)
  const cityGraphRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
      })
      tl.from('.ground', { opacity: 0, duration: 1 })
        .from('.tree', { y: -1000, scale: 0.8, rotation: 360, duration: 2, stagger: 0.1 })
        .from('.house:nth-child(odd)', { x: 2000, duration: 3, stagger: 0.1 })
        .from('.house:nth-child(even)', {
          y: -1000,
          opacity: 0.6,
          ease: '"power3.inOut"',
          duration: 2,
          stagger: 0.3,
        })
        .to('.tree path, .house path', {
          y: () => Math.random() * 1000 - 500,
          x: () => Math.random() * 1000 - 500,
          duration: 10,
        })
      octopusStateAnimation.current = tl
    }, cityGraphRef)

    return () => ctx.revert()
  }, [])

  const activeButton = (e) => {
    const currentSiblings = e.target.parentNode.children

    ;[...currentSiblings].forEach((sibling) => {
      sibling.style.background = 'transparent'
      sibling.style.color = 'white'
    })
    e.target.style.background = 'white'
    e.target.style.color = 'black'
  }

  const octopusPlay = (e) => {
    activeButton(e)
    octopusStateAnimation.current.play()
  }

  const octopusPause = (e) => {
    activeButton(e)
    octopusStateAnimation.current.pause()
  }

  const octopusReverse = (e) => {
    activeButton(e)
    octopusStateAnimation.current.reverse()
  }

  const octopusRestart = (e) => {
    activeButton(e)
    octopusStateAnimation.current.restart()
  }

  return (
    <TimelineOctopusWrap>
      <Container>
        <TimelineOctopusInner>
          <TimelineOctopusButtons>
            <Button ev={octopusPlay}>Play</Button>
            <Button ev={octopusPause}>Pause</Button>
            <Button ev={octopusReverse}>Reverse</Button>
            <Button ev={octopusRestart}>Restart</Button>
          </TimelineOctopusButtons>
          <TimelineOctopusApp data-app ref={cityGraphRef}>
            <CityGraph width={rem(666)} />
          </TimelineOctopusApp>
        </TimelineOctopusInner>
      </Container>
    </TimelineOctopusWrap>
  )
}

const TimelineOctopusWrap = styled.div`
  margin-top: ${rem(80)};
  @media (max-width: 576px) {
    margin-top: ${rem(40)};
  }
`

const TimelineOctopusInner = styled.div``

const TimelineOctopusButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${rem(10)};
  margin-bottom: ${rem(20)};
`

const TimelineOctopusApp = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  background-size: cover;
  overflow: hidden;
  padding-bottom: ${rem(30)};
  .event,
  .line,
  #ipad {
    display: none;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: ${rem(250)};
  }
`

export default TimelineOctopus
