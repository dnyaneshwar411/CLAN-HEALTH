import { useEffect, useRef, useState } from 'react'

import heroBackground from '/assets/header-background-image.png';
import personImg from '/assets/header-person.png';
import yearImg from '/assets/header-number.png';
import Services from './Components/Services';
import Programs from './Components/Programs';
import benefit1 from '/assets/benefit-1.png';
import benefit2 from '/assets/benefit-2.png';
import benefit3 from '/assets/benefit-3.png';
import benefit4 from '/assets/benefit-4.png';
import brand1 from '/assets/brand1.png';
import brand2 from '/assets/brand2.png';
import brand3 from '/assets/brand3.png';
import brand4 from '/assets/brand4.png';
import brand5 from '/assets/brand5.png';
import Trainers from './Components/Trainers';
import BMICalculator from './Components/BMICalculator';
import Event from './Components/Event';
import icon1 from '/assets/icons/equipment.png'
import icon2 from '/assets/icons/planning.png'
import icon3 from '/assets/icons/service.png'
import icon4 from '/assets/icons/heart.png'
import { NavLink } from 'react-router-dom';
import aboutUs from '/assets/about-us.webp'
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

import trainer1 from '/assets/gallery/trainer1.jpeg';
import trainer2 from '/assets/gallery/trainer2.jpeg';
import trainer3 from '/assets/gallery/trainer3.jpeg';
import trainer4 from '/assets/gallery/trainer4.jpeg';
import trainer5 from '/assets/gallery/trainer5.jpeg';
import trainer6 from '/assets/gallery/trainer6.jpeg';
import trainer7 from '/assets/gallery/trainer7.jpeg';
import trainer8 from '/assets/gallery/trainer8.jpeg';
import peopletraining1 from '/assets/gallery/peopletraining1.jpeg';
import peopletraining2 from '/assets/gallery/peopletraining2.jpeg';
import peopletraining3 from '/assets/gallery/peopletraining3.jpeg';
import peopletraining4 from '/assets/gallery/peopletraining4.jpeg';
import peopletraining5 from '/assets/gallery/peopletraining5.jpeg';
import peopletraining6 from '/assets/gallery/peopletraining6.jpeg';
import peopletraining7 from '/assets/gallery/peopletraining7.jpeg';
import peopletraining8 from '/assets/gallery/peopletraining8.jpeg';
import infrastructure1 from '/assets/gallery/infrastructure1.jpeg';
import infrastructure2 from '/assets/gallery/infrastructure2.jpeg';
import infrastructure3 from '/assets/gallery/infrastructure3.jpeg';
import infrastructure4 from '/assets/gallery/infrastructure4.jpeg';
import infrastructure5 from '/assets/gallery/infrastructure5.jpeg';
import infrastructure6 from '/assets/gallery/infrastructure6.jpeg';
import favIcon from '/assets/icons/favIcon.png';

