
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import { FaMinus } from "react-icons/fa";
import Head from "next/head";


function iS2001(){
    return(
        <>
          <head>
             <title>Accedere - ISO 20000-1 Certification</title>
              <meta name="description" content="Build trust and confidence with your customers by aligning a consistent and quality IT service with your business through attaining ISO 20000-1 certification."/>
          </head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               
                              ISO 20000-1 Certification </h2>
                              <p className="text-white mt-4"> Attaining ISO 20000 certification allows for 
                              organizational alignment of IT services and the business. Being able to design, 
                              implement, and monitor consistent and quality information technology serivce delivery helps in
                               building trust and confidence of customers.
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
                                 
                                Why ISO 20000-1? </h2>

                                <p className="mt-4"> The standard was developed to mirror the best practices described 
                                within the IT Infrastructure Library (ITIL) framework and is rooted in the elements of 
                                information technology service delivery in ways to design, implement, monitor,
                                 and continually improve the delivery of information technology services.</p>

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
                            <p className="col-lg-9 mx-auto d-block text-center"> As one of the only US firms accredited by ANAB and UKAS accreditation bodies
                             to perform certification assessments against ISO 27001. When you engage with us,
                              you will receive a dedicated team that is certified and has 
                            exclusive experience in information technology and audit.</p>

                            <p className="col-lg-9 mx-auto d-block text-center"> Our experienced professionals understand the information technology service delivery landscape and can apply their knowledge to an service delivery environment to allow for an assessment that not only addresses the requirements of ISO 20000 but also the unique processes that can be
                             identified to improve information technology service delivery.

                            </p>
                      
                            <BtmSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default iS2001;