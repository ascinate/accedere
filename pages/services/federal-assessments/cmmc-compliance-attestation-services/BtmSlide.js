import {useState} from "react";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function BtmSlide(){
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
              dots:  true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots:  true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:  true
            }
          }
        ]
      };
    return(
        <>
          <div className="c-mon-main-slide-div mb-5">
             
                <Slider {...settings}>
                  <div className="items-process1 d-md-flex align-items-center">
                     <figure className="crm-slider3">
                        <Image src="/coustomer.jpg"
                        alt="Picture of the author"
                        layout="fill"/>
                     </figure>
                     <div className="content-part1">
                        <h5> Level 1 </h5>
                        <p> Level 1 is the minimum basic CMMC level, focused on protecting FCI. It 
                        includes 17 of the NIST SP 800-171 requirements with no additional practices.
                         Level 1 is not expected to require assessment by C3PAOs, 
                        but instead will require self-assessment by DIB organizations.</p> 
                     </div>
                  </div>

                

                  <div className="items-process1 d-md-flex align-items-center">
                     <figure className="crm-slider3">
                        <Image src="/pexels-christina-morillo-1181216.jpg"
                        alt="Picture of the author"
                        layout="fill"/>
                     </figure>
                     <div className="content-part1">
                        <h5>  Level 2 </h5>
                        <p>Level 2 is focused on the protection of CUI. It is the equivalent to
                         NIST SP 800-171 and includes the 110 requirements from NIST 800-171. 
                         Level 2 was previously Level 3 in CMMC 1.0 
                        and included additional practices, which have been removed in CMMC 2.0.
                        </p>

                        
                     </div>
                  </div>

                  <div className="items-process1 d-md-flex align-items-center">
                        <figure className="crm-slider3">
                            <Image src="/img-one1.jpg"
                            alt="Picture of the author"
                            layout="fill"/>
                        </figure>
                        <div className="content-part1">
                        <h5>  Level 2 </h5>
                        <p>Level 3 in CMMC 2.0 replaces Levels 4 and 5 in CMMC 1.0. Level 3 
                        will build on the 110 requirements in Level 3 (and NIST 800-171) 
                        and include a subset of requirements from NIST SP 800-172.
                        </p>

                        <p>It is expected that Level 3 assessments will represent a 
                        very small number of contract requirements and contractor certifications.</p> 
                           
                        </div>
                  </div>

                 

                </Slider>
            
          </div>
        </>
    );
}
export default BtmSlide;