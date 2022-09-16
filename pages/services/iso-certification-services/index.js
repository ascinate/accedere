
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";

export default function isocertificationservices() {
  return (
    <div>
    <Navbar/>
    <div className='sub-page-body float-start w-100 iso-main-page'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gy-5 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0">
                       ISO Certifications </h2>
                       <p className="text-white"> Today, organizations are facing a host of challenges — from security, privacy and service delivery to availability. A management system implementation and certification can form the foundation for handling these challenges and providing clients
                        with an internationally recognized certification.</p>
                       
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/iso-one.webp"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

      

         <div className="para-grap-div py-5">
            <div className="container">
         
               <h2 className="comon-head-main text-center"> ISO Certification Suite of Services </h2>
               <p className="text-center"> Staying in front of industry trends, Schellman is always adding and refining our IT audit and compliance offerings:</p>

               <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-27001-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  
                               ISO 27001
                               </h5>
                               <p>
                               
                                 Provide a framework and the necessary requirements for the design,
                                 implementation, and continuous
                                 monitoring of an information security management system (ISMS).
                                                            
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/iso-certification-services/Iso-27701-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               ISO 27701
                              </h5>
                               <p> 
                               Providing organizations guidance, specific to supporting an 
                               effective privacy information management system (PIMS).
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-9001-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               ISO 9001
                              </h5>
                               <p>Provides a systematic and process-driven approach through a formal
                                quality management system (QMS) for companies and organizations.

                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-22301-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>
                               ISO 22301
                              </h5>
                               <p>
                               Designed to help organizations protect against,
                                prepare for, respond to, and recover from a disruptive 
                                incident to business processes.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-20000-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               ISO 20000-1
                             
                               </h5>
                               <p> 
                               Provides a holistic approach for service providers 
                               in the design, transition, delivery, and improvement of services 
                               that fulfill both internal requirements and provide value for 
                               clients through consistent and improved service levels.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    
                </div> 
            </div>
         </div>




    </div>
        
    <Footer/>
    </div>
  )
}
