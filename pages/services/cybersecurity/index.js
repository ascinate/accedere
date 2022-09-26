
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function aicpasocreports() {
  return (
    <div>
    <Head>
            <title>Accedere - Cybersecurity</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-4"> Cybersecurity  </h2>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/cyber1.jpg"
                          alt="syber"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> Cybersecurity Services </h2>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/cybersecurity/lotsecurity">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1067263.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> IoT Security </h5>
                               <p>As per Gartner “The IoT will continue to deliver new opportunities for digital business innovation for the next decade
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/cybersecurity/scadaics">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SCADA | ICS </h5>
                               <p> Operations technology (OT) is the term used in industrial operations and is comprised..
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/cybersecurity/blockchain">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1797588.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Blockchain </h5>
                               <p> While blockchain is very efficient with respect to transactions, there are concerns...
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                       <Link href="/services/cybersecurity/hire-cybersecurity-contactor">
                           <div className="comon-services-part">
                              <figure>
                                 <Image src="/2273136.svg"
                                 layout="fill"
                                 />
                              </figure>
                              <h5> Hire Cyber Security Contractors  </h5>
                              <p> Enterprises have a need for expertise to help them detect, prevent...
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
