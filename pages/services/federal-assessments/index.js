
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function federalassessments() {
  return (
    <div>
    
    <Head>
            <title>Accedere - US Federal Assessments</title>
            <meta name="description" content="Learn more about how Accedere &amp;amp; Company&amp;s team of experts can help you with your f assessderalement needs."/>
      </Head>
    <Navbar/>
    <div className='sub-page-body fedarel-part1 float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       US Federal Assessments  </h2>
                       <h5 className="text-white"> While many 3PAOs and C3PAOs are historical government 
                       contractors and consultants, Schellman primarily provides independent assessment 
                       services to cloud providers, contractors, and the commercial entities supporting the government. 
                       Additionally, our clients often work in conjunction with SOC 2, 
                       PCI, and other compliance initiatives.
                       </h5>
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img ">
                          <Image src="/ad-socl-1.jpg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
             
                <h2 className="comon-head-main text-center"> US Federal Assessments </h2>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/federal-assessments/fedramp-compliance-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  FedRAMP
                               </h5>
                              
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/federal-assessments/cmmc-compliance-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> CMMC </h5>
                              
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/federal-assessments/fisma-nist-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> FISAM / NIST </h5>
                               
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
