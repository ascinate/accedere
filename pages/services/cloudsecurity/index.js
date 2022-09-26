
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
            <title>Accedere - Cloud Security Assessments</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       Cloud Security Assessments </h2>
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
                <h2 className="comon-head-main text-center"> Cloud Security Assessments </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-lg-5 g-lg-5 mt-0 justify-content-center">
                   

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
                               Cloud Security, Security in Cloud Computing, Kubernetes Security,
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
                               <p> Cloud Supply Chain Security (CSCS) is part of Supply Chain Management which focuses on risk..
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
                               When we discuss cloud supply chain, containerization is the thing which is been looked at for micro-services.
                             
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
                               According to some estimates, there are more than 20,000 SaaS providers globally.
                             
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
