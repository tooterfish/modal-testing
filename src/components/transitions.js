import { keyframes } from "styled-components"

const fadeIn = () => keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOut = () => keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const slideUpToTop = () => keyframes`
  0% {transform: translateY(0px)}
  100% {transform: translateY(-1000px)}
`

const slideDownFromTop = () => keyframes`
  0% {transform: translateY(-1000px)}
  100% {transform: translateY(0)}
`

const slideDownToBottom = () => keyframes`
  0% {transform: translateY(0)}
  100% {transform: translateY(1000px)}
`

const inLeft = () => keyframes`
  0% {transform: translateX(-2000px)}
  100% {transform: translateX(0)}
`

const outLeft = () => keyframes`
  0% {transform: translateX(0)}
  100% {transform: translateX(-2000px)}
`

const skewIn = () => keyframes`
  0% { transform: translateX(-200px) skew(40deg, 50deg) }
  100% { transform: translateX(0) skew(0deg, 0deg) }
`

const skewOut = () => keyframes`
  0% { transform: translateX(0) skew(0deg, 0deg) }
  100% { transform: translateX(-200px) skew(40deg, 50deg) }
`

const base = {
  'overlayHide': {'anim': fadeOut, 'duration': '0.2s'},
  'overlayShow': {'anim': fadeIn, 'duration': '0.2s'},
  'innerHide': {'anim': '', 'duration': '0.2s'},
  'innerShow': {'anim': '', 'duration': '0.2s'}
}

const slideFromTopToTop = {
  'overlayHide': {'anim': fadeOut, 'duration': '0.2s'},
  'overlayShow': {'anim': fadeIn, 'duration': '0.2s'},
  'innerHide': {'anim': slideUpToTop, 'duration': '0.2s'},
  'innerShow': {'anim': slideDownFromTop, 'duration': '0.2s'}
}

const slideFromTopToBottom = {
  'overlayHide': {'anim': fadeOut, 'duration': '0.2s'},
  'overlayShow': {'anim': fadeIn, 'duration': '0.2s'},
  'innerHide': {'anim': slideDownToBottom, 'duration': '0.4s'},
  'innerShow': {'anim': slideDownFromTop, 'duration': '0.4s'}
}

const slideFromLeft = {
  'overlayHide': {'anim': fadeOut, 'duration': '0.2s'},
  'overlayShow': {'anim': fadeIn, 'duration': '0.2s'},
  'innerHide': {'anim': outLeft, 'duration': '0.4s'},
  'innerShow': {'anim': inLeft, 'duration': '0.4s'}
}

const skew = {
  'overlayHide': {'anim': fadeOut, 'duration': '0.2s'},
  'overlayShow': {'anim': fadeIn, 'duration': '0.2s'},
  'innerHide': {'anim': skewOut, 'duration': '0.2s'},
  'innerShow': {'anim': skewIn, 'duration': '0.2s'}
}

export default {base, slideFromTopToTop, slideFromTopToBottom, slideFromLeft, skew}