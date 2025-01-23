import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function About() {

  return (
    <>
    <div className='mt-lg-5 row justify-content-center'>
    <TypeAnimation preRenderFirstString={true} 
            sequence={[
              "learning: Python",
              3000,
              "learning: ASP.NET",
              3000,
              "learning: Local LLM Training",
              3000,
              "learning: Next.js",
              3000,
              "learning: Image Generation",
              3000,
              "learning: Data Structures",
              3000
            ]}
          speed={25}
          className="mb-3 display-5 dblock user-select-none font-color"
          repeat={Infinity} 
          cursor={false}
      />
      <br />
      <TypeAnimation sequence={[
            "Professionally, I'm a junior dev just getting my legs under me. My core professional interests lie in software development, UI design and web development. My goal is to produce functional software that provides real tangible value to people, and to design it in a way that is aesthetically pleasing as well. Just as complexity does not correlate directly with functionality, simplicity of design does not necessarily mean a lack of appeal in its appearance. Of interest to me are the industries of: energy, environment, marine technology and media.",
            1000
          ]}
          splitter={(str) => str.split(/(?= )/)}
          speed={{type: 'keyStrokeDelayInMs', value: 30}}
          className="mx-5 mb-1 fs-4 col-lg-5 border-end border-bottom border-3"
          repeat={0} 
          cursor={false}
      />
      <TypeAnimation sequence={[
            "Personally, I'm big on literature, especially C.S. Lewis, G.K. Chesterton and Charles Williams. I enjoy the themes of Christian thought, philosophy, morality and history. My taste in music starts at jazz, continues from bossa nova into ambient electronic and ends somewhere around symphonic metal. When I'm not stuck inside I like to hike the trails of Halifax, carrying a book and a foldup chair. When I am stuck inside, I take full advantage of my powerful GPU by playing decade old games, like Team Fortress 2 and Dark Souls 1, on my computer.",
            1000
          ]}
          splitter={(str) => str.split(/(?= )/)}
          speed={{type: 'keyStrokeDelayInMs', value: 30}}
          className="mx-5 fs-4 col-lg-5 border-start border-top border-3"
          repeat={0} 
          cursor={false}
      />
      <br />
      <TypeAnimation preRenderFirstString={true} 
            sequence={[
              "reading: Dostoevsky, Crime and Punishment",
              3000,
              "reading: C.S. Lewis, That Hideous Strength",
              3000,
              "reading: Old Testament, Judges",
              3000,
            ]}
          speed={25}
          className="mt-3 display-5 dblock user-select-none text-end font-color"
          repeat={Infinity} 
          cursor={false}
      />
    </div>
    </>
  )
}

export default About