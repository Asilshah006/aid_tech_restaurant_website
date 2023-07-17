import React from 'react'
import chicken from './pngwing.com.png'
import noodles from './noodles.png'
import pizza from './pizza.png'
import burger from './burger.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'


import person1 from './young-bearded-man-with-striped-shirt.jpg'
import person2 from './blithesome-student-green-t-shirt-posing-with-laptop-indoor-photo-amazed-male-freelancer-isolated.jpg'
import person3 from './indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg'
import person4 from './young-woman-with-round-glasses-yellow-sweater.jpg'



const Content = () => {
  return (
    <>
    <section className='main'>

      
      {/* <div className="home-slider">
        <div className="wrapper"> */}

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay = {{delay:5000}} 
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
      <SwiperSlide><section className="slide">
          <div className="content">
            <span>Our Special Dish</span>
            <h3>Spicy Noodles</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex itaque consequatur qui adipisci quibusdam numquam consectetur soluta, beatae, iure nemo fuga ipsam amet tempora, doloribus facilis reprehenderit? Beatae, dolorem.</p>
            <a href="/" className='btn'>Order Now</a>
          </div>
          <div className="image">
            <img src={noodles} alt="" />
          </div>
        </section>
    </SwiperSlide>
      <SwiperSlide><section className="slide">
          <div className="content">
            <span>Our Special Dish</span>
            <h3>Fried Chicken</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex itaque consequatur qui adipisci quibusdam numquam consectetur soluta, beatae, iure nemo fuga ipsam amet tempora, doloribus facilis reprehenderit? Beatae, dolorem.</p>
            <a href="/" className='btn'>Order Now</a>
          </div>
          <div className="image">
            <img src={chicken} alt="" />
          </div>
        </section>
    </SwiperSlide>
      <SwiperSlide><section className="slide">
          <div className="content">
            <span>Our Special Dish</span>
            <h3>Hot Pizza</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex itaque consequatur qui adipisci quibusdam numquam consectetur soluta, beatae, iure nemo fuga ipsam amet tempora, doloribus facilis reprehenderit? Beatae, dolorem.</p>
            <a href="/" className='btn'>Order Now</a>
          </div>
          <div className="image">
            <img src={pizza} alt="" />
          </div>
        </section>
    </SwiperSlide>

    </Swiper>

    </section>

    <section className='dishes' id='dishes'>
          <h3 className='heading'>Our Dishes</h3>
          <h1 className='sub-heading'>Popular Dishes</h1>
        <div className="box_container">

          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>

          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
          <div className="box">
              <FontAwesomeIcon icon={faEye} className='eye-icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
              <img src={burger} alt="" />
              <h3>tasty Food</h3>
              <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <span>$5.99</span>
              <a href="/" className='btn dishes'>Order Now</a>

          </div>
        </div>
    </section>

    <section className='about' id='about'>
      <h3 className='sub-heading'>About Us</h3>
      <h1 className='heading'>Why Choose Us</h1>
      
      <div className="row">

      <div className="image">
        <img src={pizza} alt="" />
      </div>


      <div className="content">

        <h3>Best Food In The Country</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi officia numquam voluptatum dicta sequi? Dolor, totam, exercitationem aspernatur impedit voluptas qui facere nam ullam ab minus, voluptatum esse labore ad.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ad modi nisi placeat totam voluptates blanditiis assumenda error illo tempore, veniam sequi culpa molestiae nobis autem rem soluta dolores sed!</p>

      <div className="icon_container">
      <div className='icons'>
          <FontAwesomeIcon icon = {faShippingFast} className='shipping-icon'></FontAwesomeIcon>
          <span>Fast Shipping</span>
        </div>
        <div className='icons'>
          <FontAwesomeIcon icon = {faDollar} className='dollar-icon'></FontAwesomeIcon>
          <span>Easy Payment</span>
        </div>
        <div className='icons'>
          <FontAwesomeIcon icon = {faHeadset} className='headset-icon'></FontAwesomeIcon>
          <span>24/7 service</span>
        </div>
      
      </div>

        
      <a href="" className='btn'>Learn More</a>
      </div>

      </div>
    
    </section>

      <section className='menu' id='menu'>

      <h3 className='sub-heading'>Our Menu</h3>
      <h1 className='heading'>Popular Dishes</h1>

      <div className="box_container">

        <div className="box">
          <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
          <img src={burger} alt="" />
          <h3>Delicious Food</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, temporibus?</p>
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <div className="add-to-cart">
              <a href="" className='btn'>Add to Cart</a>
              <span>$5.99</span>
              </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
          <img src={pizza} alt="" />
          <h3>Delicious Food</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, temporibus?</p>
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <div className="add-to-cart">
              <a href="" className='btn'>Add to Cart</a>
              <span>$5.99</span>
              </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
          <img src={noodles} alt="" />
          <h3>Delicious Food</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, temporibus?</p>
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <div className="add-to-cart">
              <a href="" className='btn'>Add to Cart</a>
              <span>$5.99</span>
              </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faHeart} className='heart-icon'></FontAwesomeIcon>
          <img src={chicken} alt="" />
          <h3>Delicious Food</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, temporibus?</p>
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>
              <div className="add-to-cart">
              <a href="" className='btn'>Add to Cart</a>
              <span>$5.99</span>
              </div>
        </div>

      </div>

      </section>

    
    <section className='review' id='review'>


      <h3 className='sub-heading'>Customer Review</h3>
      <h1 className='heading'>What They Say</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      navigation
      autoplay = {{delay:5000}} 
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide>
          
      <div className="slide">
        <div className="user">
          <FontAwesomeIcon icon={faQuoteRight} className='fa-qoute'></FontAwesomeIcon>
          <img src={person1} alt="" height= '150px' />
          
          <div className="name-rat">
          <h3>John Doe</h3>
          
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>

          </div>

        </div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui harum mollitia tenetur cupiditate repellendus obcaecati asperiores fugit magnam fuga perspiciatis quas voluptatem non alias excepturi molestiae, exercitationem, aperiam doloribus culpa!</p>
      </div>

      </SwiperSlide>
      
      
      <SwiperSlide>
          
      <div className="slide">
        <div className="user">
          <FontAwesomeIcon icon={faQuoteRight} className='fa-qoute'></FontAwesomeIcon>
          <img src={person2} alt="" height= '150px' />
          
          <div className="name-rat">
          <h3>John Doe</h3>
          
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>

          </div>

        </div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui harum mollitia tenetur cupiditate repellendus obcaecati asperiores fugit magnam fuga perspiciatis quas voluptatem non alias excepturi molestiae, exercitationem, aperiam doloribus culpa!</p>
      </div>

      </SwiperSlide>
      
      
      <SwiperSlide>
          
      <div className="slide">
        <div className="user">
          <FontAwesomeIcon icon={faQuoteRight} className='fa-qoute'></FontAwesomeIcon>
          <img src={person3} alt=""  />
          
          <div className="name-rat">
          <h3>John Doe</h3>
          
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>

          </div>

        </div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui harum mollitia tenetur cupiditate repellendus obcaecati asperiores fugit magnam fuga perspiciatis quas voluptatem non alias excepturi molestiae, exercitationem, aperiam doloribus culpa!</p>
      </div>

      </SwiperSlide>
      
      
      <SwiperSlide>
          
      <div className="slide">
        <div className="user">
          <FontAwesomeIcon icon={faQuoteRight} className='fa-qoute'></FontAwesomeIcon>
          <img src={person4} alt=""  />
          
          <div className="name-rat">
          <h3>John Doe</h3>
          
          <div className="rating">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
              </div>

          </div>

        </div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui harum mollitia tenetur cupiditate repellendus obcaecati asperiores fugit magnam fuga perspiciatis quas voluptatem non alias excepturi molestiae, exercitationem, aperiam doloribus culpa!</p>
      </div>

      </SwiperSlide>
      
    </Swiper>
     
      </section>
    

    <footer>
      <div className="box-container">
        <div className="box">
          <h3>Locations</h3>
          <a href="/">France</a>
          <a href="/">Pakistan</a>
          <a href="/">Russia</a>
          <a href="/">India</a>
          <a href="/">USA</a>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#dishes">Dishes</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="/">+123-456-7890</a>
          <a href="/">+111-222-3333</a>
          <a href="/">asilshah17@gmail.com</a>
          <a href="/">mhfreaking@gmail.com</a>
          <a href="/">Islamabad - Pakistan</a>
        </div>
        <div className="box">
          <h3>Follow us</h3>
          <a href="/">facebook</a>
          <a href="/">Instagram</a>
          <a href="/">twitter</a>
          <a href="/">LinkedIn</a>
        </div>
      </div>

        <div className="credit">&copy; Copyright @ 2023 by <span>Syed Asil Ali</span></div>

    </footer>

      
    </>


    
  )
}

export default Content