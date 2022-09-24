import Link from "next/link";
import Image from "next/image";
import { BsDash } from "react-icons/bs";



function CaseStudy(){
    return(
        <>
          <div className="case-study-div py-5">
               <div className="container">
                    <h2 className="comon-head-main comon-head-main blue-color"> Case Studies </h2>
                    <h4 className="comon-head-main-sub1"> Featured Case Studies  </h4>

                    <div className="row row-cols-1 row-cols-lg-4 gy-5 g-lg-4 mt-0 mt-lg-5">

                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> Achieving CSA STAR Level 2 </h4>

                                        <Link href="/">
                                          <a className="btn download"> Download </a> 
                                        </Link>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/studies2.svg" alt="st1" 
                                            layout="fill" />
                                        </figure>
                                        
                                    </div>
                                </Link>
                        </div>

                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> SOC Reporting Services  </h4>

                                        <Link href="/">
                                          <a className="btn download"> Download </a> 
                                        </Link>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/studie1.svg" alt="st1" 
                                            layout="fill" />
                                        </figure>
                                        
                                    </div>
                                </Link>
                        </div>


                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> ISOCertification Services </h4>

                                        <Link href="/">
                                          <a className="btn download"> Download </a> 
                                        </Link>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/studies3.svg" alt="st1" 
                                            layout="fill" />
                                        </figure>
                                        
                                    </div>
                                </Link>
                        </div>


                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> Cloud VAPT</h4>

                                        <Link href="/">
                                           <a className="btn download"> Download </a> 
                                        </Link>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/data2.svg" alt="st1" 
                                            layout="fill" />
                                        </figure>
                                        
                                    </div>
                                </Link>
                            </div>
                       
                    </div>
               </div>
          </div>
        </>
    )
};
export default CaseStudy;