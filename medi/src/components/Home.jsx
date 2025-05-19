import React from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  

  return (
    <>
      {/* Header */}
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo d-flex align-items-center">
            <h1 className="sitename">MeditationMonastery</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li className="dropdown">
                <a href="#"><span>Sessions</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Meditation Sessions</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Yoga session</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Sections like Hero, About, Gallery, Testimonials, etc., go here */}
        {/* You can extract each into its own component file for clarity */}
        <section id="hero" className="hero section dark-background">
          <img src="/assets/img/hero.png" alt="" className="hero-bg" />
          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div className="col-lg-4 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay="100">
                <img src="/assets/img/lotus.png" className="img-fluid animated" alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-in">
                <h1>Meditation Monastery<span> Kithalella</span></h1>
                <p>The Spirit Of Mindfullness</p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">Book Now</a>
                  <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
                    <i className="bi bi-play-circle"></i><span>Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="wave1" style={{ fill: '#000000', opacity: 0.3 }}>
              <use href="#wave-path" x="50" y="3" />
            </g>
            <g className="wave2" style={{ fill: '#01322089', opacity: 0.2 }}>
              <use href="#wave-path" x="50" y="0" />
            </g>
            <g className="wave3" style={{ fill: '#000000', opacity: 0.1 }}>
              <use href="#wave-path" x="50" y="9" />
            </g>
          </svg>
          
      </section>
        {/* Add other sections here: About, Features, Stats, Details, Gallery, Testimonials, Team, Pricing, FAQ, Contact */}


{/* About section */}
        <section id="about" class="about section">

<div class="container" data-aos="fade-up" data-aos-delay="100">
  <div class="row align-items-xl-center gy-5">

    <div class="col-xl-5 content">
      <h3>About Us</h3>
      <h2>In the heart of mountains, find silence that speaks to your soul.</h2>
      <p>Nestled in the heart of Ella’s lush highlands, Meditation Monastery Stay offers a peaceful retreat where tradition meets comfort. Enjoy elegant accommodations with a sun terrace, scenic gardens, and tranquil outdoor seating areas. Guests can unwind with yoga sessions, explore nearby attractions like Ella Rock and the Nine Arch Bridge, or simply relax in the calm atmosphere of this unique homestay</p>
      <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
    </div>

    <div class="col-xl-7">
      <div class="row gy-4 icon-boxes">

        

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="icon-box " style= {{ overflow: "hidden"}}>
            <img src="assets/img/card1.png" alt="Sorrounding" />

            <div class="card-body" style= {{padding: '20px', height: '50%' , display: 'flex', flexDirection: 'column' , justifyContent: 'center'}}>
              <h3>Breathtaking Views</h3>
              <p>Wake up to misty mountains and the peaceful beauty of Kithalella – a perfect setting for inner stillness.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="icon-box" style= {{ overflow:' hidden'}}>
            <img src="assets/img/card2.png" alt="Sorrounding" />

            <div class="card-body" style= {{padding: '20px', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3>Wholesome Meals</h3>
            <p>Enjoy three nourishing meals a day featuring authentic Sri Lankan flavors or custom meals based on your preferences.</p>
            </div>
          </div>
        </div> 

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="icon-box" style= {{overflow: 'hidden'}}>
            <img src="assets/img/card3.png" alt="Sorrounding" />
            <div class="card-body" style= {{padding: '20px', height: '50%', display: 'flex', flexDirection: 'column',  justifyContent: 'center'}}>
            <h3>Peaceful Accommodation</h3>
            <p>Experience restful nights in our serene and clean rooms designed to harmonize with the natural surroundings.</p>
          </div>
          </div>
        </div> 

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="icon-box" alt="Sorrounding">
            <img src="assets/img/card4.png" alt="Sorrounding" />
            <div class="card-body" style= {{padding: '20px', height: '50%',  display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3>Meditation Sessions</h3>
            <p>Learn and practice mindfulness with the guidance of well-experienced Buddhist monks in a calm, sacred atmosphere.</p>
          </div>
          </div>
        </div> 

      </div>
    </div>

  </div>
</div>

</section>

{/* End of About section */}




{/* Section stats start */}

<section id="stats" class="stats section light-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-emoji-smile"></i>
            <div class="stats-item">
              
              <div class="display-5 fw-bold">1000+</div>
              <p>Happy Clients</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-journal-richtext"></i>
            <div class="stats-item">
              <div class="display-5 fw-bold">30+</div>
              <p>Destinations around Ella</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-headset"></i>
            <div class="stats-item">
              <div class="display-5 fw-bold">24</div>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-door-closed"></i>
            <div class="stats-item">
              <div class="display-5 fw-bold">4</div>
              <p>Rooms</p>
            </div>
          </div>

        </div>

      </div>

    </section>

    {/* Details Section */}
    <section id="details" class="details section">

      
      <div class="container section-title" data-aos="fade-up">
        <h2>Details</h2>
        <div><span>Check Our</span> <span class="description-title">Details</span></div>
      </div>

 <div class="container">

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <img src="assets/img/details-1.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>Free Daily Meditation Sessions — Reconnect with Inner Peace.</h3>
            <p class="fst-italic">
              At Meditation Monastery Stay, we believe true relaxation comes from within. That’s why we offer free guided meditation sessions led by experienced monks in a serene, natural setting. Whether you’re a beginner or a seasoned practitioner, our sessions help you slow down, breathe deeply, and embrace the present moment.
            </p>
            <ul>
              <li><i class="bi bi-check"></i><span>Reduces Stress and Anxiety.</span></li>
              <li><i class="bi bi-check"></i> <span>Promotes relaxation and better rest.</span></li>
              <li><i class="bi bi-check"></i> <span>Encourages self-awareness and mindful choices.</span></li>
            </ul>
          </div>
        </div>
        </div>
    </section>   

    <section id="testimonials" className="testimonials section dark-background">
  <img src="assets/img/testimonials-bg.png" className="testimonials-bg" alt="" />

  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <Swiper
      loop={true}
      speed={600}
      autoplay={{ delay: 5000 }}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...</span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>Export tempor illum tamen malis malis eram quae irure esse labore...</span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla...</span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
          <h3>Matt Brandon</h3>
          <h4>Freelancer</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...</span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
          <h3>John Larson</h3>
          <h4>Entrepreneur</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...</span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </SwiperSlide>

      <div className="swiper-pagination"></div>
    </Swiper>
  </div>
</section>


    
   </main>
    </>
  );
}

export default Home;
