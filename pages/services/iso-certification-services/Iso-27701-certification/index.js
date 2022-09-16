
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import { FaMinus } from "react-icons/fa";


function ISso1st(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               
                               ISO 27701 Certification</h2>
                              <p className="text-white mt-4"> Providing organizations guidance, specific to supporting an 
                              effective privacy information management system (PIMS).
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/5-tips-to-prepare-for-group-discussion-rounds.webp" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            
                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                Who does ISO 27701 apply to? </h2>

                                <p className="mt-4"> ISO 27701 is intended to be applicable to any organization that 
                                would be considered a controller or processor for personally identifiable information 
                                (PII) in the context of their ISMS. This is significantly broader than the previously 
                                issued and adopted ISO/IEC 27018:2019 - Information technology <FaMinus/> Security techniques <FaMinus/>
                                Code of practice for protection of personally 
                                identifiable information (PII) in public clouds acting as PII processors. </p>

                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> Our Process </h2>
                            <p className="col-lg-9 mx-auto d-block text-center"> We begin each project with your end goals in mind and to provide preparation for future key project activities. Effective communication and timely coordination of project planning activities are 
                            central to our methodology with our clients.

                            </p>
                            <p> As one of the only US firms accredited by ANAB and UKAS accreditation bodies
                             to perform certification assessments against ISO 27001. When you engage with us,
                              you will receive a dedicated team that is certified and has 
                            exclusive experience in information technology and audit.</p>
                      
                            <BtmSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default ISso1st;