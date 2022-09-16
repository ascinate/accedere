

import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";


export default function privacy() {
  return (
    <div>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> Healthcare Assessments </h2>
                       <p className="text-white"> Evaluate the growing healthcare complexities to ensure you are 
                       providing the highest level of security and privacy
                        to your business associates and covered entities.</p>
   
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/privacy1.jpg"
                          alt="privacy"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>




         <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 align-items-center">
                            
                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                HITRUST CSF Certification  </h2>

                                <p className="mt-4"> Assessing your organizational alignment with the HITRUST CSF
                                 requirements and provide 
                                guidelines for best practices to support the HITRUST CSF.</p>


                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
         </div>

         <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 align-items-center">
                            
                            
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                HIPAA Compliance  </h2>

                                <p className="mt-4"> Ensure you have the controls in place to meet the HIPAA security
                                 and privacy safeguards 
                                as well as the HITECH breach notification requirements.</p>


                            </div>

                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
         </div>

         <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 align-items-center">
                            
                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                HIPAA Express  </h2>

                                <p className="mt-4">  A risk-based assessment designed specifically for
                                 healthcare providers</p>


                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
         </div>

          <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 align-items-center">
                            
                            
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                EPCS-DEA Audits </h2>

                                <p className="mt-4"> Effectively communicate your EPCS-DEA compliance to your stakeholders
                                 while also satisfying regulatory requirements.</p>


                            </div>

                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
         </div>

   

    </div>
        
    <Footer/>
    </div>
  )
}
