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

  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-dark" id="mainnav">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn px-3"
                  style={{ borderRadius: '20px' }}
                  href="https://96r19ce4.forms.app/sports-registration-form" target="_blank" rel="noopener noreferrer"
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
                  A sports-driven well-being movement designed for India's
                  startup ecosystem. Empowering founders and teams to stay
                  active, healthy, and connected.
                </p>
                <a href="https://96r19ce4.forms.app/sports-registration-form" target="_blank" rel="noopener noreferrer">
                  <button className="register-btn">Register Now</button>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
              <div className="card headcard p-3">
                <img src={tabletennis} className="card-img-top" alt="Game On" />
                <div className="card-body pb-0">
                  <h6 className="fw-bold">Jun 6-7, 2025</h6>
                  <h1 className="mb-3">Bengaluru</h1>
                  <p>Coming Soon : Mumbai & Delhi</p>
                  <a href="https://96r19ce4.forms.app/sports-registration-form" target="_blank" rel="noopener noreferrer">
                    <button className="register-btn">Register Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container aboutCont py-4 reveal fade-bottom" id='aboutus'>
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
            At a time when the startup world is grappling with stress, fatigue, and an always-on culture, Game On! offers a much-needed pause.

It's not just a break from the hustle — it's a powerful reminder that true success is built on rhythm, resilience, and recovery.

Through the spirit of sport, we're bringing founders, investors, and ecosystem enablers back to the fundamentals: focus, teamwork, discipline, and sustainable performance.

Game On! isn't about competition for its own sake — it's about redefining what it means to lead, build, and thrive in today's high-pressure world.
            </p>
            
          </div>
        </div>
        <div className="cardSection">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Beyond Business</h5>
                  <p className="card-text">
                    Game On! brings the ecosystem together not for deal-making
                    or networking, but for something more fundamental—shared
                    energy, movement, and joy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mental Wellbeing</h5>
                  <p className="card-text">
                    Build mental resilience and emotional strength through the
                    discipline and focus that competitive sport naturally
                    cultivates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Community Connection</h5>
                  <p className="card-text">
                    Form authentic relationships with peers, investors, and
                    enablers in a non-transactional environment where shared
                    values take center stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card testimoniCard  p-4 ">
          <p>"Sport is one of the best teachers of leadership. It builds not just physical endurance, but clarity, discipline, and emotional strength—qualities every entrepreneur needs."</p>
          <h4>— Pullela Gopichand, Chief National Coach and Trustee Board Member at Endiya Partners</h4>
        </div>
      </div>

      <div className="container-fluid benefits" id="movement">
        <div className="themeflat-container">
          <h4 className="text-center text-primary">
            Why Join the Movement
          </h4>
          <h2 className="text-white text-center py-2" style={{textTransform: 'uppercase'}}>
            Game On! is more than an event
          </h2>
          <p className="text-center text-white">
            It's a movement redefining how we
            approach entrepreneurship and wellbeing in India's startup
            ecosystem.
          </p>
          <div className="row text-white">
            <div className="col-md-4 benefit-on-left">
              <div className='benefit-item'>
                <div className="benefit-content text-end">
                  <h4 className="title-benefit">Sustainable Performance</h4>
                  <p className="description-benefit">Founders who balance work and recovery achieve true high performance.</p>
                </div>
                <div className="benefit-number"><span className="number wow zoomIn  animated" style={{visibility: "visible"}}>01</span></div>
              </div>
              <div className='benefit-item'>
              <div className="benefit-content text-end">
                <h4 className="title-benefit">Holistic Leadership</h4>
                <p className="description-benefit">Developing physical, mental, and emotional potential accelerates growth.</p>
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
                  <h4 className="title-benefit">Collective Resilience</h4>
                  <p className="description-benefit">Sharing challenges builds collective wisdom and support.</p>
                </div>
              </div>
              <div className="benefit-item">
              <div className="benefit-number"><span className="number wow zoomIn  animated" style={{visibility: "visible"}}>04</span></div>

                <div className="benefit-content">
                  <h4 className="title-benefit">Competitive Advantage</h4>
                  <p className="description-benefit">Companies led by balanced, resilient founders outperform those driven by burnout culture.</p>
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
          Game On! is carefully designed for founders who want to connect authentically while building resilience.
          </p>

          <div className="row g-4 pt-3 ">
            <div className="col-lg-3 col-md-6 col-sm-12 reveal">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Curated Community</h3>
                  <p className="card-text">
                  Limited to 200 participants from India's most promising startups and investment firms. Every interaction is an opportunity to connect with someone making a difference in the ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 reveal delay-1">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Founder-First Design</h3>
                  <p className="card-text">
                  Every aspect of Game On! is designed with the unique pressures of founder life in mind. Interact with peers who truly understand your journey—no explanation needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 reveal delay-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Wisdom Transfer</h3>
                  <p className="card-text">
                  Learn performance psychology techniques from elite athletes and coaches that translate directly to entrepreneurial challenges. These insights aren't available in typical business settings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 reveal delay-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title pb-1">Legacy Building</h3>
                  <p className="card-text">
                  Be part of establishing a new culture in India's startup ecosystem—one that values sustainable success and human flourishing alongside business metrics.
                  </p>
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
        <p className="text-center ">Game On! is carefully designed for founders who want to connect authentically while building resilience.</p>
        <div className="row g-4 pt-3 ">
            <div className="col-lg-4 col-md-6 col-sm-12 reveal">
              <div className="card ">
                <img src={batminton} className="card-img-top" alt="Table Tennis" />
                <div className="card-body">
                  <h3 className="card-title pb-1">Badminton</h3>
                  <p className="card-text">
                  Limited to 200 participants from India's most promising startups and investment firms. Every interaction is an opportunity to connect with someone making a difference in the ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 reveal delay-1">
              <div className="card">
              <img src={tabTennis} className="card-img-top" alt="Table Tennis" />
              <div className="card-body">
                  <h3 className="card-title pb-1">Table Tennis</h3>
                  <p className="card-text">
                  Table tennis develops hand-eye coordination, quick reflexes, and strategic thinking. Like startup pivots, it's about reading patterns and making split-second adjustments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 reveal delay-2">
              <div className="card">
              <img src={cricket} className="card-img-top" alt="Table Tennis" />
              <div className="card-body">
                  <h3 className="card-title pb-1">Box Cricket</h3>
                  <p className="card-text">
                  A team sport that builds collaboration, communication, and leadership. Box cricket teaches resource allocation, role clarity, and the value of combined effort—just like scaling a company.
                  </p>
                </div>
              </div>
            </div>

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

