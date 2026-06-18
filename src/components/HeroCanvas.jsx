import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

// Accent palette — mirrors --accent / --accent-2 in styles/index.css
const ACCENT = '#5b8cff'
const ACCENT_2 = '#a26bff'

function Blob({ animate }) {
  const mesh = useRef()

  useFrame((state, delta) => {
    if (!mesh.current || !animate) return
    mesh.current.rotation.y += delta * 0.12
    mesh.current.rotation.z += delta * 0.04
  })

  return (
    <Float speed={animate ? 1.1 : 0} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={mesh} args={[1.35, 64, 64]} scale={1.45}>
        <MeshDistortMaterial
          color={ACCENT}
          emissive={ACCENT_2}
          emissiveIntensity={0.35}
          roughness={0.28}
          metalness={0.45}
          distort={animate ? 0.42 : 0.32}
          speed={animate ? 1.6 : 0}
        />
      </Sphere>
    </Float>
  )
}

export default function HeroCanvas() {
  // Respect the user's reduced-motion preference: keep a static frame, no animation.
  const [animate, setAnimate] = useState(true)
  // Pause rendering once the hero scrolls out of view to save GPU/battery.
  const [inView, setInView] = useState(true)
  const wrap = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setAnimate(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!wrap.current) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    )
    io.observe(wrap.current)
    return () => io.disconnect()
  }, [])

  // 'always' only while animating AND on-screen; a single static frame otherwise.
  const frameloop = animate ? (inView ? 'always' : 'never') : 'demand'

  return (
    <div className="hero__canvas" aria-hidden ref={wrap}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={frameloop}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color={ACCENT} />
        <pointLight position={[-4, -2, -3]} intensity={1.4} color={ACCENT_2} />
        <Suspense fallback={null}>
          <Blob animate={animate} />
        </Suspense>
      </Canvas>
    </div>
  )
}
