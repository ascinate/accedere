
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
            <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your Privacy Assessment needs."/>
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
                
                <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                   

                    <div className="col">
                      <Link href="/services/privacy/privacy-assessment-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1962589.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                              Privacy Assessment Services
                               </h5>
                               <p> 
                               Privacy has grabbed the attention of Boards of Directors (BoD&apos;s) across regions as
                                organizations look to 
                               comply with new privacy regulations and compliance
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                     <Link href="/services/privacy/soc-reports-for-privacy">
                           <div className="comon-services-part">
                              <figure>
                                 <Image src="/7790150.svg"
                                 alt="pri"
                                 layout="fill"
                                 />
                              </figure>
                              <h5> SOC 2 for Privacy </h5>
                              <p> The SOC 2 compliance report provides an assurance to the 
                              internal and external stakeholders of the organization..
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
                      <Link href="/services/privacy/gdpr-compliance-risk-assessment">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/5894572.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> GDPR Assessment </h5>
                               <p> 
                               Privacy has grabbed the attention of Boards of Directors (BoD&apos;s)
                                across regions as organizations.. 
                             
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
                               <p>The HIPAA Act was effective in 1996, the HITECH Act in 2009, and the Final Omnibus
                                Rule in 2013 and despite years passed..
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