function App() {
  const galleryImages = [{ image: trainer1, category: 'trainer' }, { image: trainer2, category: 'trainer' }, { image: trainer3, category: 'trainer' }, { image: trainer4, category: 'trainer' }, { image: trainer5, category: 'trainer' }, { image: trainer6, category: 'trainer' }, { image: trainer7, category: 'trainer' }, { image: trainer8, category: 'trainer' }, { image: peopletraining1, category: 'peopleTraining' }, { image: peopletraining2, category: 'peopleTraining' }, { image: peopletraining3, category: 'peopleTraining' }, { image: peopletraining4, category: 'peopleTraining' }, { image: peopletraining5, category: 'peopleTraining' }, { image: peopletraining6, category: 'peopleTraining' }, { image: peopletraining7, category: 'peopleTraining' }, { image: peopletraining8, category: 'peopleTraining' }, { image: infrastructure1, category: 'infrastructure' }, { image: infrastructure2, category: 'infrastructure' }, { image: infrastructure3, category: 'infrastructure' }, { image: infrastructure4, category: 'infrastructure' }, { image: infrastructure5, category: 'infrastructure' }, { image: infrastructure6, category: 'infrastructure' }];
  const [sidebarActive, setSidebarActive] = useState(false);
  const [about, setAbout] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const navLinks = useRef();
  // const events = [
  //   {
  //     startingTime: 10,
  //     event: {
  //       monday: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },
  //       tuesady: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },
  //       wednesday: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },
  //       thursday: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },
  //       friday: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },
  //       saturday: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },
  //       sunday: {
  //         eventType: 'CARDIO',
  //         timing: '10:00 - 11:00',
  //         trainer: 'Randy Nelson'
  //       },

  //     }
  //   }
  // ]
  const sidebarToggle = function () {
    const sidebarWrapper = document.querySelector('.sidebar-wrapper');
    const sidebar = sidebarWrapper.querySelector('#sidebar');
    sidebarWrapper.classlist.toggle('sidebar-toggle');
    sidebar.classlist.toggle('sidebar-toggle');
  }
  const parallaxEffect = function () {
    const headerYearImg = document.querySelector('header .yearImg');
    console.log(headerYearImg);
    console.log(2 + 2)
  }
  const links = document.querySelectorAll('nav li');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.current.classList.remove('nav-toggle');
    });
  });
  const navToggle = function () {
    navLinks.current.classList.toggle('nav-toggle');
  }
  const noOfImages = function () {
    const images1 = document.querySelectorAll('#gallery img[data-displayed="true"]')
    images1.forEach((image, index) => {
      index >= 6 ? image.style.display = 'none' : null;
    });
  }
  const imageFilter = function (e, filterValue) {
    const images = document.querySelectorAll('#gallery img');
    document.querySelector('.btn-active').classList.remove('btn-active')
    e.target.classList.add('btn-active')
    images.forEach(image => {
      if (image.getAttribute('data-filter') === filterValue || filterValue === '') {
        image.style.display = 'block';
        image.setAttribute('data-displayed', 'true');
      } else {
        image.setAttribute('data-displayed', 'false');
        image.style.display = 'none';
      }
    });
    noOfImages();
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > '100') {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
      window.scrollY > '100' ? setNavBar(true) : setNavBar(false);
    });
  }, []);
  return (
    <>
      <div className="top-button" onClick={() => window.scrollTo(0, 0)}>
        <i className="fa-solid fa-arrow-up"></i>
      </div >
      <header>
        <div className="container" style={navBar ? { paddingTop: '100px' } : null}>
          <nav className={`flex ${navBar ? 'sticky-nav' : null}`}>
            <div className="branding flex"><img src={favIcon} /><h2>CLAN HEALTH</h2></div>
            <ul className='flex' ref={navLinks}>
              <li onClick={() => { setAbout(true) }}><NavLink to='#trainers'>ABOUT</NavLink></li>
              <li><a href='#contact-form'>CONTACT</a></li>
              <li><a href='#gallery'>GALLERY</a></li>
              <li onClick={() => setSidebarActive(true)}><a href="#"><i className="fa-solid fa-bars"></i></a></li>
            </ul>
            <i className="fa-solid fa-bars" onClick={navToggle}></i>
          </nav>
          <div className={`sidebar-wrapper ${sidebarActive ? 'sidebar-toggle' : null}`}>
            <div id="sidebar" className={sidebarActive ? 'sidebar-toggle' : null}>
              <h2>CLAN HEALTH<span><i className="fa-solid fa-xmark" onClick={() => setSidebarActive(false)}></i></span></h2>
              <p>Cum sociis Theme natoque penatibus et magnis dis parturie montes, nascetur ridiculus mus. Curabitur ullamcorper id ultricies nisi.</p>
              <ul className="contact">
                <li><i className="fa-solid fa-phone"></i> +91 95959 68656</li>
                <li><i className="fa-solid fa-location-dot"></i> 184 Main Collins Street, West Victoria 8007</li>
                <li><i className="fa-regular fa-clock"></i> Mon - Sat 8.00 - 18.00, Sunday CLOSED</li>
              </ul>
              <hr />
              <div className="socials">
                <h3>FOLLOW US</h3>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div id="hero">
          <div className="hero-content">
            <h1>CHALLENGE YOUR LIMITS</h1>
            {/* <button className="btn-primary flex">
              <div className="btn-content">READ MORE</div><div><i className="fa-solid fa-arrow-right"></i></div></button> */}
          </div>
          <img src={heroBackground} alt="" className='hero-background' />
          <img src={personImg} style={{ animationDuration: '1200ms', animationDelay: '300ms' }} className='animate__animated animate__wobble hero-person' />
          <img src={yearImg} alt="" className="yearImg" />
        </div >
      </header >
      <Services />
      <div id="trainings">
        <div className="wrapper">
          <h2>TRAINING PROGRAMS</h2>
          <p> Let us take your workout routines to the next level with our full-body programs and intensity challenges. Find a training that matches your needs.</p>
        </div>
        <Programs />
      </div>
      <div id="fitness-goals">
        <div className="wrapper">
          <h2>SET HIGH FITNESS GOALS</h2>
          <p> After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.</p>
        </div>
        <div className="flex">
          <div className='goal'>
            <img src={icon1} alt="" />
            <h5>QUALITY EQUIPMENT</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
          <div className='goal'>
            <img src={icon2} alt="" />
            <h5>NUTRITION PLAN</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
          <div className='goal'>
            <img src={icon3} alt="" />
            <h5>SHOWER SERVICE</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
          <div className='goal'>
            <img src={icon4} alt="" />
            <h5>UNIQUE TO YOUR NEEDS</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
        </div>
      </div>
      <Trainers />
      <div id="benefits">
        <div className="wrapper">
          <h2>STOP WISHING. START DOING</h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing imperdiet elit nean commodo ligula eget dolor. Cum sociis Theme natoque penatibus et magnis dis.</p>
          <hr />
        </div>
        <div className="flex benefit-container">
          <div className="benefit">
            <ScrollAnimation animateOnce duration='1000' animateIn='scrollableParentSelector'>
              <img src={benefit1} alt="" />
            </ScrollAnimation>
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="benefit">
            <ScrollAnimation animateOnce duration='1000' delay='250' animateIn='scrollableParentSelector'>
              <img src={benefit2} alt="" />
            </ScrollAnimation>
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="benefit">
            <ScrollAnimation animateOnce duration='1000' delay='400' animateIn='scrollableParentSelector'>
              <img src={benefit3} alt="" className='enlarge-image' />
            </ScrollAnimation>
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="benefit">
            <ScrollAnimation animateOnce duration='1000' delay='550' animateIn='scrollableParentSelector'>
              <img src={benefit4} alt="" />
            </ScrollAnimation>
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div id="gallery" className='container'>
        <h2>GALLERY</h2>
        <div className="filter-buttons">
          <button className='btn-active' onClick={(e) => imageFilter(e, '')}>All</button>
          <button onClick={(e) => imageFilter(e, 'trainer')}>Trainer</button>
          <button onClick={(e) => imageFilter(e, 'peopleTraining')}>Peoples</button>
          <button onClick={(e) => imageFilter(e, 'infrastructure')}>Infrastructure</button>
        </div>
        <div className="images flex">
          {/* {galleryImages.map(image => (<img key={image.image} ref={element => images.current.push(element)} src={image.image} data-displayed="true" data-filter={image.category} />))} */}
          <img src={infrastructure2} alt="" data-displayed="true" data-filter='infrastructure' />
          <img src={trainer2} alt="" data-displayed="true" data-filter='trainer' />
          <img src={peopletraining1} alt="" data-displayed="true" data-filter='peopleTraining' />
          <img src={trainer3} alt="" data-displayed="true" data-filter='trainer' />
          <img src={infrastructure4} alt="" data-displayed="true" data-filter='infrastructure' />
          <img src={trainer6} alt="" data-displayed="true" data-filter='trainer' />
          <img src={peopletraining6} alt="" data-displayed="true" data-filter='peopleTraining' />
          <img src={trainer7} alt="" data-displayed="true" data-filter='trainer' />
          <img src={peopletraining2} alt="" data-displayed="true" data-filter='peopleTraining' />
          <img src={infrastructure5} alt="" data-displayed="true" data-filter='infrastructure' />
          <img src={trainer5} alt="" data-displayed="true" data-filter='trainer' />
          <img src={infrastructure3} alt="" data-displayed="true" data-filter='infrastructure' />
          <img src={trainer4} alt="" data-displayed="true" data-filter='trainer' />
          <img src={peopletraining8} alt="" data-displayed="true" data-filter='peopleTraining' />
          <img src={trainer1} alt="" data-displayed="true" data-filter='trainer' />
          <img src={peopletraining3} alt="" data-displayed="true" data-filter='peopleTraining' />
          <img src={infrastructure1} alt="" data-displayed="true" data-filter='infrastructure' />
          <img src={peopletraining5} alt="" data-displayed="true" data-filter='peopleTraining' />
          <img src={infrastructure6} alt="" data-displayed="true" data-filter='infrastructure' />
          <img src={peopletraining7} alt="" data-displayed="true" data-filter='peopleTraining' />
        </div>
      </div>
      <div id="testimonial">
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-right"></i>
        <div className="flex">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, neque et veritatis porro ullam atque dolores aperiam consequuntur labore nulla!</p>
          <div>
            <span className="testimonial-person-name">DNYANESHWAR KAWADE</span>, <span className="testimonial-person-address">PUNE</span>
          </div>
        </div>
      </div>
      <div id="bmi-calculator" className='flex'>
        <div>
          <h2>BMI CALCULATOR CHART</h2>
          <div className="content">
            <table>
              <thead>
                <tr>
                  <td>BMI</td>
                  <td>WEIGHT STATUS</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Below 18.5</td>
                  <td>Underweight</td>
                </tr>
                <tr>
                  <td>18.5 - 24.9</td>
                  <td>Healthy</td>
                </tr>
                <tr>
                  <td>24.9 - 29.9</td>
                  <td>Overweight</td>
                </tr>
                <tr>
                  <td>30.0 and Above</td>
                  <td>Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2>CALCULATE YOUR BMI</h2>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dui. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
            <BMICalculator />
          </div>
        </div>
      </div>
      {/* <div id="timetable">
        <div className="timetable-content">
          <h2>CLASSES TIMETABLE</h2>
          <div className="flex program-container">
            <div className="program">EVENTS</div>
            <div className="program">CROSSFIT</div>
            <div className="program">CARDIO</div>
            <div className="program">BOX</div>
            <div className="program">MEDITATION</div>
            <div className="program">YOGA CLASSES</div>
            <div className="program">BODY BALANCE</div>
          </div>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>MONDAY</td>
                <td>TUESDAY</td>
                <td>WEDNESDAY</td>
                <td>THURSDAY</td>
                <td>FRIDAY</td>
                <td>SATURDAY</td>
                <td>SUNDAY</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.00</td>
                <td>CROSSFIT</td>
                <td>CARDIO</td>
                <td>CARDIO3</td>
                <td>CARDIO4</td>
                <td>CARDIO5</td>
                <td>CARDIO6</td>
                <td>CARDIO7</td>
              </tr>
              {events.map(event => <Event event={event} />)}
            </tbody>
          </table>
        </div>
      </div> */}
      <div id="brands-carousel" className='flex'>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
      <footer>
        <div className="flex">
          <div>
            <div className="branding"><h3>CLAN HEALTH</h3></div>
            <p>Cum sociis Theme natoque penatibus et magnis dis parturie montes, nascetur ridiculus mus. Curabitur ullamcorper.</p>
            <ul className="contact">
              <li><i className="fa-solid fa-phone"></i> +91 95959 68656</li>
              <li><i className="fa-solid fa-location-dot"></i> 184 Main Collins Street, West Victoria 8007</li>
              <li><i className="fa-regular fa-clock"></i> Mon - Sat 8.00 - 18.00, Sunday CLOSED</li>
            </ul>
          </div>
          <div className='latest-news'>
            <h3>LATEST NEWS</h3>
            <ul>
              <li>
                <h4>FITNESS CLASS FOR YOU</h4>
                <div className="date">OCTOBER 22, 2022</div>
              </li>
              <li>
                <h4>FITNESS CLASS FOR YOU</h4>
                <div className="date">OCTOBER 22, 2022</div>
              </li>
              <li>
                <h4>FITNESS CLASS FOR YOU</h4>
                <div className="date">OCTOBER 22, 2022</div>
              </li>
            </ul>
          </div>
          <div id='contact-form' className='contact-form'>
            <h3>CONTACT</h3>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='E-mail' />
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button className="btn-primary flex">
              <div className="btn-content">CONTACT</div><div><i className="fa-solid fa-arrow-right"></i></div>
            </button>
          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="flex">
          <p>©2023 CLAN HEALTH, Made by <span className="text-highlighter"><a href="tel: +919067183889">@DNYANESHWAR</a></span></p>
          <div className="socials">
            FOLLOW US &nbsp;
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      {
        about && <div className="about-wrapper flex">
          <div id="about" className='flex'>
            <div><img src={aboutUs} alt="" /></div>
            <div className="about-content">
              <i className="fa-solid fa-xmark" onClick={() => { setAbout(false) }}></i>
              <h2>ABOUT US</h2>
              <p>Welcome to CLAN, your all-in-one fitness destination where we believe in a holistic approach to wellness not only for you but also for your whole family. Our state-of-the-art facility is designed to cater to all your fitness needs, whether you're looking to build muscle, improve cardiovascular health, or find your zen through yoga.</p>

              <p>Our team of experienced trainers and coaches are here to guide you every step of the way, helping you achieve your fitness goals with personalized training plans and expert advice.</p>

              <p>At CLAN, we understand that fitness is more than just exercise. That's why we offer a range of additional services, including baby care, snooker, chess, and a healthy café to make your family time with us as enjoyable and stress-free as possible. We want to create a community of health and wellness that extends beyond just the gym, so you can feel supported and motivated every step of the way.</p>

              <p>Come experience the CLAN difference and start your journey to a healthier, happier you.</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default App
