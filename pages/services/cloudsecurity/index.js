
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function cloudsecurity() {
  return (
    <div>
    <Head>
            <title>Accedere - cloudsecurity</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       Targeted Security Assessments </h2>
                       <h5 className="text-white"> Identify gaps and obtain feedback on key security
                        risks and control sets. 
                       </h5>
   
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/cloud-img.jpg"
                          alt="syber1"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> Focused cybersecurity expertise and experience </h2>
                <p className="text-center col-lg-7 mx-auto"> Schellman&apos;s assessors have significant depth in both the current threat landscape and leading-edge client technologies. </p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-lg-5 g-lg-5 mt-0 justify-content-center">
                   

                    <div className="col">
                      <Link href="/services/cloudsecurity/cloud-peneteration-testing">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/417669.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Peneteration Testing </h5>
                               <p> 
                               Reduce the impact of a potential incident by evaluating your organization&apos;s preparedness.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/cloudsecurity/cloud-supply-chain-assessments">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4673944.svg"
                                  alt="cloud5"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Supply Chain Assessments</h5>
                               <p> Reduce security risks in cloud computing to protect your organization and clients from the 
                               threat of data loss and maintain a competitive edge.
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>

                    
                    <div className="col">
                      <Link href="/services/cloudsecurity/soccloudsecurity">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/417669.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Container Security / Kubernetes</h5>
                               <p> 
                               Reduce the impact of a potential incident by evaluating your organization&apos;s preparedness.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/cloudsecurity/cloud-csa-assessments">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/417669.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> CSA / C5 Compliance </h5>
                               <p> 
                               Reduce the impact of a potential incident by evaluating your organization&apos;s preparedness.
                             
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
