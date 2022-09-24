import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import $  from 'jquery';

import { BsArrowRightShort,BsChevronRight, BsFillGridFill, BsFillShieldLockFill,BsFillBookmarkFill,BsLayersFill, BsCloudHaze2Fill, BsFileEarmarkBarGraphFill,BsKeyFill } from "react-icons/bs";

import { FaAngleRight, FaBars } from "react-icons/fa";


function Navbar(){

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

    const router = useRouter()


    return(
        <>
        <div className={scroll ? "bg-black" : "bg-white"}>
            <nav className="navbar navbar-expand-lg navbar-light float-start w-100">
            <div className="container">
                <Link href='/' className="navbar-brand"  >
                <a className='logo-div' data-bs-toggle="tooltip" data-bs-placement="top" title='Trusted By Many Leading Cloud Service Providers '>
                   <div className='fiex-logo'>
                        <Image
                        src="/logo-white.svg"
                        alt="Picture of the author"
                        width={191}
                        height={50}
                        
                        />
                   
                   </div> 
                   <div className='color-logo'>
                        <Image
                        src="/logo.svg"
                        alt="Picture of the author"
                        
                        width={191}
                        height={50}
                       />
                   
                   </div>
                    

                    
                </a>
               
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasmenu" >
                    <FaBars/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href='/' > 
                                <span className="nav-link">  Home </span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/about" ? "active" : ""}>
                            <Link href='/about' > 
                                <span className="nav-link">  About</span>
                            </Link>
                        </li>
                        <li className="dropdown dropdown-mega position-static">
                            <a className="nav-link mega-menu-a dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className='mega-content'>
                                
                                    <div className='row row-cols-1 row-cols-lg-4'>
                                        <div className='col'>
                                            
                                                <h5> 
                                                    <Link href='/services/socattestreports'> 
                                                        <a className='comon-link0'>
                                                        <figure className='sm-icbn m-0'>
                                                        <Image src="/pri.svg"
                                                        layout="fill"/>
                                                        </figure> 
                                                        <span>  SOC Attest Reports </span>  <BsChevronRight/>
                                                        </a>
                                                    </Link>
                                                </h5>
                                        </div>


                                        <div className='col'>
                                            <h5> 
                                                <Link href='/services/iso-certification-services'> 
                                                    <a className='comon-link0'>
                                                    <figure className='sm-icbn m-0'>
                                                        <Image src="/iso.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                        <span> ISO/IEC Certifications </span>
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>

                                        
                                        <div className='col'>
                                            <h5> 
                                                <Link href='/services/federal-assessments'> 
                                                    <a className='comon-link0'>
                                                    <figure className='sm-icbn m-0'>
                                                        <Image src="/block.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                       <span>  US Federal Assessments </span>
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>

                                       

                                        

                                        <div className='col'>
                                            <h5> 
                                                <Link href='/services/india-cert-assetsments'> 
                                                    <a className='comon-link0'>
                                                    <figure className='sm-icbn m-0'>
                                                        <Image src="/2910751.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                        <span>India CERT-In Assessments  </span>
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>

                                        


                                        <div className='col'>
                                            <h5> 
                                                <Link href='/services/privacy'> 
                                                    <a className='comon-link0'>
                                                        <figure className='sm-icbn m-0'>
                                                        <Image src="/pri.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                       <span>  Privacy Assessments </span> 
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>

                                        <div className='col'>
                                            <h5> 
                                                <Link href='/services/penetration-testing'> 
                                                    <a className='comon-link0'>
                                                    <figure className='sm-icbn m-0'>
                                                        <Image src="/pri.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                        <span> Vulnerability Assessment and Pen Test  </span>
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>

                                        <div className='col'>
                                            <h5>
                                                <Link href='/services/cloudsecurity'> 
                                                    <a className='comon-link0'>
                                                        <figure className='sm-icbn m-0'>
                                                        <Image src="/2910751.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                       <span>   Cloud Security Assessments  </span>
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>


                                        <div className='col'>
                                            <h5>
                                                <Link href='/services/cybersecurity'> 
                                                    <a className='comon-link0'>
                                                        <figure className='sm-icbn m-0'>
                                                        <Image src="/sei.svg"
                                                        layout="fill"/>
                                                        </figure>
                                                       <span>   Other Cyber Security Services </span>
                                                        <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                        </div>


                                        

                                        

                                        
                                    </div>
                            </div>
                            </ul>
                        </li>
                        <li className={router.pathname == "/contact" ? "active" : ""}>
                            <Link href='/contact' > 
                                <span className="nav-link">  Contact </span>
                            </Link>
                        </li>

                        <li>
                            <Link href='/contact' > 
                                <span className="btn lets-btn1"> Send a message </span>
                            </Link>
                        </li>
                    
                    
                        
                    
                    </ul>
                
                </div>
                
            </div>
            </nav>
        </div>



        
        <div className="offcanvas offcanvas-start mobile-menu-div" id="offcanvasmenu">
            <div className="offcanvas-header">
            
                    <button type="button" className="close-menu" data-bs-dismiss="offcanvas" >
                        <span> Close </span> 
                    </button>
            </div>

    
            <div className="offcanvas-body">
                
                <div className="head-contact">
              

                    <Link href='/' className="navbar-brand">
                                <a className='logo-side'> 
                                    <Image
                                    src="/logo.svg"
                                    alt="Picture of the author"
                                    width={191}
                                    height={50}
                                    />
                                </a>
                    </Link>
               
               
                <div className="mobile-menu-sec mt-3">
                    <ul className="list-unstyled">
                    
                        
                        <li className={router.pathname == "/about" ? "active" : ""}>
                            <Link href='/about' > 
                                <span className="nav-link">  About</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                                Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li data-bs-dismiss="offcanvas" >
                                    <Link href='/services/aicpasocreports'> 
                                        <span className="dropdown-item">  AICPA SOC 1, 2, 3 Reports </span>
                                    </Link>
                                </li>

                                <li data-bs-dismiss="offcanvas" >
                                    <Link href='/services/cybersecurity'> 
                                        <span className="dropdown-item">  Cybersecurity  </span>
                                    </Link>
                                </li>

                                <li data-bs-dismiss="offcanvas" >
                                    <Link href='/services/cloudsecurity'> 
                                        <span className="dropdown-item"> Cloud Security   </span>
                                    </Link>
                                </li>

                                <li data-bs-dismiss="offcanvas" >
                                    <Link href='/services/privacy'> 
                                        <span className="dropdown-item">  Privacy    </span>
                                    </Link>
                                </li>
                                <li data-bs-dismiss="offcanvas" >
                                    <Link href='/services/blockchain'> 
                                        <span className="dropdown-item">  Blockchain Assessments    </span>
                                    </Link>
                                </li>
                                <li data-bs-dismiss="offcanvas" >
                                    <Link href='/services/iso-certification-services'> 
                                        <span className="dropdown-item">  ISO Certification Services     </span>
                                    </Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={router.pathname == "/contact" ? "active" : ""}>
                            <Link href='/contact' > 
                                <span className="nav-link">  Contact </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                
               
                </div>
            </div>
  

        </div>
        </>
    )
}
export default Navbar;