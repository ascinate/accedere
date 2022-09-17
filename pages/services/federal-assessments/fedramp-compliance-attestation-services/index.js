
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import Head from "next/head";


function fedaassients(){
    return(
        <>
          <Head>
             <title>Accedere - FedRAMP Assessment</title>
             <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your FedRAMP assessment needs."/>
          
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              FedRAMP Assessment </h2>
                              <p className="text-white mt-4"> As the independent 3PAO, we perform testing 
                              to allow government agencies or the Joint Authorization Board, the information
                               needed to make an 
                              authorization (ATO) decision to utilize a CSP.
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
                                 
                                        What is FedRAMP? </h2>

                                <p className="mt-4"> FedRAMP is a program that enables cloud 
                                services providers (CSPs) to meet the security requirements 
                                embedded with FISMA and the NIST publications so that an 
                                agency may outsource with the confidence that its cloud 
                                provider partner is meeting those requirements. </p>

                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> What to expect for your FedRAMP Assessment </h2>
                            <p className="col-lg-9 mx-auto d-block text-center"> We begin each project with your end goals in mind and to provide
                                preparation for future key project activities. Effective communication
                                and timely coordination of project planning activities are central 
                                to our methodology with our clients.

                            </p>
                      
                            <BtmSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default fedaassients;