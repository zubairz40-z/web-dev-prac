import { useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { Monitor, Server, Settings, Zap, Sparkles, BookOpen } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const skillsGridRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]), {
    stiffness: 100,
    damping: 30
  })
  
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "25%"]), {
    stiffness: 100,
    damping: 30
  })

  // GSAP animations
  useEffect(() => {
    if (!isInView) return

    const ctx = gsap.context(() => {
      // Skills cards stagger animation
      if (skillsGridRef.current) {
        const cards = skillsGridRef.current.querySelectorAll('.skill-card')
        gsap.fromTo(cards, 
          { 
            y: 80, 
            opacity: 0, 
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: skillsGridRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [isInView])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "primary-orange",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { 
          name: "HTML5", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
            </svg>
          ),
          color: "text-orange-500"
        },
        { 
          name: "CSS3", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
            </svg>
          ),
          color: "text-blue-500"
        },
        { 
          name: "JavaScript", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
            </svg>
          ),
          color: "text-yellow-500"
        },
        { 
          name: "React.js", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
            </svg>
          ),
          color: "text-cyan-400"
        },
        { 
          name: "Tailwind CSS", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
            </svg>
          ),
          color: "text-teal-400"
        },
        { 
          name: "Next.js", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0803-.0516c-.0516-.0336-.0939-.0696-.1213-.1126l-.0375-.0587.0235-4.274c.0174-3.8723.0235-4.2954.0875-4.3717.0465-.0633.1056-.1204.1784-.1633.0961-.0574.1408-.0645.6093-.0645.5429 0 .6299.0315.7893.2848 0 0 2.2299 3.3802 4.9895 7.5607 2.7593 4.1804 5.1371 7.6948 5.2893 7.8145L6.2584 24h2.4211c2.4211 0 2.4211 0 2.5562-.0187.2299-.0374.4570-.1657.6093-.3416.0939-.1126.8018-1.1938 1.6447-2.5186l1.3231-2.0782L18.5 5.5607 18.5 5.5607c.0188-.0374.0375-.0374.1408-.0374.1408 0 .1408 0 .1408.0374l.0188.0374v9.5607c0 5.2893 0 9.5607.0188 9.5607.0188 0 .8018-.6299 1.7447-1.3996L22 21.2584V5.5607c0-8.6018 0-15.8025-.0188-16.0324-.0375-.4570-.2064-.8018-.4570-1.0096-.1784-.1408-.3584-.2064-.6093-.2064-.3584 0-.6299.1408-.8393.4383-.0516.0748-.8987 1.3231-1.9543 2.8951l-1.9168 2.8577-.0375-.0562c-.0188-.0187-.8393-1.2831-1.8206-2.8014l-1.7823-2.7593c-.0939-.1408-.2627-.3137-.3755-.3137z"/>
            </svg>
          ),
          color: "text-gray-300"
        }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "primary-violet",
      gradient: "from-purple-500 to-indigo-500",
      skills: [
        { 
          name: "Node.js", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
            </svg>
          ),
          color: "text-green-500"
        },
        { 
          name: "Express.js", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.978-2.667a6.047 6.047 0 01-.54-3.95zm11.115-2.301C10.64 6.266 9.006 4.9 6.92 5.027a3.94 3.94 0 00-3.684 3.948c-.126.856 0 1.049.847 1.049h6.834c.013-.217.016-.434.2-.749z"/>
            </svg>
          ),
          color: "text-gray-300"
        },
        { 
          name: "MongoDB", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
            </svg>
          ),
          color: "text-green-600"
        },
        { 
          name: "REST APIs", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          ),
          color: "text-blue-400"
        },
        { 
          name: "JWT Auth", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <circle cx="12" cy="16" r="1"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          ),
          color: "text-yellow-500"
        },
       
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "primary-blue",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { 
          name: "Git & GitHub", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          ),
          color: "text-gray-300"
        },
        { 
          name: "Firebase", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.803 21.93l2.351-14.157-1.605-3.113c-.191-.365-.648-.365-.839 0L4.198 8.773l1.605 13.157zm9.199-19.853c-.108-.17-.302-.253-.49-.204-.188.049-.316.216-.316.414v.001l-.518 10.316L12.059 2.077zm4.97 18.17l-5.175-3.05L4.198 8.773l.599-1.127c.115-.22.378-.302.595-.185L19.473 16.75c.365.196.365.682 0 .878l-1.501.619z"/>
            </svg>
          ),
          color: "text-orange-500"
        },
        { 
          name: "VS Code", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
            </svg>
          ),
          color: "text-blue-500"
        },
        { 
          name: "Figma", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z"/>
            </svg>
          ),
          color: "text-purple-500"
        },
       
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <motion.div 
        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary-orange/8 to-primary-violet/8 rounded-full blur-3xl"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-r from-primary-blue/8 to-primary-orange/8 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "8%"]) }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary-orange/40 mb-4 hover-lift"
            whileHover={{ scale: 1.05 }}
          >
            <Zap size={16} className="text-primary-orange" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Technical Arsenal
            </span>
            <Sparkles size={14} className="text-primary-violet" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          
          <motion.p 
            className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mastering modern technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Grid with Parallax and GSAP */}
        <motion.div
          ref={skillsGridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
          style={{ y }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={categoryVariants} className="skill-card">
              <Card className="glass-strong border-white/10 hover:border-white/20 transition-all duration-500 h-full hover-lift group relative overflow-hidden">
                
                <CardContent className="p-6 relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color} to-${category.color}/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg border border-white/10`}
                      whileHover={{ rotate: 10 }}
                    >
                      <category.icon size={20} className="text-white relative z-10" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg font-bold text-white group-hover:text-primary-orange transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {category.title}
                      </motion.h3>
                      <motion.div 
                        className={`w-12 h-0.5 bg-gradient-to-r from-${category.color} to-${category.color}/50 rounded-full mt-1`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 48 } : {}}
                        transition={{ delay: 0.5 + categoryIndex * 0.2, duration: 0.8 }}
                      />
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        custom={skillIndex}
                        className="group/skill"
                      >
                        <div className="flex items-center gap-3 p-3 glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
                          <motion.div 
                            className={`w-8 h-8 glass rounded-lg flex items-center justify-center ${skill.color} group-hover/skill:scale-110 transition-all duration-300 border border-white/10 hover:border-white/20`}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div>
                            <span className="font-medium text-gray-200 group-hover/skill:text-white transition-colors text-sm">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning & Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <Card className="glass-strong border-primary-violet/20 max-w-4xl mx-auto relative overflow-hidden">
            
            <CardContent className="p-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-blue to-primary-violet flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Zap size={18} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white text-center sm:text-left">Continuous Evolution</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-base max-w-2xl mx-auto">
                Always exploring cutting-edge technologies and frameworks. Currently diving deeper into 
                advanced React patterns, microservices architecture, and cloud technologies.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { name: 'TypeScript', color: 'primary-blue', icon: '📘' },
                  { name: 'GraphQL', color: 'primary-violet', icon: '🔗' },
                  { name: 'Docker', color: 'primary-blue', icon: '🐳' },
                  { name: 'AWS', color: 'primary-orange', icon: '☁️' },
                  { name: 'Redux Toolkit', color: 'primary-violet', icon: '🔄' },
                  { name: 'Socket.io', color: 'primary-blue', icon: '⚡' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-2 glass-strong rounded-xl border border-${tech.color}/30 text-sm font-medium text-${tech.color} hover:bg-${tech.color}/10 transition-all cursor-default hover-lift flex items-center gap-2`}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span className="text-xs">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>


          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
