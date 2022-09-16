
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";


function socattendsr(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              C5 Attestation </h2>
                              <p className="text-white mt-4"> In response to the ever-growing need to 
                               information security in the cloud computing world, the C5 Attestation or Cloud
                                Computing Compliance Criteria Catalogue, was published. The program is a baseline of
                                 security controls that was developed by the Federal Office 
                              for Information Security in Germany, BSI.
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

                            <div className="col-lg-12">
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Your organization specifies whether a Type 1 or Type 2 examination will be performed for the C5 report </h2>
                                <h5> Schellman is the only firm that can offer both CSA STAR Certification and Attestation 
                                services to CSPs allowing companies
                                 to decrease internal costs and increase efficiencies.</h5>
                                 <ul className="list-unstyled mt-4">
                                    <li>
                                    <span> <BsXDiamondFill/> </span>
                                    <span>
                                     <h5 > 
                                     Type 1</h5>
                                     <p> Schellman performs a &apos;Type 1&apos; C5 examination when management requires a 
                                     report on the fairness of presentation of the CSP&apos;s system and the 
                                     suitability of the design of controls as of a specified date.</p>
                                    </span>
                                    </li>
                                    <li>
                                        <span> <BsXDiamondFill/> </span>
                                        <span>
                                        <h5 > 
                                        Type 2</h5>
                                        <p>A &apos;Type 2&apos; C5 examination is performed when management requires a report on the fairness of presentation of the CSP’s system and the suitability of the 
                                        design and operating effectiveness of controls over a period of time.</p>
                                        </span>
                                     </li>
                                 </ul>

                                
                            </div>
                           
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> Our Process </h2>
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
export default socattendsr;