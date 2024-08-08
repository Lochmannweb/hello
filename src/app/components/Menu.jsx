"use client"
 
import Link from 'next/link';
import { useState } from 'react';

 
/* menuOpen er sat til false, da den først skal åbne når man trykker på kanppen*/
export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <>   
{/*Mobil menu  */}
    <nav className='sm:hidden p-5'>
      <div className='flex justify-between bg-menu-bg border-solid rounded-full px-3 items-center'>
        <div>
            <Link href="/" prefetch={false} className='text-cgc-logo font-serif'>CGC W<span className='uppercase text-xs'>argaming</span></Link>
        </div> 

        <div className=''> 
          <button
          className='sm:hidden'
          onClick={toggleMenu}>
              <svg
                className="w-8 h-8 mt-2 text-cgc-logo"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
          </button>
        </div>
        </div>
    </nav>  

    <div className={`fixed inset-0 bg-Black text-White transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 sm:hidden flex flex-col`}>
        <div className='p-5 flex justify-end'>
            <button
            className="text-White"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <ul className=''>
            <li className='grid text-center gap-3' onClick={toggleMenu}>
                <Link href="/About" prefetch={false} className='text-White hover:text-cgc-logo focus:text-cgc-logo'>About</Link>
                <Link href="/Gallery" prefetch={false} className='text-White hover:text-cgc-logo focus:text-cgc-logo'>Gallery</Link>
                <Link href="/Contact" prefetch={false} className='text-White hover:text-cgc-logo focus:text-cgc-logo'>Contact</Link>

                <div className='py-10 grid gap-3'>
                <div className="flex justify-center gap-5">
                <svg 
                  version="1.0" 
                  xmlns="http://www.w3.org/2000/svg"
                  width="23" 
                  height="23" 
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#fff" 
                    stroke="none">
                    <path d="M1218 5109 c-167 -20 -364 -85 -514 -170 -388 -223 -644 -611 -693
                    -1052 -15 -133 -15 -2521 0 -2654 71 -643 579 -1151 1222 -1222 133 -15 2521
                    -15 2654 0 643 71 1151 579 1222 1222 15 133 15 2521 0 2654 -71 643 -579
                    1151 -1222 1222 -118 13 -2554 13 -2669 0z m2773 -321 c208 -57 368 -148 508
                    -289 141 -140 232 -300 290 -508 l26 -96 0 -1335 0 -1335 -26 -96 c-58 -208
                    -149 -368 -290 -508 -140 -141 -300 -232 -508 -290 l-96 -26 -1335 0 -1335 0
                    -96 26 c-208 58 -368 149 -508 290 -141 140 -232 300 -290 508 l-26 96 0 1335
                    0 1335 26 96 c58 208 149 368 289 508 166 166 385 276 615 310 33 5 645 8
                    1360 7 l1300 -1 96 -27z"/>
                    <path d="M3945 4453 c-244 -34 -410 -271 -351 -501 41 -163 145 -266 307 -308
                    275 -70 545 179 499 460 -25 157 -140 289 -290 334 -44 13 -125 20 -165 15z
                    m112 -319 c54 -34 63 -117 18 -164 -37 -38 -82 -47 -128 -25 -70 33 -85 125
                    -29 177 41 39 89 43 139 12z"/>
                    <path d="M2367 3945 c-553 -76 -1020 -492 -1161 -1037 -124 -477 15 -981 368
                    -1334 550 -550 1422 -550 1972 0 550 550 550 1422 0 1972 -316 315 -739 459
                    -1179 399z m353 -300 c240 -36 444 -139 615 -310 431 -430 431 -1120 0 -1550
                    -430 -431 -1120 -431 -1550 0 -431 430 -431 1120 0 1550 249 249 591 363 935
                    310z"/>
                    </g>
                </svg>
                <p>CGC_minis</p>
                </div>

                <div className="flex justify-center gap-5">
                <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="25" 
                height="25" 
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#fff" 
                  stroke="none">
                <path d="M193 4256 c-94 -30 -161 -98 -183 -187 -7 -31 -10 -488 -8 -1534 l3
                -1490 30 -54 c17 -30 48 -67 69 -83 86 -62 -81 -58 2456 -58 2537 0 2370 -4
                2456 58 21 16 53 53 69 83 l30 54 0 1515 0 1515 -30 54 c-16 30 -48 67 -69 83
                -86 62 82 58 -2460 57 -1880 0 -2329 -3 -2363 -13z m4547 -200 c-8 -7 -475
                -358 -1037 -779 -685 -514 -1034 -769 -1060 -776 -49 -14 -117 -14 -166 0 -26
                7 -375 262 -1060 776 -562 421 -1029 772 -1037 779 -12 12 314 14 2180 14
                1866 0 2192 -2 2180 -14z m-3460 -921 c580 -435 1074 -799 1098 -808 24 -10
                74 -23 112 -29 84 -14 187 0 265 36 27 13 525 380 1105 815 l1055 792 3 -685
                c1 -377 1 -994 0 -1370 l-3 -685 -555 685 c-305 377 -562 690 -571 695 -27 14
                -77 11 -104 -7 -28 -19 -47 -67 -39 -101 4 -14 260 -339 570 -722 l564 -696
                -1110 -3 c-611 -1 -1609 -1 -2220 0 l-1110 3 564 696 c310 383 566 708 570
                722 8 34 -11 82 -39 101 -25 16 -71 21 -100 10 -8 -4 -264 -313 -567 -688
                -303 -374 -555 -685 -559 -690 -5 -6 -9 584 -9 1363 0 1095 3 1371 13 1365 6
                -5 487 -364 1067 -799z"/>
                </g>
                </svg>
                <p>cgcminiatures@gmail.com</p>
                </div>
                </div>
            </li>
        </ul>
    </div>


    {/* desktop menu */}
    <section className='p-5'>
    <nav className='sm:p-5 sm:bg-transparent bg-menu-bg sm:rounded-full'>
        <ul className='sm:flex hidden justify-between gap-3 p-2'>
            <li className='flex gap-3 ml-5'>
                <Link href="/About" prefetch={false} className='text-White hover:text-cgc-logo focus:text-cgc-logo'>About</Link>
                <Link href="/Gallery" prefetch={false} className='text-White hover:text-cgc-logo focus:text-cgc-logo' >Gallery</Link>
            </li>

            <li>
                <Link href="/" prefetch={false} className='text-cgc-logo'>CGC W<span className='uppercase text-xs'>argaming</span></Link>
            </li>

            <li className='flex gap-3 mr-5'>
                <Link href="/Contact" prefetch={false} className='text-White hover:text-cgc-logo focus:text-cgc-logo'>Contact</Link>
            </li>
        </ul>
    </nav>
    </section>
    </>
  );
}