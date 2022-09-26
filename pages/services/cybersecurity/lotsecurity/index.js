
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Head from "next/head";

export default function lotsecurity() {
  return (
    <div>
    <Head>
    <title>Accedere - Vulnerability Assessment</title>
    <meta name="keywords" content="Vulnerability Assessment, Pentesting , Penetration Testing, Accedere.io"/>
    <meta name="description" content="Being an empanelled and 2 decades of experience into cloud security and compliances and certification, Accedere offers Vulnerability Assessment, Pentesting or Penetration Testing services to the IT companies across USA and Canada."/>
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> IoT Security </h2>
                       <p className="text-white"> As per Gartner &apos;The IoT will continue to deliver new opportunities
                        for digital business innovation for the next decade, many of which will be enabled by new
                         or improved technologies, said Nick Jones, research vice president at Gartner. &apos;CIOs who
                          master innovative IoT trends have the opportunity to lead digital innovation in their business.

                          </p>
                       <p className="text-white"> In addition, CIOs should ensure they 
                       have the necessary skills and partners to support key emerging IoT trends 
                       and technologies, as, by 2023, the average CIO will be responsible for more 
                       than three times as many endpoints as this year.&apos;
                       </p>
                       <h5 className="text-white mt-4"> Internet of Things (IoT)-based attacks are already a reality. Gartner expects worldwide spending 
                       on IoT security to be $3.1 billion by 2021.</h5>



                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/ind1.jpg"
                          alt="name1"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

       
         <div className="para-grap-div mb-5">
               <div className="container">
                  
                  <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                     
                     <div className="col">
                              <figure className="comon-sub-main2 ison-sp1">
                                 <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                 layout="fill"
                                 />
                           </figure>
                     </div>
                     <div className="col">
                           <h2 className="comon-head-main "> 
                           Some of the IoT security challenges are: </h2>


                           <ul className="list-unstyled blue-arrow">
                               <li>
                                  <span>
                                     <FaAngleRight/>
                                  </span>
                                  <span> Insecure Web Interface</span>
                               </li>
                               <li>
                                 <span>
                                    <FaAngleRight/>
                                 </span>
                                  <span> Insufficient Authentication or Authorization</span>
                               </li>
                               <li>
                                 <span>
                                    <FaAngleRight/>
                                 </span>
                                  <span> Insecure Network Services</span>
                               </li>
                               <li>
                                    <span>
                                       <FaAngleRight/>
                                    </span>
                                  <span> Lack of Transport Encryption</span>
                               </li>
                               <li>
                                       <span>
                                       <FaAngleRight/>
                                    </span>
                                 <span> IoT Privacy Concerns </span>
                               
                               </li>
                               <li>
                                       <span>
                                       <FaAngleRight/>
                                    </span>
                                 <span> Insecure Cloud Interface </span>
                               
                               </li>
                               <li>
                                          <span>
                                          <FaAngleRight/>
                                       </span>
                                    <span> Insecure Mobile Interface </span>
                                 
                                 </li>

                                 <li>
                                          <span>
                                          <FaAngleRight/>
                                       </span>
                                    <span> Insufficient Security Configurability </span>
                                 
                                 </li>
                                 <li>
                                          <span>
                                          <FaAngleRight/>
                                       </span>
                                    <span> Insecure Software or Firmware </span>
                                 
                                 </li>

                                 <li>
                                          <span>
                                          <FaAngleRight/>
                                       </span>
                                    <span> Poor Physical Security </span>
                                 
                                 </li>
                           </ul>

                           <p> Our IoT testing services reduce your security complexity. Our testers adapt to new platforms and techniques to ensure that they are able to bring out the security issues of IoT devices and their applications in order for the business to deliver the best experience to the end-user. Our testers pay particular attention to device configurations and tests. More on SOC Reporting Services More on SOC 2 vs ISO/IEC 27001,27701 PIMS.
                           </p>

                     </div>
                     
                     
                  </div>
                  

                  
               </div>
         </div>

      

         <div className="middle-part-div py-5">
             <div className="container">
                 <h5 className="text-center col-lg-8 mx-auto"> For more details please read our White paper</h5>
                  <div className="col-lg-4 mx-auto d-table text-center">
                        <Link href="/">
                      
                         <span className="btn mt-4 btn-more-n">
                         View More
                         </span>
                      </Link>
                  </div>
             </div>
         </div>
         
   

    </div>
        
    <Footer/>
    </div>
  )
}
