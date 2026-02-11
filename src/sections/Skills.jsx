import { FaJava, FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, SiMongodb, SiAngular, SiCplusplus, SiMysql, SiJavascript, SiKubernetes, SiHtml5, SiCss3, SiSass, SiBootstrap } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { DiNodejsSmall } from 'react-icons/di';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export default function Skills() {

  const skills = [
    { icon: <SiCplusplus />, name: "C++", color: "#00599C", level: 85 },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" className="w-12 h-12" />, name: "C", color: "#A8B9CC", level: 80 },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E", level: 90 },
    { icon: <SiPython />, name: "Python", color: "#3776AB", level: 85 },
    { icon: <SiHtml5 />, name: "HTML", color: "#E34F26", level: 95 },
    { icon: <SiCss3 />, name: "CSS", color: "#1572B6", level: 95 },
    { icon: <SiSass />, name: "SCSS", color: "#CC6699", level: 85 },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3", level: 80 },
    { icon: <FaReact />, name: "React", color: "#61DAFB", level: 90 },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4", level: 95 },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1", level: 80 },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF", level: 85 },
    { icon: <DiNodejsSmall />, name: "Node.js", color: "#339933", level: 80 },
    { icon: <FaAws />, name: "AWS", color: "#FF9900", level: 75 },
    { icon: <VscAzure />, name: "Azure", color: "#0078D4", level: 70 },
    { icon: <FaDocker />, name: "Docker", color: "#2496ED", level: 75 },
    { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5", level: 65 },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6", level: 80 },
  ];
  const repeated = [...skills, ...skills]

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver((
      [entry]) => {
      setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
    },
      { threshold: [0.1] }
    )
    io.observe(el);
    return () => io.disconnect();

  }, [])

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    }
  }, [active]);



  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }
      x.set(next)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id);
  }, [dir, x]);


  return (
    <section id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[120px] animate-pulse
'/>
        <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[120px] animate-pulse delay-500
' />

      </div>

      <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>
      <motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}

      >
        Modern Applications | Modern Technologies
      </motion.p>

      <div className='relative w-full overflow-hidden pt-28 pb-10'>
        <motion.div
          ref={trackRef}
          className='flex gap-10 text-6xl text-gray-400'
          style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
        >

          {repeated.map((s, i) => (
            <div
              key={i}
              className='flex flex-col items-center gap-2 min-w-[120px] group relative cursor-pointer'
              aria-label={s.name}
              title={s.name}
            >
              <span
                className='transition-all duration-300 transform group-hover:scale-110'
                style={{
                  filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
                }}
              >
                <div
                  className="transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 20px ${s.color})`;
                    e.currentTarget.style.color = s.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 0 rgba(0,0,0,0))";
                    e.currentTarget.style.color = ""; // reset to inherited
                  }}
                >
                  {s.icon}
                </div>
              </span>

              {/* Stats Tooltip */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 bg-gray-900 border border-white/10 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-white">{s.name}</span>
                  <span className="text-xs font-mono text-gray-400">{s.level}%</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden relative">
                  <div
                    className="h-full absolute top-0 left-0 rounded-full transition-all duration-1000 delay-200 ease-out w-0 group-hover:w-[var(--skill-level)]"
                    style={{
                      '--skill-level': `${s.level}%`,
                      backgroundColor: s.color,
                    }}
                  />
                </div>
              </div>


              <p className='text-sm group-hover:text-white transition-colors duration-300'>
                {s.name}
              </p>
            </div>
          ))}
        </motion.div>


      </div>

      <div className="w-full max-w-5xl px-6 mt-16 text-center z-10">
        <h3 className="text-2xl font-semibold mb-6 text-gray-300">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Problem-Solving", "Team Player", "Adaptability", "Critical Thinking"].map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white/10 hover:bg-white/20 border border-white/5 px-6 py-2 rounded-full text-white/90 text-sm sm:text-base font-medium transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

    </section>
  )
}