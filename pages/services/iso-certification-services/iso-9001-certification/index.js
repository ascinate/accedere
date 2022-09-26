
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import { FaMinus } from "react-icons/fa";
import Head from "next/head";


function iSso3d(){
    return(
        <>
          <Head>
          <title>Accedere - ISO 9001</title>
          <meta name="description" content="Complement other compliance efforts, such as ISO 27001, by gaining ISO 9001 certification which utilizes the same management system foundation."/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               
                              ISO 9001 </h2>
                              <p className="text-white mt-4"> ISO 9001 is majorly known for Quality management system 
                              (QMS) in the whole world. It is mainly associated with the family of ISO 9000 which 
                              concern with many different features and viewpoints of quality management. ISO 9001 sets the standards for the company to cope with the expectations and needs of its customers. Thus, ISO 9001 Certification aid the business in meeting the 
                              customer requirements and to work business activities smoothly.
                              </p>

                              <p className="text-white"> ISO 9001 is the international standard for Quality Management System 
                              published by the International Organization for Standardization (ISO), an
                               independent, non-governmental international organization with a membership of 
                               165 national standards bodies. The standard was first published in 1987 by ISO and has
                                been updated over the years, the most recent update was in 2015, and it is referred to as 
                                ISO 9001:2015. 
                              </p>
                              <p className="text-white">
                              This standard can be implemented by any organization, large or small, irrespective of 
                              its industry and field of activity. The standard is widely used by organizations to 
                              showcase their quality management principles and demonstrate a strong customer focus, involvement of 
                              top management, regulatory requirement fulfilment and continual improvement.  
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1 ison-sp1">
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
                        
                        
                    

                    <p className="mt-2"> One of the major benefits of ISO 9001 certification is that it helps 
                    organizations ensure that their customers receive high quality products and services consistently, 
                    which in turn creates a beneficial outcome for the organizations and brings in many
                     business benefits including satisfied customers, top management, and employees.</p>

                     <h5>  The benefits of ISO 9001 Certification can be summarized as below: </h5>

                     <ul className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       International recognition for quality products / services
                     </span>
                       </li>
                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                      Information gathering & decision making based on data and facts
                     </span>
                     </li>
                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Traceable documentation which improves consistency and reduces errors
                     </span>
                     </li>

                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Satisfied customers lead to customer retention & word of mouth marketing
                     </span>
                     </li>

                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Increased work efficiencies by streamlined processes
                     </span>
                     </li>

                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Continuous improvement of business processes
                     </span>
                     </li>

                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Improve supplier relationships and management
                     </span>
                     </li>

                     <li> 
                     <span className="conmo-icon">
                     <FaAngleRight/>
                     </span>
                     <span>
                       Increased revenue
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
export default iSso3d;