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
                        <h5>  FedRAMP Ready </h5>
                        <h6> Core CSP Activities </h6>
                        <p>Submit documentation and evidence key controls
                        </p>
                        <h6> Schellman 3PAO Activities </h6>
                        <p> Schellman conducts an independent readiness assessment and issues a formal Readiness
                         Assessment Report (RAR) per the FedRAMP Ready program guidelines.</p> 
                     </div>
                  </div>

                

                  <div className="items-process1 d-md-flex align-items-center">
                     <figure className="crm-slider3">
                        <Image src="/pexels-christina-morillo-1181216.jpg"
                        alt="Picture of the author"
                        layout="fill"/>
                     </figure>
                     <div className="content-part1">
                        <h5>  Documentation </h5>
                        <h6> Core CSP Activities</h6>
                        <p> Develop and submit core security program documentation including the System Security Plan
                         (SSP) and related policies and procedures to the Agency or JAB.
                        </p>

                        <h6> Schellman 3PAO Activities </h6>
                        <p> Schellman performs readiness review of the SSP and supporting documentation.
                        </p>

  
                        <p> While client is finalizing its SSP, Schellman begins to collaborative draft the security assessment plan.
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
                            <h5>  Testing </h5>
                            <h6> Core CSP Activities </h6>
                            <p> Stage 1: Review and approve SAP prior to submission to the Agency or JAB
                            </p>
                            <p> Stage 2: Assist Schellman by providing any required documentation and testing evidence. Document any Plan of 
                            Action and Milestones (POA&M) generated from the assessment.
                            </p>


                            <h6>Schellman 3PAO Activities </h6>
                            <p> Stage 1: Draft and submit the SAP to the Agency or JAB for approval.
                            </p>
                            <p> Stage 2: Conduct testing of all in-scope controls, complete detailed control finding matrices, and issue SAR.
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
                            <h5> Finalization </h5>
                            <h6> Core CSP Activities </h6>
                            <p> Submit security assessment package.
                            </p>
                            <h6> Schellman 3PAO Activities</h6>
                            <p> Provide clarification to the Agency or JAB and/or 
                            client as required to complete the authorization process.
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
                            <h5> Maintenance </h5>
                            <h6> Core CSP Activities </h6>
                            <p> Conduct annual continuous monitoring activities as specified in the
                             FedRAMP Annual Assessment Guidance.
                            </p>
                            <h6> Schellman 3PAO Activities </h6>
                            <p> Conduct annual assessment of core controls as well as 1/3 of the remaining NIST 
                            control set along with review of POA&Ms and remediation. Conduct annual penetration
                             testing and oversee scanning activities as required.
                            </p>
                           
                        </div>
                   </div>

                </Slider>
            
          </div>
        </>
    );
}
export default BtmSlide;