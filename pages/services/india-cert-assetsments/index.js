
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill, BsDash } from "react-icons/bs";
import Head from "next/head";

export default function indiacta() {
  return (
    <div>
    <Head>
            <title>Accedere - India Cert-In Assessments</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       India Cert-In Assessments  </h2>
                       <h5 className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                       </h5>
   
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/istockphoto-1206983388-612x612.jpg"
                          alt="syber1"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> India Cert-In Assessments </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-lg-5 g-lg-5 mt-0 justify-content-center">
                   

                    <div className="col">
                      <Link href="/services/india-cert-assetsments/aadhar-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Aadhar Audit <BsDash/> UIDAI AUA & KUA </h5>
                               <p> 
                               Any firm which wants to get empaneled as KUA (KYC User Agency) or AUA (Aadhaar Authentication Services) 
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/india-cert-assetsments/safe-to-host">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  alt="cloud5"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Safe-to-Host Applications Audit </h5>
                               <p> Safe to host audits are conducted to recognize servers and encrypted communication..
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>

                    
                    <div className="col">
                      <Link href="/services/india-cert-assetsments/rbi-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/2830155.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> RBI / Data Localization Audit </h5>
                               <p> 
                               Over the past years, ithas become imperative for Banks to audit their IT environment..
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/india-cert-assetsments/sebi">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SEBI Directive Audit </h5>
                               <p> 
                               SEBI (Securities and Exchange Board of India) regulates the securities market..
                             
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
