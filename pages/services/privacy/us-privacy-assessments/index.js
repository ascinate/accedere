
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";
import Head from "next/head";


function usprivacypage(){
    return(
        <>
          <Head>
          <title>Accedere - Privacy Services</title>
          <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your US State Privacy Assessments"/>
  
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              US State Privacy Assessments </h2>
                              <p className="text-white mt-4"> Nearly all the 50 states now have some form of privacy 
                              law in place, and state law can sometimes be 
                              even stricter than the overarching federal laws.
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
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
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 flex-column-reverse flex-lg-row">
                            
                           <div className="col">
                                    <figure className="mn-big-div2 risk-1">
                                        <Image src="/soc2-1.jpg" alt="about"
                                        
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main mt-5 mt-lg-0">  
                                Why US Privacy Assessments?
                                </h2>
                                <p className="mt-4"> Considering the massive amount of personal information being created, 
                                transferred and stored today as well as the economic, political and social concerns over 
                                data flows, adherence to privacy laws and standards has proven to be a 
                                challenging imperative of doing business and maintaining a company&apos;s reputation.</p>

                                <p className="mt-2"> Whether driven by statutes or common law, accounting for 
                                these business and legal obligations can be onerous from state to state.</p>

                                <p className="mt-2"> Schellman&apos;s deep expertise provides a thorough view of an
                                 organization&apos;s data protection and privacy posture.</p>

                                
                            </div>
                           
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> What to expect for your Privacy Assessment </h2>
                            <p className="col-lg-9 mx-auto d-block text-center"> We begin each project with your end goals in mind and to provide
                                preparation for future key project activities. Effective communication
                                and timely coordination of project planning activities are central 
                                to our methodology with our clients.

                            </p>
                      
                            <ComonSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default usprivacypage;