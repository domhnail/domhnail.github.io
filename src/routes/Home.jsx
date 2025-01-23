import React from 'react'
import  ImageCarousel  from "../ui/ImageCarousel";
import { TypeAnimation } from 'react-type-animation';

const images = [
  { image: "/images/CCN redesign.png", title: "CCN Redesign Project", description:"A new front end for Chebucto Community Net I put together, using Bootstrap customized with SCSS, and JavaScript.", github: "https://github.com/domhnail/CCN-redesign"},
  { image: "/images/cawfee.png", title: "Example storefront", description:"An example storefront I made to learn React, Prisma, SQLite and back end in general.", github: "https://github.com/domhnail/cawfee-api"},
  { image: "/images/ecosystem_simulator.jpg", title:"Ecosystem Simulation", description:"An ecosystem simulation I wrote in C++, relies on classes and vectors. Fully polymorphic.", github: "https://github.com/domhnail/ecosystem_simulation"},
  { image: "/images/animal_images.png", title: "Animal Image Hosting Site", description: "A site for hosting images of animals, done with React, Prisma and SQLite.", github:"https://github.com/domhnail/animal-image-api"},
  { image: "/images/multi_threaded_chat.png", title: "Multi-Threaded Chat Application", description: "A chat application written in C#. Applied multi-threading for asynchronous chat functionality.", github:"https://github.com/domhnail/multi-threaded-chat-application"},
  // TODO: uncomment this when full functionality of loadout rating and image retrieving is achieved.
  // { image: "/images/loadout_value_checker.png", title: "Loadout Value Checker for Team Fortress 2", description: "An early project, scripted with JavaScript to manipulate the DOM. Leverages the backpack.tf, and the Steam API to calculate the ingame and monetary value of a users item loadout in the game, Team Fortress 2.", github:"https://github.com/domhnail/loadout-value-checker"}
]

function Home() {

  return (
    <div className="container">
      <div className="d-flex row mb-3">
        <div className="container col-xl-6 text-start font-color display-1 dblock user-select-none">
          <TypeAnimation sequence={[
            'Cole',
            1000
          ]}
          speed={25}
          repeat={0} 
          cursor={false}
          />
          <br />
          <TypeAnimation sequence={[
            'Dan',
            1000
          ]}
          speed={1}
          repeat={0} 
          cursor={false}
          />
          <br />
          <TypeAnimation sequence={[
            "O'Donnell",
            1000
          ]}
          speed={1}
          repeat={0} 
          cursor={false}
          />
        </div>
        <div className="container col-xl-6 text-end display-1 dblock user-select-none">
          <TypeAnimation preRenderFirstString={true} 
            sequence={[
              "C++",
              3000,
              "C#",
              3000,
              "C",
              3000,
              "Java",
              3000,
              "JavaScript",
              3000,
              "React",
              3000,
              "React Native",
              3000,
              "Linux",
              3000,
              "ASP.NET",
              3000,
            ]}
          speed={25}
          repeat={Infinity} 
          cursor={false}
          />
          <br />
          <TypeAnimation preRenderFirstString={true} 
            sequence={[
              "developer",
              3000,
              "programmer",
              3000
            ]}
          speed={25}
          repeat={Infinity} 
          cursor={false}
          />
          <br />
          <TypeAnimation preRenderFirstString={true} 
            sequence={[
              "/reader",
              3000,
              "/typist",
              3000,
              "/rock_skipper",
              3000,
              "/linux_user",
              3000,
              "/tf2_player",
              3000,
              "/jazz_enjoyer",
              3000,
              "/baker",
              3000
            ]}
          speed={25}
          repeat={Infinity} 
          cursor={false}
          />
          <br />
        </div>
      </div>
      <div>
        <ImageCarousel images={images}></ImageCarousel>
      </div>
    </div>
  )
}

export default Home