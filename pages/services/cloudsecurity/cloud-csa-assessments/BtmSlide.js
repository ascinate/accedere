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
                        <h5>  
                        
                        Planning
                                    
                       </h5>
                        
                        <p> After the agreement is executed, the first phase of the engagement is planning. This is to ensure that Schellman and the Client are fully aware of the what, 
                        who, when, why, and how prior to the beginning of testing.
                        </p>
                       
                        <p> Proper planning is imperative to the success of a project. 
                        Schellman has standard processes to cover the important pieces of the engagement.</p> 
                     </div>
                  </div>

                

                  <div className="items-process1 d-md-flex align-items-center">
                     <figure className="crm-slider3">
                        <Image src="/pexels-christina-morillo-1181216.jpg"
                        alt="Picture of the author"
                        layout="fill"/>
                     </figure>
                     <div className="content-part1">
                        <h5>  
                        
                        Understanding and Kickoff
                                    
                       </h5>
                        <p> The kickoff is considered the start of the engagement. If needed, 
                        Schellman will schedule a call at the beginning of, or just prior to, the kickoff to
                         finalize any outstanding
                         items. Schellman will be available to the client with any questions.
                        </p>
                       
                        <p> By including communication prior to starting, Schellman ensures that no 
                        last-minute changes to the project or team have occurred and
                         the Client has the plan prior to the testing and on-site visit.</p> 
                     </div>
                  </div>

                  <div className="items-process1 d-md-flex align-items-center">
                        <figure className="crm-slider3">
                            <Image src="/img-one1.jpg"
                            alt="Picture of the author"
                            layout="fill"/>
                        </figure>
                        <div className="content-part1">
                            <h5>  
                            Testing and Gathering
                                         
                          </h5>
                            
                            <p>Testing and gathering is the core of the compliance engagement.
                             Due to the planning and understanding processes, this phase will be an accumulation 
                            of gathering the evidence needed for the objectives discussed.
                            </p>

                            <p> Schellman has a no surprise policy and has daily contact with the stakeholders during the testing and gathering activities. Furthermore, Schellman will begin documentation of the draft deliverable to be able to provide it to the Client efficiently after this phase. The Client will have confidence the 
                            Schellman team has completed this phase timely and completely.
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
                            <h5>  
                            Reporting

                                         
                          </h5>
                            
                            <p>Schellman&apos;s testing methodology ends with reporting, but the entire assessment is focused on 
                            creating a deliverable that is clear, concise, and accurate.
                            </p>

                            <p> Schellman&apos;s report takes into account the entire process and customizes a report 
                            for each Client. The draft report will be provided within 2 weeks of the last day of 
                            testing and gathering phase, and a final report will be provided within 30 days. 
                            This timing is unsurpassed by the industry.
                            </p>
   
                        </div>
                   </div>


                </Slider>
            
          </div>
        </>
    );
}
export default BtmSlide;