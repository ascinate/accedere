
import Image from "next/image";
import { BsXDiamondFill, BsDash,  } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";

import Head from "next/head";


const Download= () => {

  function downloadFile(filePath) {
    if(process.browser) {

      var link = document.createElement('a');
      link.href = filePath;
      link.target = "_blank"
      link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
      link.click();
    }
  }
  
  downloadFile("/SOC Reporting Services.pdf");

  return (
    <div>
      <div>
          <div className="comon-padf d-flex align-items-center">
            <figure className="m-0">
              <Image src="/pdf1.png" alt="am" layout="fill"/>
            </figure>
            <span> Cloud VAPT </span>
         </div>
      </div>
    </div>
  );
};

export default Download;