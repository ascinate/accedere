
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";

export default function cloudsecurityassessment() {
  return (
    <div>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-4"> Why businesses are failing to protect Cloud and PII data? </h2>
                       
                       <ul className="list-unstyled all-list-new mt-4">
                          <li className="text-white">
                            <span className="conmo-icon">
                                 <BsXDiamondFill/>
                                 </span>
                                 <span>
                                 Increasing cloud adoption is also leading to increased cloud security risks due 
                                 to moving to the cloud without a security architecture design.
                           </span>
                          </li>

                          <li className="text-white">
                            <span className="conmo-icon">
                                 <BsXDiamondFill/>
                                 </span>
                                 <span>
                                 Some of the top cloud risks include Misconfiguration, Insecure Interfaces and API Risks, 
                                 Weak Control Planes, Access and Key Management, Account Hijacking,
                                  etc.resulting in increased data breaches.
                           </span>
                          </li>
                          <li className="text-white">
                            <span className="conmo-icon">
                                 <BsXDiamondFill/>
                                 </span>
                                 <span>
                                 IaaS Providers state that the data security lies with the PaaS, SaaS providers or 
                                 the organizations that store data on the cloud platforms.
                           </span>
                          </li>

                          <li className="text-white">
                            <span className="conmo-icon">
                                 <BsXDiamondFill/>
                                 </span>
                                 <span>
                                 Organizations are failing to protect sensitive data in the cloud. Businesses are taking 
                                 advantage of the cloud, but not applying adequate cloud security.
                           </span>
                          </li>

                          <li className="text-white">
                            <span className="conmo-icon">
                                 <BsXDiamondFill/>
                                 </span>
                                 <span>
                                 The challenge in addressing the threat of data loss and data leakage is that the organizations opt to keep offline backups of data to reduce data loss,
                                  which eventually increases the exposure to data security breaches.
                           </span>
                          </li>

                          <li className="text-white">
                            <span className="conmo-icon">
                                 <BsXDiamondFill/>
                                 </span>
                                 <span>
                                 Increasing use of Container and Microservices needs security at the 
                                 Docker Security and Kubernetes Security layers.

                           </span>
                          </li>

                       </ul>

                       <h5 className="text-white"> We provide short and lonf term contractors for 
                       Cybersecurity, remote working only.</h5>
                       <p>
                         <Link href="/">
                            <span className="btn new-bnt-white"> Read More </span>
                         </Link>
                       </p>
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img ison-sp1">
                          <Image src="/ad-socl-1.jpg"
                          alt="comon-img"
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
                                    <figure className="comon-sub-main2 ison-sp1">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> We provide short and long term contract staff for Cybersecurity, 
                                remote working only. </h2>
                                <h5> Understanding Attack Scenario: </h5>
                                <p> During an attack, an outside party attempts to flood an organization&apos;s systems using a numerous amount of connections to overwhelm the system. Since the hackers can use programs or bots to generate numerous attacks, organizations cannot block just one IP 
                                address from shutting down a specific process.</p>

                                <h5> There are three basic categories of attack: </h5>

                               <ul className="list-unstyled all-list-new">
                                   <li className="text-wwhite">
                                       <span className="conmo-icon">
                                             <BsXDiamondFill/>
                                             </span>
                                             <span>
                                             Volume-based attacks: which use high traffic to inundate the network bandwidth
            
                                       </span>
                                    </li>
                                    <li className="text-wwhite">
                                       <span className="conmo-icon">
                                             <BsXDiamondFill/>
                                             </span>
                                             <span>
                                             Protocol attacks: which focus on exploiting server resources
            
                                       </span>
                                    </li>
                                    <li className="text-wwhite">
                                       <span className="conmo-icon">
                                             <BsXDiamondFill/>
                                             </span>
                                             <span>
                                             Application attacks: which focus on web applications and Containers covering Dockers, Kubernetes are considered 
                                             the most sophisticated and serious type of attacks
            
                                       </span>
                                    </li>
                                    <li className="text-wwhite">
                                       <span className="conmo-icon">
                                             <BsXDiamondFill/>
                                             </span>
                                             <span>
                                             Application attacks: which focus on web applications and Containers covering Dockers, Kubernetes are considered 
                                             the most sophisticated and serious type of attacks
            
                                       </span>
                                    </li>
                               </ul>

                               <p> Studies agree that providers need more comprehensive cloud security measures to mitigate an attack. Be aware that the main purpose of an attack is to not just disrupt
                                a system but to steal data as well.</p>

                            </div>
                            
                            
                        </div>
                       

                        
                    </div>
         </div>

         <div className="para-grap-div">
         
            <div className="container">
                   <h2> Attacks on OSI Layers</h2>


                     <table className="table">
                           <thead>
                              <tr>
                                 <th scope="col"> OSI Layer</th>
                                 <th scope="col">	
                                 Protocol Data Unit (PDU) </th>
                                 <th scope="col">Protocols </th>
                                 <th scope="col">Examples of at each Level considering OWASP Risks</th>
                                 <th scope="col">Potential Impact of an Attack</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>Application Layer</td>
                                 <td>Data</td>
                                 <td>Uses the protocols FTP, HTTP, POP3, & SMTP and uses Gateway as its device.</td>
                                 <td>PDF GET Requests, HTTP GET, HTTP POST, website forms(login, uploading photo/video, submitting feedback)</td>
                                 <td>Reach resource limits of services; Resource starvation</td>
                              </tr>

                              <tr>
                                 <td>Presentation Layer</td>
                                 <td>Data</td>
                                 <td>Uses the protocols Compression & Encryption.</td>
                                 <td>Malformed SSL Requests -- Inspecting SSL encryption packets is resource-intensive. Attackers use SSL to tunnel HTTP attacks to target the server.</td>
                                 <td>The affected systems could stop accepting SSL connections or automatically restart.</td>
                              </tr>
                              
                              <tr>
                                 <td>Session Layer</td>
                                 <td>Data</td>
                                 <td>	
                                 Uses the protocols Logon/Logoff.</td>
                                 <td>Telnet DDoS-attacker exploits a flaw in a Telnet server software running on the switch, rendering Telnet services unavailable.</td>
                                 <td>Prevents administrators from performing switch management functions.</td>
                              </tr>

                              <tr>
                                 <td>Transport Layer</td>
                                 <td>Segment</td>
                                 <td>	
                                 	Uses the protocols TCP & UDP.</td>
                                 <td>	
                                 SYN Flood, Smurf attack</td>
                                 <td>	
                                 Reach bandwidth or connection limits of hosts or networking equipment.</td>
                              </tr>

                              <tr>
                                 <td>Network Layer</td>
                                 <td>	
                                 Packet</td>
                                 <td>	
                                 Uses the protocols IP, ICMP, ARP, RARP, & RIP and uses Routers as its device.</td>
                                 <td>	
                                 ICMP Flooding - A Layer 3 infrastructure DDoS Attack method that uses ICMP 
                                 messages to overload the targeted network&apos;s bandwidth.</td>
                                 <td>	
                                 It can affect available network bandwidth and
                                  impose extra load on the firewall.</td>
                              </tr>

                              <tr>
                                 <td>Datalink Layer</td>
                                 <td>	
                                 Frame</td>
                                 <td>	
                                 Uses the Protocols 802.3 & 802.5 and its devices are NICs, switches bridges & WAPs.</td>
                                 <td>	
                                 MAC flooding - inundates the network switch with data packets.</td>
                                 <td>	
                                 Disrupts the usual sender to recipient flow of data - blasting across all ports.</td>
                              </tr>

                              <tr>
                                 <td>Physical Layer</td>
                                 <td>	
                                 	Bits </td>
                                 <td>	
                                 	Uses the Protocols 100Base-T & 1000 Base-X and uses Hubs, patch panels, & RJ45 Jacks as devices. </td>
                                 <td>	
                                 Physical destruction, obstruction, manipulation, or malfunction of physical assets.</td>
                                 <td>	
                                 Physical assets will become unresponsive and may need to be repaired to increase availability. </td>
                              </tr>

                              

                           </tbody>
                     </table>
            </div>
         </div>

         <div className="para-grap-div py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                    <div className="col">
                        <figure className="right-img-nm ison-sp1">
                            <Image src="/ad-comon1.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">
                        <h2 className="comon-head-main">  Areas covered by our Comprehensive Assessment or Cloud Security Audit: </h2>
                        <p> The following are some of the security concerns addressed during our Cloud Security Audit: </p>
                        <ul className="list-unstyled">
                            <li >
                               <span className="conmo-icon">
                               <BsXDiamondFill/>
                               </span>
                               <span>
                               Cloud Vulnerability Assessment and Cloud Penetration Testing (Cloud VAPT)
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Authentication, authorization, and identity management
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Cloud network architecture review
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               Cloud compute architecture review
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Cloud storage architecture review 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               Configurations architecture review
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               IaaS, PaaS, SaaS audit including Cloud VAPT
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               Data Backup and encryption configuration
                               </span>
                            </li>
                            <li>
                              <span className="conmo-icon">
                                 <BsXDiamondFill/>
                              </span>
                              <span>
                              Contianer security covering Dockers Security, Kubernetes Security
                              </span>
                           </li>
                           <li>
                              <span className="conmo-icon">
                                 <BsXDiamondFill/>
                              </span>
                              <span>
                              More on SOC Reporting Services
                              </span>
                           </li>
                           <li>
                              <span className="conmo-icon">
                                 <BsXDiamondFill/>
                              </span>
                              <span>
                              More on SOC 2 vs ISO/IEC 27001, 27017 for Cloud Security.
                              </span>
                           </li>
                        </ul>
                        <p> Our methodology used to develop and execute these reviews is an amalgam of 
                        techniques that features in best practices from cloud service providers and 
                        security standards from reputable sources (including hardening guides such as 
                           the NIST Benchmarks). We periodically align our methodology to the compliance and regulatory standards that many organizations have to adhere 
                        to when implementing cloud security computing services.</p>
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
