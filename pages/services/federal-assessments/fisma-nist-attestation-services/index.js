
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Head from "next/head";


function fisma(){
    return(
        <>
          <Head>
             <title>Accedere -  FISMA NIST 800-53</title>
             <meta name="description" content="Learn more about how Accedere &amp;amp; Company&apos;s team of experts can help you with your FISMA or NIST assessment needs."/>
          
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              
                                
                              FISMA NIST 800-53 </h2>
                              <p className="text-white mt-4"> While only government agencies can be FISMA compliant,
                               we can provide both independent attestations and gap assessments against the NIST 800-53
                                standards which are 
                              the detailed requirements behind FISMA.
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
                                 
                                What is NIST 800-53?</h2>

                                <p className="mt-4"> The Federal Information Security Management Act (FISMA) requires federal agencies,
                                 departments, and contractors to adequately safeguard information
                                  systems and assets. The underlying requirements for systems that handle
                                   government data come from NIST Special Publication (SP) 800-53.</p>

                                <p className="mt-2"> Being an accredited 3PAO and having significant experience 
                                with the largest subservice organizations providing services to the federal government, 
                                our team has 
                                the experience needed in providing a quality assessment.</p>

                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

              

            
          </div>
          <Footer/>
        </>
    );
}
export default fisma;