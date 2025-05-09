import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import gameOnImg from './assets/gameon.jpg';
import tableTennis from './assets/table.jpg';
import aboutus from './assets/aboutus.png';
import element from './assets/graphic.png';
import sport from './assets/sport.png';
import infographic2 from './assets/Inforgraphic2.png'
import infographic from './assets/Inforgraphic.png'
import infographic3 from './assets/Inforgraphic3.png'
import infographic4 from './assets/Inforgraphic4.png'
import batminton from './assets/batminton 1.jpg'
import tabTennis from './assets/tab tennis.jpg'
import cricket from './assets/crick 1.jpg'
import shuttle from './assets/shuttle.jpg'
import laksh from './assets/laksh.png'
import endiya from './assets/Endiya.png'
import gopi from './assets/gopichand.png'
import tabletennis from './assets/tabletennis.jpg'
import logo from './assets/logo.png'
import hsbc from './assets/hsbc.png'
import logo2 from './assets/logo 2.png'
import tie from './assets/tie.jpg'
import traxn from './assets/traxn.png'
import gopichand from './assets/Gopichand.jpg'
import satish from './assets/satish.png'

function App() {
  useEffect(() => {
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        } else {
          reveal.classList.remove('active');
        }
      });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check in case elements are already in view when page loads
    revealOnScroll();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  // Function to close the navbar when a nav item is clicked
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainnav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} alt="Game On" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus" onClick={closeNavbar}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sports" onClick={closeNavbar}>
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule" onClick={closeNavbar}>
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://96r19ce4.forms.app/gameonevent-team-registration" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid" id="heading">

        <div className="heading container">
          <div className="darkdiv"></div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="headrow">
                <h1>GAME ON!</h1>
                <p>
                A sports and wellbeing experience designed for India's startup ecosystem. 
                </p>
                {/* <a href="https://96r19ce4.forms.app/gameonevent-team-registration" target="_blank" rel="noopener noreferrer">
                  <button className="register-btn">Register Now</button>
                </a> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
              <div className="card headcard p-3">
                <img src={tabletennis} className="card-img-top" alt="Game On" />
                <div className="card-body pb-0">
                  <h6 className="fw-bold">Jun 6-7, 2025</h6>
                  <h1 className="mb-3">Bengaluru</h1>
                  <p>Entry capped at 200. Find your teammate and register now.</p>
                  <a href="https://96r19ce4.forms.app/gameonevent-team-registration" target="_blank" rel="noopener noreferrer">
                    <button className="register-btn">Register Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='aboutCont' id='aboutus'>      
        <div className="container ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <img src={aboutus} className="about-img" alt="About Us" />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            
            <h4>About Us</h4>
            <h2 className="py-2">
            Redefining Success Through Sport
            </h2>
            <p>
            The startup world moves fast — but real progress comes from rhythm, reflection, and energy.
Game On! is a space to recharge, reconnect, and rediscover the qualities that fuel sustainable leadership. <br /> <br />
Through sport, we bring back the essentials: focus, teamwork, discipline, and consistency.

                   </p>
            
          </div>
        </div>
        <div className="cardSection reveal fade-up">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Beyond Business</h5>
                  <p className="card-text">
                  Game On! isn’t another industry meet-up. It brings the community together around shared energy, movement, and joyful participation.                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mental Wellbeing</h5>
                  <p className="card-text">
                  Sport naturally builds focus and emotional strength — helping leaders stay clear, calm, and purposeful in everything they do.                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Community Connection</h5>
                  <p className="card-text">
                  Build real relationships with peers, investors, and enablers in an open, collaborative space designed for shared growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card testimoniCard  p-4 ">
          <div className="row">
            <div className="col-12 col-md-2">
             <img className='img-fluid' style={{ width: '200px',borderRadius: '8px' }} src={gopichand} alt="" />
            </div>
            <div className="col-12 col-md-10 pt-sm-3 pt-3">
              <p>"Sport is one of the best teachers of leadership. It builds not just physical endurance but clarity, discipline and emotional strength. These are qualities every entrepreneur needs."</p>
              <h4>— Pullela Gopichand, Chief National Coach and Trustee Board Member - Endiya Partners</h4>
            </div>
          </div>
        </div>
      </div></section>


      <div className="container-fluid benefits" id="movement">
        <div className="themeflat-container">
          <h4 className="text-center text-primary">
            Why Join the Movement
          </h4>
          <h2 className="text-white text-center py-2" style={{textTransform: 'uppercase'}}>
            Game On! is more than an event
          </h2>
          <p className="text-center text-white">
          It’s a movement to reimagine how we build — with clarity, collaboration, and wellbeing at the centre.
          </p>
          <div className="row text-white">
            <div className="col-md-4 benefit-on-left">
              <div className='benefit-item'>
                <div className="benefit-content text-end">
                  <h4 className="title-benefit">Sustainable Performance</h4>
                  <p className="description-benefit">Balancing effort with recovery leads to lasting impact.</p>
                </div>
                <div className="benefit-number"><span className="number wow zoomIn  animated" style={{visibility: "visible"}}>01</span></div>
              </div>
              <div className='benefit-item'>
              <div className="benefit-content text-end">
                <h4 className="title-benefit">Holistic Leadership</h4>
                <p className="description-benefit"> Physical, mental, and emotional strength helps leaders grow in every direction.</p>
              </div>
              <div className="benefit-number"><span className="number wow zoomIn  animated" style={{visibility: "visible"}}>02</span></div>

              </div>
            </div>


            <div className="col-md-4 benefit-center">
              <div className="benefit-video">
                <img className="video" src={shuttle} alt="" />
                <a className="popup-youtube">
                  <i className="icon-play3"></i>
                </a>
                <img className="shape-video-1" src={infographic} alt="" />
                <img className="shape-video-2" src={infographic2} alt="" />
                <img className="shape-video-3" src={infographic4} alt="" />
                <img className="shape-video-4" src={infographic3} alt="" />
              </div>
            </div>


            <div className="col-md-4 benefit-on-right">
              <div className="benefit-item">
              <div className="benefit-number"><span className="number wow zoomIn  animated" style={{visibility: "visible"}}>03</span></div>

                <div className="benefit-content">
                  <h4 className="title-benefit">Collective Wisdom</h4>
                  <p className="description-benefit">When people connect beyond roles, they create lasting insights and support.</p>
                </div>
              </div>
              <div className="benefit-item">
              <div className="benefit-number"><span className="number wow zoomIn  animated" style={{visibility: "visible"}}>04</span></div>

                <div className="benefit-content">
                  <h4 className="title-benefit">Long-Term Advantage</h4>
                  <p className="description-benefit"> Energised, balanced teams achieve more — together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="exclusive" id="">
        <div className="container">
          <h2 className=" text-center py-2" style={{textTransform: 'uppercase'}}>
            The Exclusive Experience
          </h2>
          <p className="text-center ">
          A space for the startup ecosystem to recharge, reflect and reconnect through sport.</p>

          <div className="row g-4 pt-3 ">
            <div className="col-lg-3 col-md-6 col-sm-12 reveal">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Curated Community</h3>
                  <p className="card-text">
                  Limited to 200 entries from across the startup ecosystem. Every moment is designed for genuine connection and shared intent.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 reveal delay-1">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Designed for Today’s Builders</h3>
                  <p className="card-text">
                  Game On is aligned with the pace and mindset of startups — combining play, learning, and renewal in a way that feels natural and energising.                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 reveal delay-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">From Court to Company</h3>
                  <p className="card-text">
                  Sport teaches what daily routines often miss — presence, adaptability, and confidence. These qualities support stronger leadership across all contexts.                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 reveal delay-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Creating Culture, Not Just Moments</h3>
                  <p className="card-text">
                  Game On is a signal. That clarity, wellbeing, and teamwork are essential, not optional.                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className='container-fluid sportsSec' id='sports'>
    
      <div className="container">
      <h2 className=" text-center py-2" style={{textTransform: 'uppercase'}}>
          Sports
        </h2>
        <p className="text-center ">Each sport reflects the rhythm, pressure and collaboration of the startup ecosystem.</p>
        <div className="row g-4 pt-3 ">
            <div className="col-lg-4 col-md-6 col-sm-12 reveal">
              <div className="card ">
                <img src={batminton} className="card-img-top" alt="Table Tennis" />
                <div className="card-body">
                  <h3 className="card-title pb-1">Badminton</h3>
                  <p className="card-text">
                  Fast-paced and focused — a great way to sharpen coordination, clarity and movement.                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 reveal delay-1">
              <div className="card">
              <img src={tabTennis} className="card-img-top" alt="Table Tennis" />
              <div className="card-body">
                  <h3 className="card-title pb-1">Table Tennis</h3>
                  <p className="card-text">
                  Quick thinking and reflexes meet flow and strategy. Perfect for those who love to adapt in real time.                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 reveal delay-2">
              <div className="card">
              <img src={cricket} className="card-img-top" alt="Table Tennis" />
              <div className="card-body">
                  <h3 className="card-title pb-1">Box Cricket</h3>
                  <p className="card-text">
                  Fun, fast, and collaborative. This game brings rhythm, teamwork and energy together beautifully.                  </p>
                </div>
              </div>
            </div>
            <p className="text-dark pt-4 text-italic"> Note: All events are team-based. No single entries.</p>
          </div>
      </div>

      </div>

      <section id="schedule">
        <div className="container ">
        <h2 className=" text-center py-2 text-white" style={{textTransform: 'uppercase'}}>
          Event Schedule
        </h2>
        <p className="text-center text-white">Bengaluru Edition: June 6-7, 2025 at Lakshyan Academy of Sports</p>

        <h3 className="text-white py-2">Day 1 : Friday, June 6</h3>

        <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th className="col-3">Time</th>
            <th className="col-6">Activity</th>
            <th className="col-3">Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Time">1:00 - 2:00 PM</td>
            <td data-label="Activity">Registration & Kit Collection</td>
            <td data-label="Venue">Reception Area</td>
          </tr>
          <tr>
            <td data-label="Time">1:00 - 1:45 PM</td>
            <td data-label="Activity">Inauguration Address by Pullela Gopichand</td>
            <td data-label="Venue">Badminton Court</td>
          </tr>
          <tr>
          <td data-label="Time">2:00 - 6:00 PM</td>
            <td data-label="Activity">Tournament Matches (All Sports)</td>
            <td data-label="Venue">Respective Courts</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-white py-3">Day 2 : Saturday, June 7</h3>

      <table className="table table-bordered table-dark ">
      <thead>
        <tr>
          <th className="col-3">Time</th>
          <th className="col-6">Activity</th>
          <th className="col-3">Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Time">10:00 - 6:00 PM</td>
          <td data-label="Activity">Tournament Matches (All Sports)</td>
          <td data-label="Venue">Respective Courts</td>
        </tr>
        <tr>
          <td data-label="Time">5:00 - 7:45 PM</td>
          <td data-label="Activity">Keynote & Media Interactions</td>
          <td data-label="Venue">Multipurpose Hall</td>
        </tr>
        <tr>
        <td data-label="Time">6:00 - 7:00 PM</td>
          <td data-label="Activity">Award Ceremony & Closing</td>
          <td data-label="Venue">Main Court</td>
        </tr>

      </tbody>
      </table>
        </div>        
      </section>

      <section id="joinMovement">
        <div className="container">
        <h2 className=" text-center pb-5" style={{textTransform: 'uppercase'}}>
          The Movement Behind Game On!
        </h2>
        <div className="row">
           <div className="col-12 col-md-6">

              <h3 className='pb-2'>Endiya Partners</h3>
              <p>Endiya Partners is an early-stage venture capital firm focused on backing India's most promising product startups across Enterprise, Industrial Tech, and Healthcare. With deep domain expertise and extensive experience in entrepreneurship and operations, the Endiya team plays a crucial role in developing scalable businesses.

Game On! reflects Endiya's belief that strong, healthy people build stronger companies. Supporting founder wellbeing is a key part of the firm's approach, with health and balance seen as essential for long-term success.</p>
           </div>
           <div className="col-12 col-md-6">

              <h3 className='pb-2'>Pullela Gopichand Badminton Academy</h3>
              <p>PGBA, founded in 2004 by All England Open Badminton Champion Pullela Gopichand, is recognized by the Ministry of Sports, Sports Authority of India (SAI), and the Badminton Association of India (BAI). The academy has trained several of the world's leading badminton players and emphasizes mental wellness, recognizing emotional wellbeing as crucial to an athlete's success.

Pullela Gopichand brings decades of experience in building high-performance mindsets both on and off the court to Game On!</p>
           </div>
         </div>
         <div className="infinite-container py-3">
          <div className="infinite-loop">
            {[...Array(3)].flatMap(() => [ hsbc, endiya, tie, traxn, gopi,  laksh,]).map((img, idx) => (
              <div key={idx} className="loop-item">
                <img src={img} className="img-fluid" alt="loop image" />
              </div>
            ))}
          </div>
        </div>
        <div className="card testimoniCard p-4 ">
          <div className="row">
            <div className="col-12 col-md-2">
              <img className='img-fluid' style={{ width: '200px',borderRadius: '8px' }} src={satish} alt="" />
            </div>
            <div className="col-12 col-md-10 pt-3  ">
            <p>"Game On! is how we bring the ecosystem together — not just to participate, but to reconnect. Whether on the court or in the company, strong teams grow through shared rhythm and purpose."</p>
            <h4>— Sateesh Andra, Founding Partner, Endiya Partners</h4>
          </div>
          </div>
        </div>
      </div>

      </section>

      <section id='advertiser'>
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-5">
            <img src={aboutus} style={{maxWidth: '100%'}} alt="" />
          </div>
          <div className="col-12 col-md-7 pt-sm-4">
              <h2 className=" py-2 text-white" style={{textTransform: 'uppercase'}}>
              Join the Movement
              </h2>
              <h5 className="py-2">
               Eligibility criteria<br />
              </h5>
              <div>
              <p className='p-0 m-0'>Open to:</p>
              <ul>
                <li>Startup founders & leadership teams</li>
                <li>VCs, angel investors</li>
                <li>Accelerators & incubators teams</li>
                <li>Ecosystem enablers</li>
              </ul>
              <p className="text-white pt-4 text-italic">Note : Each registration must be for a team of 2–4 players (no individual entries).
              </p>
              </div>
              
              
                <a href="https://96r19ce4.forms.app/gameonevent-team-registration" target="_blank" rel="noopener noreferrer">
                  <button className="register-btn">Register Now</button>
                </a> 
              <p className="text-white pt-4">For inquiries, please write to <a href="mailto:contactus@gameonevent.in" style={{color: 'white'}}>contactus@gameonevent.in</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id='footer'>
        <div className="container">
          <div className="row">
            <div style={{paddingRight: '4rem'}} className="col-lg-5 col-md-5 col-sm-12" >
              <img className='logo2 pb-4' src={logo2} alt="Game On" />

              <p style={{fontSize: '20px'}}>A first-of-its-kind sports tournament built to promote wellbeing, resilience, and leadership within India's startup ecosystem.</p>
            {/* <ul className='d-flex gap-3'>
              <li><a  href="https://www.instagram.com/gameonindia/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/gameon-india/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/gameonindia/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul> */}

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 text-cente">
              <h3 className='pb-2'>Quick Links</h3>
              <ul>
                <li><a href="#aboutus">About</a></li>
                <li><a href="#sports">Sports</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="https://96r19ce4.forms.app/gameonevent-team-registration" target="_blank" rel="noopener noreferrer">Register</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 contactUs">
              <h3 className='pb-2'>Contact</h3>
              <p>Email : <a href="mailto:gameon@endiya.com" >contactus@gameonevent.in </a></p>
              <p>Media : <a href="mailto:anuradha@moatglobal.com" >anuradha@moatglobal.com</a></p>
            </div>
          </div>
          <hr />
          <p className='text-center'>&copy; 2025 Game On. | Organized by Endiya Partners & Pullela Gopichand Badminton Academy</p>
        </div>
      </section>
    </>
  );
}

export default App;
