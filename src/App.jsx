import { useState } from 'react'

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

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const navLinks = document.querySelector('nav ul');
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
      navLinks.classList.remove('nav-toggle');
    });
  });
  const navToggle = function () {
    navLinks.classList.toggle('nav-toggle');
  }

  return (
    <>
      <header>
        <div className="container">
          <nav className='flex'>
            <div className="branding"><h2>CLAN HEALTH</h2></div>
            <ul className='flex'>
              <li><a href='#'>ABOUT</a></li>
              <li><a href='#'>CONTACT</a></li>
              <li><a href='#'>GALLERY</a></li>
              <li onClick={() => setSidebarActive(true)}><a href="#">SIDEBAR <i className="fa-solid fa-bars"></i></a></li>
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
            <button className="btn-primary flex">
              <div className="btn-content">READ MORE</div><div><i className="fa-solid fa-arrow-right"></i></div></button>
          </div>
          <img src={heroBackground} alt="" className='hero-background' />
          <img src={personImg} alt="" className='hero-person' />
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
            <i className="fa-solid fa-phone"></i>
            <h5>QUALITY EQUIPMENT</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
          <div className='goal'>
            <i className="fa-solid fa-phone"></i>
            <h5>NUTRITION PLAN</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
          <div className='goal'>
            <i className="fa-solid fa-phone"></i>
            <h5>SHOWER SERVICE</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi?</p>
          </div>
          <div className='goal'>
            <i className="fa-solid fa-phone"></i>
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
            <img src={benefit1} alt="" />
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="benefit">
            <img src={benefit2} alt="" />
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="benefit">
            <img src={benefit3} alt="" className='enlarge-image' />
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="benefit">
            <img src={benefit4} alt="" />
            <h6>MOVEMENT</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
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
          <div className='contact-form'>
            <h3>CONTACT</h3>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='E-mail' />
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button className="btn-primary flex">
              <div className="btn-content">READ MORE</div><div><i className="fa-solid fa-arrow-right"></i></div>
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
    </>
  )
}

export default App
