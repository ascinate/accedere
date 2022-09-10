import Link from "next/link";
import Image from "next/image";



function CaseStudy(){
    return(
        <>
          <div className="case-study-div py-5">
               <div className="container">
                    <h4 className="comon-head-sub"> Case Studies </h4>
                    <h2 className="comon-head-main"> Featured Case Studies  </h2>

                    <div className="row row-cols-1 row-cols-lg-3 gy-5 g-lg-0 mt-0 mt-lg-5">

                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> Lorem Ipsum is simply dummy text of the printing and typesetting </h4>

                                        <ul className="list-unstyled d-flex align-items-center">
                                            <li>
                                            Admin
                                            </li>
                                            <li>
                                            10hrs
                                            </li>
                                        </ul>

                                        <ul className="list-unstyled d-flex align-items-center btn-grop1">
                                            <li>
                                            <Link href="/">
                                                <span className="btn cm-st1">
                                                ISO 27001
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="/">
                                                <span className="btn cm-st1">
                                                    SOC 2
                                                </span>
                                            </Link>
                                            </li>
                                        </ul>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/studies2.jpeg" alt="st1" 
                                            layout="fill" />
                                        </figure>
                                        
                                    </div>
                                </Link>
                        </div>

                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> New Acquisitions Prove No Problem for Corcentric, Who Continue to Roll </h4>

                                        <ul className="list-unstyled d-flex align-items-center">
                                            <li>
                                            Admin
                                            </li>
                                            <li>
                                            10hrs
                                            </li>
                                        </ul>

                                        <ul className="list-unstyled d-flex align-items-center btn-grop1">
                                            <li>
                                            <Link href="/">
                                                <span className="btn cm-st1">
                                                ISO 27001
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="/">
                                                <span className="btn cm-st1">
                                                    SOC 2
                                                </span>
                                            </Link>
                                            </li>
                                        </ul>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/studies1.jpeg" alt="st1" 
                                            layout="fill" />
                                        </figure>
                                        
                                    </div>
                                </Link>
                        </div>


                        <div className="col">
                                <Link href="/">
                                    <div className="case-styudies-div">
                                        <h6> Case Studies </h6>
                                        <h4> Wrike achieves remote audit success with communication and preparation </h4>

                                        <ul className="list-unstyled d-flex align-items-center">
                                            <li>
                                            Admin
                                            </li>
                                            <li>
                                            10hrs
                                            </li>
                                        </ul>

                                        <ul className="list-unstyled d-flex align-items-center btn-grop1">
                                            <li>
                                            <Link href="/">
                                                <span className="btn cm-st1">
                                                ISO 27001
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="/">
                                                <span className="btn cm-st1">
                                                    SOC 2
                                                </span>
                                            </Link>
                                            </li>
                                        </ul>

                                        <figure className="mt-4 case-st-img">
                                            <Image src="/studies3.jpeg" alt="st1" 
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