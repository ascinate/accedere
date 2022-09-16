
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";


function iso1st(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               ISO 27001 Certification</h2>
                              <p className="text-white mt-4"> Assist your organization in managing and protecting valuable 
                              data and assets by attaining ISO 27001 certification.
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
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
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            
                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/330-5e884967d541df34f8613e92.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                Why ISO 27001? </h2>

                                <p className="mt-4"> ISO 27001 certification is a valuable compliance framework to 
                                address the increasing number of information security breaches, the myriad number of 
                                regulatory and compliance requirements related to information security, 
                                and the time and resources neccessary to respond to customer expectations. </p>

                             

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
export default iso1st;