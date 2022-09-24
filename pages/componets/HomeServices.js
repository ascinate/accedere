import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";





function HomeServices(){

    return(
        <>
        <div className='services-part-home new-home'>
            <div className='container'>
                <h2 className='comon-head-main text-center blue-color'> Introducing Our Security Services</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-0 gy-5 g-lg-4">

                    <div className="col">
                        <Link href="/services/socattestreports">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1321938.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>SOC Attest Reports</h4>
                                <p> 
                                Being a CPA licensed firm we can issue SOC 1, SOC 2 and SOC 3 reports for you to build your customers 
                                confidence with how you manage your third-party data.
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/services/iso-certification-services">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    
                                    <Image src="/5261087.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>ISO/IEC Certifications</h4>
                                <p> 
                                We&apos;re an Accredited ISO Certification body and can assist you with Audits & Certifications on ISO/IEC 27000 family of standard as well 
                                as any Cloud Data Security and Privacy Certifications.
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/services/federal-assessments">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/2652313.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>US Federal Assessments</h4>
                                
                                <p> 
                                We can help you to stay compliant with FedRAMP and CMMC.
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/services/india-cert-assetsments">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/2830155.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4> India CERT-in Assessments  </h4>
                                <p> 
                                We can conduct Audits for RBI / SEBI compliance, Safe-to-Host, Data Localization and Aadhar AUI/KUA.
                                </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/services/privacy">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                   
                                    <Image src="/7790150.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Privacy Assessments </h4>
                                <p> 
                                We can help you with Privacy and related compliances like GDPR, HIPAA and other privacy mandates.
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>

                    
                    
                    <div className="col">
                        <Link href="/services/penetration-testing">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1995751.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4> Vulnerability Assessment and Pen Test </h4>
                                <p> 
                                We can help you with Vulnerability Assessment & Penetration Testing for your Applications and Systems.
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>

                    

                    <div className="col">
                        <Link href="/services/cloudsecurity">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/4842902.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Cloud Security Assessments</h4>
                                <p> 
                                We can help you with your cloud security requirements like Kubernetes / Docker Security, 
                                Container Security, and other cloud related mandates.
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/services/cybersecurity">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1067263.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4> Other Cyber Security Services  </h4>
                                <p> 
                                We can help you with SCADA, Blockchain, IoT related compliances and 
                                provide you with Hire Cyber Security Contractors  
                               </p>

                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>
                    

                </div>
            </div>

            
        </div>
        </>
    )
}
export default HomeServices;