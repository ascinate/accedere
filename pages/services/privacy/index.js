
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function privacy() {
  return (
    <div>
    
    <Head>
            <title>Accedere - Privacy Services</title>
            <meta name="description" content="Learn more about how Schellman &amp; Company’s team of experts can help you with your Privacy Assessment needs."/>
    <meta name="generator" content="HubSpot"/>
          
   </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> Privacy  </h2>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/privacy1.jpg"
                          alt="privacy"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> Privacy Services </h2>
                <p className="text-center col-lg-7 mx-auto"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever </p>
                <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/privacy/gdpr-compliance-risk-assessment">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/5894572.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> GDPR Assessment </h5>
                               <p> 
                               Assess and demonstrate your alignment with the GDPR provisions.
                             
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/privacy/international-privacy-assessments">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1962589.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               International Privacy Assessments
                               </h5>
                               <p> 
                               Companies with a customer footprint spanning outside of their country 
                               or region may need to demonstrate compliance internationally.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/privacy/us-privacy-assessments">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7790150.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> US State Privacy Assessments </h5>
                               <p>Navigate the privacy landscape of nearly all 50 states.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/privacy/privacy-program">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7790150.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Privacy program </h5>
                               <p>Navigate the privacy landscape of nearly all 50 states.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/privacy/soc2hipaa">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7790150.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> HIPPA Compliance</h5>
                               <p>Navigate the privacy landscape of nearly all 50 states.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    



                    
                </div> 
            </div>
         </div>

         <div className="comon-next-gray-bg py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                    <div className="col">
                        <figure className="right-img-nm">
                            <Image src="/ad-comon1.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">
                        <h2 className="comon-head-main">  Get more from Reports </h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&apos;s standard </p>
                        <ul className="list-unstyled">
                            <li>
                               <span className="conmo-icon">
                               <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
         </div>
   

    </div>
        
    <Footer/>
    </div>
  )
}
