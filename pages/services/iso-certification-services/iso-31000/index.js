
import Image from "next/image";
import { BsXDiamondFill, BsDash,  } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Head from "next/head";


function iso3100(){
    return(
        <>
          <Head>
             <title>Accedere - ISO 31000</title>
             <meta name="twitter:title" content="ISO 27701 Certification &amp; Assessments | Schellman &amp; Company"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 ">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              ISO 31000 </h2>
                              <p className="text-white mt-4"> The long-term success of an organization relies on many 
                              things, from continually assessing and updating their offering to optimizing their processes. 
                              As if this weren&apos;t enough of a challenge,
                               they also need to account for the unexpected in managing risk. 
                              </p>

                              <p className="text-white"> ISO 31000 - Risk management, provides principles, a framework, 
                              and a process for managing risk. In addition to addressing operational continuity, 
                              ISO 31000 provides a level of reassurance in terms of economic resilience, professional reputation, 
                              and environmental and safety outcomes. In a world of uncertainty, 
                              ISO 31000 is tailor-made for any organization seeking clear guidance on risk management.</p>

                              <p className="text-white"> ISO 31000:2018is the international standard for Risk Management,
                               published by the InternationalOrganization for Standardization (ISO), an independent, 
                               non-governmental international organization with a membership of 165 national standards bodies.
                                The standard was first published in 2009 by ISO and 
                              has been revised recently in 2018, now making it ISO 31000:2018.</p>

                              

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


                    

                        <p> ISO 31000 provides guidelines on managing risk faced by organizations. Using ISO 31000 can
                         help organizations increase the likelihood of achieving objectives, improve the identification
                          of opportunities and 
                        threats and effectively allocate and use resources for risk treatment.  </p>

                        <h5> The benefits of ISO 31000 Certification can be summarized as below: </h5>

                         <ul className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                              Applied controls to analyzed risks which minimizes loss
                            </span>
                              </li>
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                             Improved business performance by effective crisis management 
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
                              Efficient operational controls 
                            </span>
                            </li>

                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                              Effective response to change and protection as business grows
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
export default iso3100;