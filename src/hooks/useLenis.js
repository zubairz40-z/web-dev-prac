import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth, lag-free settings
    const lenis = new Lenis({
      duration: 1.8, // Optimized for smoothness without lag
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.6, // Balanced for responsiveness
      smoothTouch: true,
      touchMultiplier: 1.2,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 0.5, // Optimized for smooth scrolling
      // Performance optimizations
      wrapper: window,
      content: document.documentElement,
      autoResize: true,
      syncTouch: true,
      touchInertiaMultiplier: 25,
      overscroll: false,
      // Prevent infinite scrolling
      lerp: 0.08, // Smooth interpolation
    })

    // Optimized animation frame loop for 60fps performance
    let animationId
    function raf(time) {
      lenis.raf(time)
      animationId = requestAnimationFrame(raf)
    }
    animationId = requestAnimationFrame(raf)

    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href').substring(1)
        const element = document.getElementById(id)
        if (element) {
          lenis.scrollTo(element, { 
            offset: -100, // Optimized offset
            duration: 2.0, // Smooth but not too slow
            easing: (t) => 1 - Math.pow(1 - t, 3)
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Optimize scroll behavior
    document.documentElement.style.scrollBehavior = 'auto'

    // Performance optimization: stop Lenis when page is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      lenis.destroy()
    }
  }, [])
}