import React, { useEffect, useRef } from 'react'
import { Title1, Title2, Title3, Title4 } from '@/assets/svg'
import styled from 'styled-components'
import gsap from 'gsap'
import { ChristmasBg } from '@/assets/images'
import { cover } from 'polished'

class TitleAnimate {
  constructor(block) {
    this.block = block.current
  }

  init() {
    this.DOM = {
      heading1: this.block.querySelector('.home-hero__animate'),
      heading2: this.block.querySelector('.home-hero__anything'),
      squiggle: this.block.querySelector('#home-hero-squiggle'),
    }
    this.selector = {
      animate: gsap.utils.selector(this.DOM.heading1),
      anything: gsap.utils.selector(this.DOM.heading2),
    }
    this.defaults = {
      ease: 'power2.out',
      duration: 0.6,
    }
    this.createTimeline()
    this.initSquiggleMouseMovement()
  }

  initSquiggleMouseMovement() {
    let screenWidth, screenHeight
    const update = () => {
      screenWidth = window.innerWidth
      screenHeight = window.innerHeight
    }
    update()
    const xSetter = gsap.quickTo(this.DOM.squiggle, 'xPercent', {
      duration: 1,
      ease: 'power3',
    })
    const ySetter = gsap.quickTo(this.DOM.squiggle, 'yPercent', {
      duration: 1,
      ease: 'power3',
    })
    const rotatingSetter = gsap.quickTo(this.DOM.squiggle, 'rotation', {
      duration: 1,
      ease: 'power3',
    })
    window.addEventListener('resize', () => {
      update()
    })
    window.addEventListener('mousemove', (event) => {
      const x = gsap.utils.mapRange(0, screenWidth, -20, 20, event.x)
      const y = gsap.utils.mapRange(0, screenHeight, -20, 20, event.y)
      const r = gsap.utils.clamp(-1, 1, gsap.utils.mapRange(screenWidth * 0.25, screenWidth * 0.75, 1, -1, event.x))
      rotatingSetter(y * 1 * r)
      xSetter(x)
      ySetter(y)
    })
  }

