import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";




function HomeServices(){

    return(
        <>
        <div className='services-part-home new-home'>
            <div className='container'>
                <h4 className='comon-head-sub text-center'> Our Services </h4>
                <h2 className='comon-head-main text-center'> Introduce Our Best Security Services </h2>

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
                                Build trust and confidence with your customers and their auditors with an independent SOC 1, 
                                SOC 2, or SOC 3 examination.
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
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
                                Support your ATO for federal agencies by providing an independent assessment 
                                with a FedRAMP or CMMC assessment.
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/4021708.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>India CERT-IN Assetsments</h4>
                                <p> 
                                Validate compliance by adherence to your PCI DSS requirements through a Report on Compliance.
                                </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/services/iso-certification-services">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1962589.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>ISO/IEC Certifications</h4>
                                <p> 
                                Evaluate the growing healthcare complexities to ensure you are providing
                                 the highest level of security and privacy to your business associates and covered entities. 
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    
                    <div className="col">
                        <Link href="/services/penetration-testing">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/5261087.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4> Vulnerability Assessment & Penetration Testing </h4>
                                <p> 
                                Increase the confidence in your product or service by certification through the 
                                standards developed and published by the International Organization for Standardization.
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/services/privacy">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1962589.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Privacy Assessments </h4>
                                <p> 
                                Strengthen your security to effectively respond and mitigate the threats  
                                to an increasingly vulnerable technology landscape.
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/services/cloudsecurity">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/7790150.svg"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Cloud Security Assessments</h4>
                                <p> 
                                Identify and assess the strict data protection regulations across 
                                the world and different industries to ensure the privacy of the data you process.
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
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

                                <h4>Other Cyber Security Services</h4>
                                <p> 
                                Identify gaps and obtain feedback on key security risks and control sets.
                               </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
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