
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";

export default function soc() {
  return (
    <div>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> Security Operations </h2>
                       <h5 className="text-white"> Key Challenges </h5>
                       <ul className="list-unstyled crm-list text-white mt-4">
                         
                             <li className="text-white">
                                <span>
                                  <BsXDiamondFill/>
                                </span>
                                <span>
                                Average time to detect an attack (Dwell time) hovers about 200 days as reported by some leading research reports
                                </span>
                             </li>

                             <li className="text-white">
                                <span>
                                  <BsXDiamondFill/>
                                </span>
                                <span>
                                Existing monitoring capabilities are no match for the changing threat landscape
                                </span>
                             </li>

                             <li className="text-white">
                                <span>
                                  <BsXDiamondFill/>
                                </span>
                                <span>
                                Traditional SIEM technologies lack the sophisticated capabilities and visibility required to detect and protect against such advanced attacks
                                </span>
                             </li>

                             <li className="text-white">
                                <span>
                                  <BsXDiamondFill/>
                                </span>
                                <span>
                                Integrated monitoring of Operational and Security logs is not prevalent in many organizations
                                </span>
                             </li>
                          
                       </ul>
   



                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/ad-socl-1.jpg"
                          alt="soimg"
                          layout="fill"/>
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
                           Business Case for Security Analytics </h2>

                           <p>  Typically, organizations have tried to respond to evolving threats by implementing
                            several point tools like Anti-Viruses(Anti-malware), Firewall, IPS, URL filters, WAF,
                             DLP solutions and SIEM solutions to prevent and detect security attacks. Mechanisms 
                             like Vulnerability Assessments and application security scanners have also failed to 
                             mitigate the sophisticated attacks that cannot be detected by point security tools. 
                             Here comes Security Analytics that uses behavior analysis for anomalies, which means 
                             detecting unusual behavioral patterns. To achieve the best results from Analytics, 
                             we need to baseline what is normal and define thresholds. Humungous logs that are 
                             generated in an environment are collected, correlated in SIEM giving standalone threat 
                             information. Indicators of Compromise (IOC&apos;s) also need to be integrated and correlated with asset criticality and weakness to identify the impact holistically
                            so that appropriate resources can be allocated.</p>

                          



                     </div>
                     
                     
                  </div>
                  

                  
               </div>
         </div>

      

         <div className="para-grap-div py-5 mt-5">
             <div className="container">
                  <h2 className="comon-head-main"> Key Security Aspects of Our SaaS SOC Audit services </h2>
                  
                  <ul className="list-unstyled crm-list2 mt-4">
                         
                  <li>
                     <span>
                       <BsXDiamondFill/>
                     </span>
                     <span>
                     Evaluate all connections are enabled with SSL/ Https via Transport Layer Security
                     </span>
                  </li>

                  <li >
                     <span>
                       <BsXDiamondFill/>
                     </span>
                     <span>
                     Evaluate access thru the common Identity Management Solution
                     </span>
                  </li>

                  <li >
                     <span>
                       <BsXDiamondFill/>
                     </span>
                     <span>
                     Evaluate Log Data at rest is stored in an encrypted format using AES 256 bit or other approved encryption
                     </span>
                  </li>

                  <li >
                     <span>
                       <BsXDiamondFill/>
                     </span>
                     <span>
                     Evaluate back up and storage of log data
                     </span>
                  </li>
                  <li>
                     <span>
                       <BsXDiamondFill/>
                     </span>
                     <span>
                     Evaluate compliance requirements that logs should not be stored with IT
                      Administrators and within retention requirements
                     </span>
                  </li>

                  <li>
                     <span>
                       <BsXDiamondFill/>
                     </span>
                     <span>
                     Evaluate instances and stored logs in a specific locations for data
                      sovereignty challenges
                     </span>
                  </li>
               
            </ul>

            
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