Game On! reflects Endiya's belief that strong, healthy founders build stronger companies. Supporting founder wellbeing is a key part of the firm's approach, with health and balance seen as essential for long-term success.</p>
           </div>
           <div className="col-12 col-md-6">

              <h3 className='pb-2'>Pullela Gopichand Badminton Academy</h3>
              <p>PGBA, founded in 2004 by All England Open Badminton Champion Pullela Gopichand, is recognized by the Ministry of Sports, Sports Authority of India (SAI), and the Badminton Association of India (BAI). The academy has trained several of the world's leading badminton players and emphasizes mental wellness, recognizing emotional wellbeing as crucial to an athlete's success.

Pullela Gopichand brings decades of experience in building high-performance mindsets both on and off the court to Game On!</p>
           </div>
         </div>
         <div className="infinite-container py-3">
          <div className="infinite-loop">
            {[...Array(3)].flatMap(() => [endiya, gopi, laksh, hsbc]).map((img, idx) => (
              <div key={idx} className="loop-item">
                <img src={img} className="img-fluid" alt="loop image" />
              </div>
            ))}
          </div>
        </div>
        <div className="card testimoniCard p-4 ">
          <p>"Startup founders operate in high-pressure environments with little downtime. Game On! is a way to bring our ecosystem together, not just to compete, but to connect. Whether on the court or in the boardroom, strong teams thrive on rhythm, trust, and shared experience."</p>
          <h4>— Sateesh Andra, Founding Partner, Endiya Partners</h4>
        </div>
      </div>

      </section>

      <section id='advertiser'>
        <div className="container">
            <div className="row">
            <div className="col-5">
            <img src={aboutus} style={{maxWidth: '100%'}} alt="" />
          </div>
          <div className="col-7">
              <h2 className=" py-2 text-white" style={{textTransform: 'uppercase'}}>
              Join the Movement
              </h2>
              <p className="text-white">Open to early and growth-stage startups, venture capital firms, accelerators, and incubators.
                Registration is limited to ensure a quality experience. Sign up today!
                Register Now</p>
                <a href="https://96r19ce4.forms.app/sports-registration-form" target="_blank" rel="noopener noreferrer">
                  <button className="register-btn">Register Now</button>
                </a>
              <p className="text-white pt-4">For inquiries, please write to <a href="mailto:gameon@endiya.com" style={{color: 'white'}}>gameon@endiya.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id='footer'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className='pb-2'>Game On</h3>
              <p style={{fontSize: '20px'}}>A first-of-its-kind sports tournament built to promote wellbeing, resilience, and leadership within India's startup ecosystem.</p>
            <ul className='d-flex gap-3'>
              <li><a  href="https://www.instagram.com/gameonindia/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/gameon-india/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/gameonindia/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className='pb-2'>Quick Links</h3>
              <ul>
                <li><a href="#aboutus">About</a></li>
                <li><a href="#sports">Sports</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#joinMovement">Register</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 contactUs">
              <h3 className='pb-2'>Contact</h3>
              <p>Email : <a href="mailto:gameon@endiya.com" >gameon@endiya.com</a></p>
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
