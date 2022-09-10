import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort,BsChevronRight, BsFillGridFill, BsFillShieldLockFill,BsFillBookmarkFill,BsLayersFill, BsCloudHaze2Fill, BsFileEarmarkBarGraphFill,BsKeyFill } from "react-icons/bs";

import { FaAngleRight, FaBars } from "react-icons/fa";



function Navbar(){

    const router = useRouter()


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light float-start w-100">
         <div className="container">
            <Link href='/' className="navbar-brand">
             <a> 
                <Image
                src="/logo.png"
                alt="Picture of the author"
                width={177}
                height={33}
                />
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
                                                <Link href='/services/aicpasocreports'> 
                                                    <a className='comon-link0'>
                                                     <figure className='sm-icbn m-0'>
                                                       <Image src="/pri.png"
                                                       layout="fill"/>
                                                     </figure> AICPA SOC 1, 2, 3 Reports <BsChevronRight/>
                                                    </a>
                                                </Link>
                                            </h5>
                                    </div>

                                    <div className='col'>
                                        <h5>
                                            <Link href='/services/cybersecurity'> 
                                                <a className='comon-link0'>
                                                    <figure className='sm-icbn m-0'>
                                                       <Image src="/sei.png"
                                                       layout="fill"/>
                                                     </figure>
                                                    Cybersecurity 
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
                                                       <Image src="/cld.png"
                                                       layout="fill"/>
                                                     </figure>
                                                     Cloud Security 
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
                                                       <Image src="/pri.png"
                                                       layout="fill"/>
                                                     </figure>
                                                     Privacy 
                                                     <BsChevronRight/>
                                                </a>
                                            </Link>
                                        </h5>
                                    </div>

                                    <div className='col'>
                                        <h5> 
                                            <Link href='/services/blockchain'> 
                                                <a className='comon-link0'>
                                                   <figure className='sm-icbn m-0'>
                                                       <Image src="/block.png"
                                                       layout="fill"/>
                                                     </figure>
                                                    Blockchain Assessments
                                                    <BsChevronRight/>
                                                </a>
                                            </Link>
                                        </h5>
                                    </div>

                                    <div className='col'>
                                        <h5> 
                                            <Link href='/services/iso-certification-services'> 
                                                <a className='comon-link0'>
                                                   <figure className='sm-icbn m-0'>
                                                       <Image src="/iso.png"
                                                       layout="fill"/>
                                                     </figure>
                                                     ISO Certification Services 
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
                        <Link href='/about' > 
                            <span className="btn lets-btn1"> Send a message </span>
                        </Link>
                    </li>
                
                
                    
                
                </ul>
            
            </div>
            
         </div>
        </nav>


        
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
                                    src="/logo.png"
                                    alt="Picture of the author"
                                    width={177}
                                    height={33}
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