  char1() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.animate('.a > span'),
      s = this.selector.animate('.a > span > span')
    tl.set(r, {
      transformOrigin: '50% 100%',
    })
    tl.from(s, {
      yPercent: 100,
    })
    tl.from(
      r,
      {
        rotationX: -180,
        ease: 'back.out(1.7)',
        duration: 1,
      },
      '-=.4'
    )
    return tl
  }

  char2() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.animate('.home-hero__flair--circles'),
      s = this.selector.animate('.home-hero__flair--circles svg'),
      o = this.selector.animate('.home-hero__flair--windmill'),
      a = this.selector.animate('.n > span > span'),
      i = this.selector.animate('.n > span > span > span')
    tl.set(i[1], {
      autoAlpha: 1,
    })
    tl.set(r, {
      autoAlpha: 1,
      yPercent: 100,
    })
    tl.from(s, {
      scale: 0,
      ease: 'back.out(1.7)',
    })
    tl.to(r, {
      yPercent: -200,
      autoAlpha: 0,
      duration: 1.5,
      ease: 'power4.out',
    })
    tl.from(
      a,
      {
        yPercent: 100,
        duration: 0.4,
      },
      '<'
    )
    tl.from(
      o,
      {
        x: () => window.innerWidth / -2,
        rotationZ: -360,
        duration: 1,
      },
      '<'
    )
    tl.from(
      i[0],
      {
        rotationY: -180,
        duration: 0.3,
      },
      '+=.4'
    )
    tl.to(
      i[1],
      {
        rotationY: 180,
        duration: 0.3,
      },
      '<'
    )
    tl.to(
      o,
      {
        rotationZ: 90,
        duration: 0.3,
        repeat: -1,
        repeatDelay: 1,
      },
      '<'
    )
    return tl
  }

  char3() {
    const e = this.selector.animate('.i > span')
    return gsap.from(e, {
      yPercent: -100,
      ease: 'back.out(1.4)',
      duration: 1,
    })
  }

  char4() {
    const e = this.selector.animate('.m > span')
    return gsap.from(e, {
      xPercent: -100,
      ...this.defaults,
    })
  }

  char5() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.animate('.a2'),
      s = this.selector.animate('.home-hero__flair--star'),
      o = this.selector.animate('.home-hero__flair--star svg'),
      a = this.selector.animate('.a2 > span > span')
    tl.set(s, {
      xPercent: -150,
      autoAlpha: 1,
    })
    tl.from(o, {
      scale: 0,
      duration: 0.4,
    })
    tl.add(this.char4(), '+=.6')
    tl.to(
      s,
      {
        xPercent: 0,
      },
      '<'
    )
    tl.set(r, {
      overflow: 'hidden',
    })
    tl.to(
      s,
      {
        yPercent: 130,
        ease: 'power2.in',
      },
      '+=.5'
    )
    tl.from(
      a,
      {
        yPercent: 100,
      },
      '-=.3'
    )
    tl.to(
      o,
      {
        rotationZ: 360,
        ease: 'none',
        repeat: 2,
        duration: 2,
      },
      0
    )
    return tl
  }

  char6() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.animate('.t > span > span')[0],
      s = this.selector.animate('.t > span > span'),
      o = this.selector.animate('.t > span > span > span')
    tl.set(s, {
      autoAlpha: 1,
    })
    tl.from(
      o[0],
      {
        yPercent: 100,
        duration: 0.4,
      },
      '<'
    )
    tl.fromTo(
      [o[1], o[2]],
      {
        yPercent: 100,
      },
      {
        yPercent: -100,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.inOut',
      },
      '+=.2'
    )
    tl.to(
      o[0],
      {
        yPercent: -100,
      },
      '-=.6'
    )
    tl.from(
      r,
      {
        yPercent: 100,
        duration: 0.9,
      },
      '<'
    )
    tl.add(this.char7(), '<')
    return tl
  }

  char7() {
    const e = this.selector.animate('.e > span')
    return gsap.from(e, {
      yPercent: 100,
      duration: 0.9,
    })
  }

  char8to9() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.anything('.a span:first-of-type, .n span:first-of-type'),
      s = this.selector.anything('.a span:last-of-type, .n span:last-of-type')
    tl.fromTo(
      s,
      {
        yPercent: 100,
      },
      {
        keyframes: {
          yPercent: [100, 0, 100, 0],
          ease: 'power1.out',
        },
        duration: 3,
        stagger: 0.4,
      }
    )
    tl.fromTo(
      r,
      {
        yPercent: -100,
      },
      {
        keyframes: {
          yPercent: [-100, -100, 20, -100],
          ease: 'power1.out',
        },
        duration: 3,
        stagger: 0.4,
      },
      '<'
    )
    return tl
  }

  char10() {
    const e = this.selector.anything('.y > span')
    return gsap.from(e, {
      rotationY: -180,
      duration: 1,
      scale: 0,
    })
  }

  char11() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.anything('.home-hero__flair--bolt'),
      s = this.selector.anything('.home-hero__flair--bolt #bolt-path'),
      o = this.selector.anything('.home-hero__flair--bolt #bolt-rect'),
      a = this.selector.anything('.t span')
    tl.set(r, {
      autoAlpha: 1,
    })
    tl.from(s, {
      drawSVG: '0',
      duration: 1,
      ease: 'power3.inOut',
    })
    tl.from(
      o,
      {
        yPercent: 100,
        transformOrigin: '50% 100%',
        duration: 3.5,
        ease: 'power4.out',
      },
      '<.5'
    )
    tl.from(
      r,
      {
        keyframes: {
          scale: [1, 1.1, 0.6, 0.7, 0.2, 0.3, 0],
          duration: 2,
        },
      },
      '-=2'
    )
    tl.from(
      a,
      {
        scale: 0,
        ease: 'back.out(1.4)',
      },
      '<.5'
    )
    return tl
  }

  char12() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.anything('.home-hero__flair--worm img'),
      s = this.selector.anything('.h span span')
    tl.from(r, {
      autoAlpha: 0,
      duration: 1.5,
      yPercent: 100,
      rotationZ: 180,
      ease: 'back.out(1.6)',
    })
    tl.from(
      s,
      {
        yPercent: -100,
      },
      '<.2'
    )
    return tl
  }

  char13() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.anything('.i > span')
    tl.from(
      r,
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      '<'
    )
    tl.from(
      r,
      {
        rotationX: -450,
        duration: 1.3,
      },
      '<.14'
    )
    tl.add(this.char14(), '<+=.5')
    tl.to(
      r,
      {
        rotationX: 540,
        duration: 1.5,
        repeat: -1,
        repeatDelay: 3,
        yoyo: !0,
        yoyoEase: 'power2.out',
      },
      '+=2'
    )
    return tl
  }

  char14() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.anything('.n2 span')
    tl.from(r, {
      xPercent: -100,
    })
    return tl
  }

  char15() {
    const tl = gsap.timeline({
        defaults: this.defaults,
      }),
      r = this.selector.anything('.g span')
    tl.from(
      r,
      {
        autoAlpha: 0,
        rotationZ: -120,
        duration: 2,
        ease: 'elastic.out(1, 0.4)',
      },
      '<.6'
    )
    return tl
  }

  createTimeline() {
    const tl = gsap.timeline({
      id: 'home-hero',
      defaults: this.defaults,
    })
    tl.set([this.DOM.heading1, this.DOM.heading2], {
      autoAlpha: 1,
    })
    tl.add(this.char1())
    tl.add(this.char2(), 0.4)
    tl.add(this.char3(), 1)
    tl.add(this.char5(), 0.8)
    tl.add(this.char6(), 1.1)
    tl.add(this.char8to9(), 1.5)
    tl.add(this.char10(), 1.7)
    tl.add(this.char11(), 2)
    tl.add(this.char12(), 1.9)
    tl.add(this.char13(), 2.4)
    tl.add(this.char15(), 2.2)
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  height: calc(100vh - 90px);
  padding: 0 100px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  .home-hero__heading {
    color: #fffce1;
    width: 100%;
    padding-bottom: max(2.5rem, min(2.589vw + 1.8932rem, 5rem));
  }
  .home-hero__heading,
  .home-hero__heading .home-hero__heading-text {
    position: relative;
    z-index: 1;
  }
  .home-hero__heading .home-hero__heading-text > span {
    display: flex;
    visibility: hidden;
    width: 100%;
  }
  .home-hero__heading .home-hero__heading-text > span:last-child {
    justify-content: flex-end;
  }
  .home-hero__heading .home-hero__heading-text > span span {
    display: block;
    position: relative;
  }
  .home-hero__heading .home-hero__heading-text > span span.clip {
    overflow: hidden;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .a,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .i,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .y {
    perspective: 750px;
    position: relative;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .n > span > span > span,
  .home-hero__heading .home-hero__heading-text .home-hero__animate .t > span > span {
    backface-visibility: hidden;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .n > span > span > span:last-child,
  .home-hero__heading .home-hero__heading-text .home-hero__animate .t > span > span:last-child {
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    visibility: hidden;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .t .clip {
    width: 500%;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__anything .a span,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .n span {
    position: relative;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__anything .a span:first-child,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .n span:first-child {
    font-weight: 400;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__anything .a span:last-child,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .n span:last-child {
    bottom: 0;
    left: 0;
    position: absolute;
  }
  .home-hero__flair {
    font-size: 0;
    position: absolute;
    z-index: -1;
  }
  .home-hero__flair img,
  .home-hero__flair svg {
    height: 100%;
    width: 100%;
  }
  .home-hero__flair--circles {
    left: max(0.3125rem, min(0.323625vw + 0.23665rem, 0.625rem));
    visibility: hidden;
  }
  .home-hero__flair--circles,
  .home-hero__flair--windmill {
    height: max(1.9375rem, min(6.86084vw + 0.32949rem, 8.5625rem));
    top: max(-5.75rem, min(-4.78964vw - 0.00242718rem, -1.125rem));
    width: max(1.9375rem, min(6.86084vw + 0.32949rem, 8.5625rem));
  }
  .home-hero__flair--windmill {
    left: max(0.3125rem, min(0.711974vw + 0.145631rem, 1rem));
  }
  .home-hero__flair--star {
    bottom: max(0.5625rem, min(0.970874vw + 0.334951rem, 1.5rem));
    height: max(2.5rem, min(7.11974vw + 0.831311rem, 9.375rem));
    left: max(0.25rem, min(0.582524vw + 0.113471rem, 0.8125rem));
    visibility: hidden;
    width: max(2.5rem, min(7.11974vw + 0.831311rem, 9.375rem));
  }
  .home-hero__flair--cutout {
    height: max(1.9375rem, min(7.05502vw + 0.283981rem, 8.75rem));
    right: max(-3.125rem, min(0.100434rem - 4.16185vw, -0.875rem));
    top: max(-0.625rem, min(0.151699rem - 0.647249vw, 0rem));
    width: max(1.9375rem, min(7.05502vw + 0.283981rem, 8.75rem));
    /* 31 140 4.54 135.45 */
  }
  @media only screen and (min-width: 77.5rem) {
    .home-hero__flair--cutout {
      right: max(-7.5rem, min(4.85294rem - 10.2941vw, -3.125rem));
      top: -0.625rem;
    }
  }
  .home-hero__flair--worm {
    bottom: max(-4.375rem, min(-2.589vw - 1.2682rem, -1.875rem));
    height: max(3.125rem, min(8.34952vw + 1.16808rem, 11.1875rem));
    left: 0;
    transform: rotate(25deg);
    width: max(1.875rem, min(4.85437vw + 0.737257rem, 6.5625rem));
  }
  .home-hero__flair--bolt {
    height: max(4.375rem, min(12.2977vw + 1.49272rem, 16.25rem));
    left: 0;
    top: max(0.0625rem, min(0.323625vw - 0.0133495rem, 0.375rem));
    visibility: hidden;
    width: max(2.1875rem, min(6.14887vw + 0.746359rem, 8.125rem));
  }
  .home-hero__flair--pill {
    backface-visibility: hidden;
    bottom: max(0.4375rem, min(1.2945vw + 0.134102rem, 1.6875rem));
    height: max(2.8125rem, min(7.76699vw + 0.992112rem, 10.3125rem));
    left: max(0.125rem, min(0.194175vw + 0.0794903rem, 0.3125rem));
    visibility: hidden;
    width: max(1.0625rem, min(2.91262vw + 0.379854rem, 3.875rem));
    z-index: 2;
  }
  .home-hero__flair--pill svg:last-child {
    bottom: 0;
    height: max(1.0625rem, min(2.91262vw + 0.379854rem, 3.875rem));
    left: 0;
    position: absolute;
    width: max(1.0625rem, min(2.91262vw + 0.379854rem, 3.875rem));
  }
  .visually-hidden {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .heading-xl {
    font-size: max(5.125rem, min(13.3333vw + 2rem, 18rem));
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 0.9;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .a,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .i,
  .home-hero__heading .home-hero__heading-text .home-hero__anything .y {
    perspective: 750px;
    position: relative;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .n > span > span > span,
  .home-hero__heading .home-hero__heading-text .home-hero__animate .t > span > span {
    backface-visibility: hidden;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .n > span > span > span:last-child,
  .home-hero__heading .home-hero__heading-text .home-hero__animate .t > span > span:last-child {
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    visibility: hidden;
  }
  .home-hero__heading .home-hero__heading-text .home-hero__animate .t .clip {
    width: 500%;
  }
`

const BackgroundImg = styled.div`
  ${cover()}
  background-image: url(${ChristmasBg.src});
  background-size: cover;
  filter: blur(16px) brightness(40%);
`

const Letters = () => {
  const titleRef = useRef()

  useEffect(() => {
    const titleAnimate = new TitleAnimate(titleRef)
    titleAnimate.init()
  }, [])

  return (
    <Wrapper>
      <BackgroundImg />
      <div className='home-hero__heading' ref={titleRef}>
        <h1 className='visually-hidden'>Animate Anything</h1>
        <h1 id='home-hero-heading' className='home-hero__heading-text heading-xl' aria-hidden='true'>
          <span className='home-hero__animate'>
            <span className='a'>
              <span className='clip'>
                <span>A</span>
              </span>
            </span>
            <span className='n'>
              <div className='home-hero__flair home-hero__flair--windmill'>
                <Title1 />
              </div>
              <div className='home-hero__flair home-hero__flair--circles'>
                <Title2 />
              </div>
              <span className='clip'>
                <span>
                  <span>n</span>
                  <span>a</span>
                </span>
              </span>
            </span>
            <span className='i clip'>
              <span>i</span>
            </span>
            <span className='m clip'>
              <span>m</span>
            </span>
            <span className='a2'>
              <div className='home-hero__flair home-hero__flair--star'>
                <Title3 />
              </div>
              <span className='clip'>
                <span>a</span>
              </span>
            </span>
            <span className='t'>
              <span className='clip'>
                <span>t</span>
                <span>
                  <span>1</span>
                  <span>0</span>
                  <span>0</span>
                </span>
              </span>
            </span>
            <span className='e clip'>
              <span>e</span>
            </span>
          </span>
          <span className='home-hero__anything'>
            <span className='a clip'>
              <span>a</span>
              <span>a</span>
            </span>
            <span className='n clip'>
              <span>n</span>
              <span>n</span>
            </span>
            <span className='y'>
              <span>y</span>
            </span>
            <span className='t'>
              <div className='home-hero__flair home-hero__flair--bolt'>
                <Title4 />
              </div>
              <span>t</span>
            </span>
            <span className='h'>
              <div id='home-hero-squiggle' className='home-hero__flair home-hero__flair--worm'>
                <img src='https://gsap.com/tf-assets/worm-e8f0c8f6.png' />
              </div>
              <span className='clip'>
                <span>h</span>
              </span>
            </span>
            <span className='i'>
              <span>i</span>
            </span>
            <span className='n2 clip'>
              <span>n</span>
            </span>
            <span className='g'>
              <span>g</span>
            </span>
          </span>
        </h1>
      </div>
    </Wrapper>
  )
}

export default Letters
