
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";




import {useState} from "react";


function Testimonial(){


    const settings = {
        dots:  true,
        infinite: true,
        margin:30,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:  true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: true,
              dots:  true
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
    return(
        <>
            <div className="testimonials-div">
                <div className="container">
                    <h4 className="comon-head-sub text-center"> testimonial</h4>
                    <h2 className="comon-head-main text-center"> What our clients are saying </h2>
                    <p className="col-lg-7 mx-auto text-center"> It is a long established fact that a reader will be distracted by the readable content
                     of a page when looking at its layout. </p>

                     
                   <div className="tesimonsli-slide mt-5">
                       <Slider {...settings}>
                            
                         <div className="comon-items-slide">
                           <div className="comon-testi-com">
                                <figure className="ts-big">
                                      <Image src="/testimonal-img1.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                <div className="content-div-t">
                                    <FaQuoteLeft/>
                                    <p>We at Jio Data Center Operations, Would like thank and extend our sincere appreciation for all your devoted contributions & commitment towards our SSAE18 SOC 1 & 2 certification process. As an industry veteran along with your deep knowledge of the domain, You have made the entire process so seamless especially considering the number of functions & controls involved. You have also helped us to create integrated controls. You have been so diligent, 
                                    honest and systematic in approach throughout the process.  </p>
                                    <figure className="ts-logo">
                                          <Image src="/test1.svg"
                                          alt="Picture of the author"
                                          layout="fill"/>
                                    </figure>
                                </div>
                            </div>
                         </div>

                         <div className="comon-items-slide">
                           <div className="comon-testi-com">
                                <figure className="ts-big">
                                      <Image src="/whysecimg.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                <div className="content-div-t">
                                    <FaQuoteLeft/>
                                    <p>We at Jio Data Center Operations, Would like thank and extend our sincere appreciation for all your devoted contributions & commitment towards our SSAE18 SOC 1 & 2 certification process. As an industry veteran along with your deep knowledge of the domain, You have made the entire process so seamless especially considering the number of functions & controls involved. You have also helped us to create integrated controls. You have been so diligent, 
                                    honest and systematic in approach throughout the process.  </p>
                                    <figure className="ts-logo">
                                          <Image src="/test2.svg"
                                          alt="Picture of the author"
                                          layout="fill"/>
                                    </figure>
                                </div>
                            </div>
                         </div>

                       </Slider>
                   </div>

                </div>
            </div>
        </>
    )
};
export default Testimonial;