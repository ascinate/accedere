
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";




import {useState} from "react";


function Testimonial(){


    const settings = {
        dots:  true,
        infinite: false,
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
              infinite: false,
              dots:  true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: false,
              dots:  true
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
            }
          }
        ]
      };
    return(
        <>
            <div className="testimonials-div">
                <h2 className="comon-head-main text-center blue-color"> What our clients are saying </h2>

                <div className="inside-divb2 my-5">
                    <div className="container">
                        
                    
                        
                      <div className="tesimonsli-slide my-5">
                          <Slider {...settings}>
                                
                            <div className="comon-items-slide">
                              <div className="comon-testi-com">
                                  
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
                                          <Image src="/bg-testimonial-new.jpg"
                                          alt="Picture of the author"
                                          layout="fill"/>
                                    </figure>
                                    <div className="content-div-t">
                                        <FaQuoteLeft/>
                                        <p>Accedere is conducting SOC-2 Audit for Ricoh Data Centres and Cloud Services since last 3 years. Audit done by your 
                                        team were always completed in a timely & professional manner.  </p>
                                        <p> Subsequent informal
                                        discussions with your good self & knowledge sharing sessions on Network- Security
                                        domain with the teams on regular intervals are appreciable.  </p>
                                        <p> It&apos;s great to have business association with Accedere </p>
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
            </div>
        </>
    )
};
export default Testimonial;