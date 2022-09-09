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

                <div className="row row-cols-1 row-cols-lg-4 mt-0 g-lg-4">

                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1321938.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>SOC & Attestations</h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/2652313.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Federal Assessments</h4>
                                
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/4021708.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Payment Card Assessments</h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1962589.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Healthcare Assessments</h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    
                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/5261087.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4> ISO Certifications </h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1962589.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Penetration Testing </h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/7790150.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Privacy Assessments</h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>

                                <span className="btn"> read more <BsArrowRightShort/> </span>
                            </div>
                        </Link>
                    </div>


                    <div className="col">
                        <Link href="/">
                            <div className="comon-card">
                                <figure className="icon-comon-new">
                                    <Image src="/1067263.png"
                                    alt="Picture of the author"
                                    layout="fill"/>
                                </figure>

                                <h4>Targeted Security Assessments </h4>
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