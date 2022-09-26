
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import { FaMinus } from "react-icons/fa";
import Head from "next/head";


function iS2301(){
    return(
        <>
          <Head>
          <title>Accedere -ISO 22301 Certification </title>
          <meta name="description" content="Give assurance with ISO 22301 that your organization has the appropriate business continuity policies and processes designed, implemented, and are effective."/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               
                              ISO 22301 </h2>
                              <p className="text-white mt-4"> ISO/IEC 22301 standard helps organizations identify and prioritize 
                              threats. Today globally companies suffer due to cyberattacks, data breaches or natural disasters 
                              which can interrupt business continuity and quickly damage company&apos;s reputation. In such 
                              situations, organizations and businesses need to implement, maintain, and keep
                               refining their business continuity management system (BCMS). 
                              </p>
                              <p className="text-white">
                              BCMS helps organizations reduce the likelihood & impact of disruption and downtime, 
                              protect assets if something does go wrong,
                               continue operating through the disruption, and recover quickly from any incidents.
                              </p>

                              <p className="text-white"> ISO 22301 is the international standard for Business Continuity Management System 
                              published by the International Organization for Standardization (ISO), an independent, 
                              non-governmental international organization with a membership of 165 national standards bodies.
                               The standard was first published in 2012 by ISO 
                              and has been revised recently in 2019, now making it ISO 22301:2019.</p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div cy1">
                                    <Image src="/soc-2.jpg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        
                        
                    

                    <p className="mt-2"> ISO 22301 provides a framework to organizations & companies to
                     manage business continuity in their organization. This standard focuses on ensuring business 
                     continuity after disruptive events or occurrences (e.g., Earthquake) by 
                    establishing business continuity priorities & prevention methods.  </p>

                    <p className="mt-2"> An BCMS (business continuity management system) implemented as per ISO 22301 provides organizations 
                    with a framework and structure to manage their business continuity.  </p>

                     <h5>  The benefits of ISO 9001 Certification can be summarized as below: </h5>

                     <ul className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                        Compliance with regulatory requirements 
                     </span>
                       </li>
                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                     Identification of business threats & risks 
                     due to disruptive incidents and establishing a system to mitigate such risk
                     </span>
                     </li>
                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Identifying the priorities of business to protect during times of crisis
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
                       Increased efficiency which enhances business flow and functions
                     </span>
                     </li>

                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                        Cost savings for company by increased efficiency
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
export default iS2301;