
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";


function soc2privacy(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> Privacy Assurance with SOC 2 </h2>

                              <p className="text-white mt-3"> The SOC 2 compliance report provides an assurance to the internal and external stakeholders of the organization, the specific controls implemented, and/or operating effectively for complying with privacy regulatory requirements. A single SOC 2 report can provide information about the organization&apos;s controls over PII data based on the AICPA&apos;s Privacy 
                              Category of the Trust Services Criteria and, any specific privacy requirements.</p>

                              <p className="text-white mt-4"> The SOC 2 can provide service organizations the ability to increase transparency and communicate through a single deliverable to customers, business partners, and stakeholders both in and outside the organization. Organizations should also demand a SOC 2 report from their business associates, CSP&apos;s, and other third parties or vendors to understand and to have an assurance over the controls 
                              implemented and operating effectiveness of the relevant controls covering Privacy.
                              </p>
     
                           </div>
                           <div className="col">
                               <figure className="cmr-small-pic">
                                    <Image src="/AdobeStock_257556825.webp" alt="about"
                                  
                                    layout='fill'
                                    />
                               </figure>
                           </div>
                        </div>


                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">

                        <div className="col">
                               <figure className="cmr-small-pic cpn1">
                                    <Image src="/socpng.png" alt="about"
                                  
                                    layout='fill'
                                    />
                               </figure>
                           </div>
                           <div className="col">
                              <h2 className="comon-head-main text-white"> SOC2 with Cloud and Privacy Controls </h2>

                              <p className="text-white mt-3"> CSA in Collaboration with the AICPA, developed a third-party Assessment program of cloud provides Officially Known as
                              CSA Security Trust & Assurance Ragistry (Star) Attestation. STAR Attestation provides a framework for CPAs performing independent assessment of cloud providers using SOC 2@ engagements with CSA&apos;s Cloud Controls Matrix
                              </p>

                              <p className="text-white mt-4"> The C5  is intended primarily for CSP&apos;s, their auditors and customers of the CPS&apos;a A SOC 2 report proves that a CSp complies with requirments of the catalogue.
                              </p>

                              <p className="text-white mt-4"> The C5  is intended primarily for CSP&apos;s, their auditors and customers of the CPS&apos;a A SOC 2 report proves that a CSp complies with requirments of the catalogue.
                              </p>
     
                           </div>
                           
                        </div>



                        

                        
                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2  g-lg-5 mt-0">
                            <div className="col">
                                 <figure className="cmr-small-pic">
                                        <Image src="/what-is-cloud-security01.jpg" alt="about"
                                        layout='fill'
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main"> Cloud Vendors as Third-Party Risks </h2>
                                 <p className="mt-4"> Managing third-party risk is an important aspect of the overall risk management process and Zero Trust Security. Cloud providers are third parties that store or process valuable information. “From a cybersecurity perspective, third party risks frequently involve a set of threats that may exceed the scope of the organization&apos;s risk management activities. Some organizations focus too narrowly on risks. For example, when hosting data in the cloud, most organizations ask the 
                                 vendor for attestations or some evidence of cybersecurity capability. </p>
         
                            </div>
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            <div className="col">
                                <h2 className="comon-head-main "> IoT and Cloud </h2>
                                <p className="mt-4"> Connected devices and cyber-physical systems are becoming more prevalent in enterprise environments. As the cloud environment expands to encompass these technologies, the connected world depends on devices to manage, orchestrate, and provision data. By 2023, the number of connected devices is forecast to reach 20 billion. This increase in volume is a growing challenge for service providers tasked with trying to keep their networks secure and for enterprises and critical
                                 infrastructure entities deploying and managing devices. </p>

                                <p> Insecure data flow from the edge to the cloud is a concern for data processing specially in the age of Microservices & Contianerization involving Dockers,
                                 Kubernetes etc. This calls for increasing use of DevSecOps. </p>

                                 <p> Distributed denial-of-service (DDoS) botnet attack is another top IoT risk.
                                 The Mirai botnet exploited a vulnerability in IoT devices to launch a DDoS attack against a
                                  critical Domain Name System (DNS) server that disrupted a number of 
                                 the Internet&apos;s biggest websites, including PayPal, Spotify, and Twitter. </p>

                                <p> According to the Open Web Application Security Project (OWASP), both aspects of security in this convergence are facing challenges from each other. Cloud web interface is listed as one of the attack surfaces of IoT, while some top security risk factors include service and data
                                 integration, which is linked to the security of IoT devices. </p>

                            </div>
                            <div className="col">
                                 <figure className="cmr-small-pic">
                                        <Image src="/data.jpeg" alt="about"
                                        layout='fill'
                                        />
                                </figure>
                            </div>
                            
                        </div>
                       

                        
                    </div>
                </div>


                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row">
                            
                            <div className="col-lg-5">
                                    <figure className="cmr-small-pic">
                                        <Image src="/adata.jpg" alt="about"
                                        layout='fill'
                                        />
                                    </figure>
                            </div>
                            <div className="col-lg-7 ps-lg-5">
                                <h2 className="comon-head-main "> Security Responsibilities in the Cloud </h2>
                                <h5 className="mt-4"> At a high level, security responsibility maps to the degree of control any given 
                                actor has over the cloud architecture stack consists of:</h5>

             

                                 <h5 className="my-4"> SOC 2 compliance reports now have many flavors </h5>

                                 <ul className="list-unstyled">
                                     <li>
                                       <span> <BsXDiamondFill/> </span>
                                       <span>
                                       Software as a Service (SaaS)—The CSP is responsible for nearly all security because the cloud user can only access and manage their use of the application and cannot alter how the application works. For example, a SaaS provider is responsible for perimeter security, logging/monitoring/auditing, and application security, while
                                        the consumer may only be able to manage authorization and entitlements.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <BsXDiamondFill/> </span>
                                       <span>
                                       Platform as a Service (PaaS)—The CSP is responsible for the security of the platform, while the consumer is responsible for everything they implement on the platform, including how they configure any offered security features. The responsibilities are, thus, more evenly split. For example, when using a Database as a Service, the provider manages fundamental security, patching, and core configuration, while the cloud user is responsible for everything else, including which security features of the 
                                       database to use to manage accounts or even authentication methods.
                                       </span>
                                     </li>
                                     <li>
                                        <span> <BsXDiamondFill/> </span>
                                       <span>
                                       Infrastructure as a Service (IaaS): Just like PaaS, the provider is responsible for foundational security, while the cloud user is responsible for everything they build on the infrastructure. Unlike PaaS, this places far more responsibility on the client. For example, the IaaS provider will likely monitor their perimeter for attacks, but the consumer is fully responsible for how they define and implement their virtual 
                                       network security, based on the tools available on the service.
                                       </span>
                                     </li>
                                    
                                  </ul>

                            </div>
                            
                            
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row">
                            
                            
                            <div className="col-lg-7 pe-lg-5">
                                <h2 className="comon-head-main "> Shared Responsibility Model </h2>
                                 
                                <p> Some SaaS providers believe that if they are hosting their application on platforms such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud and they are automatically compliant just because these platforms may be. This may be applicable to other IaaS or PaaS providers. SaaS CSPs may also need to review the exact controls in the SOC reports and examine whether the relevant controls and criteria are covered in those SOC reports. The availability of a SOC report should 
                                not be just a checkbox for third-party (vendor) risk compliance.</p>
                                <p> This customer/platform shared responsibility model also extends to IT controls. Just as the responsibility to operate the IT environment is shared between AWS and its customers, so is the management, operation, and verification of IT controls. Cloud platforms can help relieve the customer burden of operating controls by managing those controls associated with the physical infrastructure deployed in their environment that may previously have been managed by the customer. As every SaaS is deployed differently in the cloud, SaaS providers can take advantage of shifting management of certain IT controls to the platforms, 
                                which results in a (new) distributed control environment.</p>


                            </div>

                            <div className="col-lg-5">
                                    <figure className="comon-img-pic">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            
                            
                        </div>

                        <div className="row mt-5">
                            
                            <div className="col-lg-5">
                                    
                                <figure className="cmr-small-pic">
                                    <Image src="/data2.jpg" alt="about"
                                    layout='fill'
                                    />
                                </figure>
                                
                            </div>
                            
                            <div className="col-lg-7 ps-lg-5">
                                <h2 className="comon-head-main "> Data Governance in the Cloud </h2>
                                 
                                <p> Governance issues also relate to regulatory compliance, security, privacy, and similar concerns impacting today&apos;s organizations. Today&apos;s data management and storage landscape, where data entropy and data sprawl 
                                are rampant, has far-reaching consequences for data security.</p>

                                <p> Many organizations are storing a significant amount of data in distributed and hybrid cloud and even unmanaged environments, increasing challenges for regulatory compliance. A data inventory and data flow are often recommended. With increasing IoT devices and data lakes in the cloud, visibility and control are invariably lost, resulting in data sovereignty challenges. Disruptive technologies such as Blockchain (distributed ledger) have emerged as candidates for financial institutions to reform their businesses. The speed and cost of doing business using distributed ledger technology are expected to improve by simplifying back-office operations and lowering the need for human intervention. However,
                                 a number of security concerns around this new technology remain.</p>


                            </div>

                            
                            
                            
                        </div>
                       

                        
                    </div>
                </div>

                <div className="bg-grapy para-grap-div py-5">
                    <div className="container">
                                
                        <h2 className="comon-head-main "> Data Encryption or Anonymization </h2>
                                    
                        <p> Privacy mandates such as the EU General Data Protection Regulation (GDPR) recommend data anonymization, which can be another form of encryption. Without a proper data governance program, organizations may face challenges in meeting these privacy compliance mandates. Data encryption is also mandated for the US Health Insurance Portability and Accountability Act (HIPAA) 
                        and the Payment Card Industry Data Security Standard (PCI DSS).</p>

                        <p> Data security and privacy are increasingly challenging in today&apos;s cloud-based environments. Providing independent third-party assurance such as a System and Organization Controls (SOC) 2 report helps address these concerns and helps cloud service providers (CSPs) stay ahead of the competition. This assurance also helps 
                        organizations mitigate data security and privacy risk.</p>


                        <h2 className="comon-head-main "> Cloud Assurance for CSPs </h2>
                                    
                        <p> There are several approaches for CSPs to provide assurance to their customers that 
                        would provide them with confidence in using the CSP&apos;s services.</p>

                        <h2 className="comon-head-main ">CSA STAR Certification Roadmap</h2>
                        <p> The Cloud Security Alliance (CSA), in collaboration with the American Institute of CPAs (AICPA), developed a third-party assessment program of CSPs called the CSA Security Trust Assurance and Risk (STAR) Attestation. The STAR is the industry&apos;s most powerful program for security assurance in the cloud. STAR encompasses key principles of transparency, rigorous auditing, and harmonization of standards. The STAR program provides multiple benefits, including indications of best practices 
                        and validation of the security posture of cloud offerings.</p>

                        <h2 className="comon-head-main ">Cloud CSA STAR Level 2 Attestation/ Certification</h2>
                        <p> The SOC 2+ Framework allows a SOC 2 to report on any additional controls over and above the trust services criteria controls for security, availability, confidentiality, processing integrity, and privacy. Taking advantage of this framework, STAR Attestation provides a framework for Certified Public Accountants performing independent assessments of CSPs using SOC 2 engagements with the Cloud Security Alliance&apos;s Cloud Controls Matrix (CCM). Alterntively being a Certification Body Accedere can also provide the ISO/IEC 27001
                         Certification + CCM from CSA to achieve the STAR Level 2 compliance.</p>

                        <h2 className="comon-head-main "> Cloud Controls Matrix (CCM) </h2>
                        <p> The CCM now CCM 4, is the only meta-framework of cloud-specific security controls, mapped to leading standards, best practices, and regulations. CCM provides organizations with the needed structure, detail, and clarity relating to information security tailored to cloud computing. CCM is currently considered a de-facto standard for cloud security assurance 
                        and compliance. CCM also covers some Privacy controls that are mapped to GDPR. </p>


                        <h2 className="comon-head-main "> Level 2 CSA STAR Compliance </h2>
                        <p> The STAR Attestation is positioned as STAR Certification at Level 2 of the Open Certification Framework and STAR Certification is a rigorous third-party independent assessment of the security of a cloud service provider STAR Attestation is based on type I or SOC 2 compliance attestations supplemented by the 
                        criteria in the CCM. Accedere is listed with Cloud Security Alliance as Auditors </p>


                        <h2 className="comon-head-main "> C5 Cloud Controls </h2>
                        <p> In February 2016, the Bundesamt fur Sicherheit Institute (BSI) or the German Federal Office for Information Security, established the Cloud Computing Compliance Controls Catalog (C5) certification after it noted the rise in cloud computing in Germany. With the C5, the BSI redefined the bar that CSPs should meet when dealing with German data. The establishment of the C5 elevated the demands on CSPs by combining the existing security standards including ISO 27001 Certification and requiring 
                        increased transparency in the data processing. C5 controls can be applied globally. </p>

                        <p> C5 is intended primarily for professional CSPs, their auditors, and customers of the CSPs. The catalog is divided into 17 thematic sections (e.g., organization of information security, physical security). C5 makes use of recognized security standards, such as ISO 27001 Certification, the Cloud Controls Matrix of the Cloud 
                        Security Alliance and, BSI publications, and it uses these requirements wherever appropriate. </p>

                        <p> A SOC 2 compliance report proves that a CSP complies with the requirements of the catalogue and that the statements made on transparency are correct. This report is based on the internationally recognized attestation system of the International Standard for Assurance Engagements (ISAE) 3000, which is used by public auditors. When auditing the annual financial statements, the auditors are already on site, and 
                        auditing according to C5 can be performed without much additional effort. </p>

                         


                    </div>
                </div>


                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row">
                            
                            
                            <div className="col-lg-7 pe-lg-5">
                                <h2 className="comon-head-main "> CSA STAR for Cloud-Benefits: </h2>
                                 
                                <ul className="list-unstyled mt-4">
                                   <li>
                                      <span className="me-3">
                                        <BsXDiamondFill/>
                                      </span>
                                      <span>
                                      Based on an ISO 27001 Certification or SOC 2 Compliance and Attestation along with CCM.
                                      </span>
                                   </li>
                                   <li>
                                      <span className="me-3">
                                        <BsXDiamondFill/>
                                      </span>
                                      <span>
                                      It is a Third-Party audit with CSA logo and ISO/IEC or SOC 2 (AICPA) logo that provides assurance to your customers.
                                      </span>
                                    </li>
                                    <li>
                                      <span className="me-3">
                                        <BsXDiamondFill/>
                                      </span>
                                      <span>
                                        Most recognized assurance for Cloud Security.
                                      </span>
                                    </li>
                                    <li>
                                      <span className="me-3">
                                        <BsXDiamondFill/>
                                      </span>
                                      <span>
                                      Covers a CSA Maturity model.
                                      </span>
                                    </li>
                                    <li>
                                      <span className="me-3">
                                        <BsXDiamondFill/>
                                      </span>
                                      <span>
                                      Comprehensive Framework for AICPA, Security in Cloud Computing, Application Security and C5
                                      </span>
                                    </li>
                                    
                                    <li>
                                      <span className="me-3">
                                        <BsXDiamondFill/>
                                      </span>
                                      <span>
                                      A SOC 2 Type 2 with CSA STAR can only be provided by a CPA Firm or a Certification Body (for ISO/IEC 27001) and listed with Security in Cloud Computing, Application Security Alliance.
                                       Accedere is listed as both Security in Cloud Computing, Application Security.
                                      </span>
                                    </li>
                                </ul>

                                <p>
                                   <Link href="/">
                                      <span className="btn btn-comonlinke-1 mt-4">More on SOC Reporting Services</span>
                                   </Link>
                                </p>


                            </div>

                            <div className="col-lg-5">
                                    <figure className="cmr-small-pic">
                                      <Image src="/adata.jpg" alt="about"
                                      layout='fill'
                                      />
                                  </figure>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>


                <div className="white-paper-comon-1 py-5">
                     <div className="container">
                         <h2 className="comon-head-main text-center"> For more 
                         details please read our White paper</h2>
                         <p className="text-center">
                            <Link href="/">
                               <span className="btn btn-comonlinke-1 mt-3"> View Details </span>
                            </Link>
                         </p>
                     </div>
                </div>



          </div>
          <Footer/>
        </>
    );
}
export default soc2privacy;