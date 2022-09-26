
import Image from "next/image";
import { BsXDiamondFill, BsDash,  } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Head from "next/head";


function iso3001(){
    return(
        <>
          <Head>
             <title>Accedere - ISO/IEC 20000-1</title>
             <meta name="twitter:title" content="ISO 27701 Certification &amp; Assessments | Schellman &amp; Company"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 ">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              ISO/IEC 20000<BsDash/>1 </h2>
                              <p className="text-white mt-4"> ISO/IEC 20000-1:2018 is the international ITSM 
                              (IT service management) standard. It enables IT departments to ensure that their 
                              ITSM processes are aligned with the business&apos;s needs and international best practices.
                               It helps organizations to benchmark how they deliver managed services,
                               measure service levels, and assess their performance.
                              </p>

                              <p className="text-white"> The standard specifies requirements for an organization to establish, 
                              implement, maintain & continually improve a service management system (SMS). Requirements 
                              specified in this document include the planning, design, transition, delivery, and improvement of
                               services to meet the service requirements and deliver value.</p>

                              <p className="text-white"> ISO/IEC 20000-1:2018 is the international standard for 
                              Information Technology — Service Management, published by the International 
                              Organization for Standardization (ISO), an independent, non-governmental international 
                              organization with a membership of 165 national standards bodies. The standard was first 
                              published in 2005 by ISO and has 
                              been revised recently in 2018, now making it ISO ISO/IEC 20000-1:2018.</p>

                              

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1 ison-sp1">
                                    <Image src="/gd-group-discussion-tips.jpg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">


                    

                        <p> ISO/IEC 20000-1 specifies requirements for an organization to establish,
                            implement, maintain, and continually improve a service management system (SMS). 
                            This standard focuses on 
                        service lifecycle strategy and helps the company manage their services.  </p>

                        <h5> The benefits of ISO/IEC 20000-1 Certification can be
                         summarized as below: </h5>

                         <ul className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                             Helps to improve the organizations products and services
                            </span>
                              </li>
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                              Increased confidence of stakeholders and customers in the organization
                            </span>
                            </li>
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                              Helps to reduce business risk
                            </span>
                            </li>

                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                              Helps create a level of consistency throughout the organizations supply chain
                            </span>
                            </li>

                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                             Supports other SM (service management) frameworks 
                            </span>
                            </li>


                           

                        </ul>
                        

                        
                    </div>
                </div>


            
          </div>
          <Footer/>
        </>
    );
}
export default iso3001;