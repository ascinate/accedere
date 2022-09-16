import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";




function HomeServices(){

    return(
        <>
        <div className='services-part-home'>
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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

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