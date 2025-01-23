import { TypeAnimation } from 'react-type-animation';

function Contact() {

  return (
    <div className="d-flex">
      <div className='mt-5 container justify-content-center row'>
        <div className='mt-5 container justify-content-center col-lg-5'>
          <a href="mailto:coledanodonnell@hotmail.com" target="_blank" className='font-color text-decoration-none'>
              <TypeAnimation sequence={[
                    'email me,',
                    1000
                  ]}
                  speed={50}
                  className="mt-3 display-2 dblock contact-links"
                  repeat={0} 
                  cursor={false}
              />
            </a>
            <br />
            <a href="https://github.com/domhnail" target="_blank" className='font-color text-decoration-none'>
              <TypeAnimation sequence={[
                    1000,
                    'check out my github ',
                    1000
                  ]}
                  speed={50}
                  className="mt-5 display-2 dblock contact-links"
                  repeat={0} 
                  cursor={false}
              />
          </a>
          <br />
          </div>
          <div className='mt-5 container justify-content-center col-lg-5'>
          <a href="https://www.linkedin.com/in/cole-o-donnell-52922a223/" target="_blank" className='font-color text-decoration-none'>
            <TypeAnimation sequence={[
                  2500,
                  '...or have a look at my linkedin'
                ]}
                speed={50}
                className="mt-5 display-2 dblock contact-links"
                repeat={0} 
                cursor={false}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact