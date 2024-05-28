import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let username = params.get('username');
    let key = params.get('key');
    if(username === null || username === undefined){
        username = "guest";
    }

    if(key === null || key === undefined){
        key = "no-key";
    }
    console.log(username);
    console.log(key);
    return (
        <div>
            <nav>
            <Link to={`/home?username=${username}&key=${key}`}>
                <div className="logo-navbar">
                    <svg>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="50pt" height="50pt" viewBox="0 0 466.000000 400.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,430.000000) scale(0.100000,-0.100000)"
                                fill="#ffffff" stroke="none">
                                <path d="M208 3783 c-53 -8 -76 -75 -38 -113 19 -19 33 -20 284 -20 243 0 265
-1 270 -17 3 -10 50 -232 105 -493 55 -261 164 -773 241 -1138 77 -365 140
-667 140 -671 0 -4 -24 -17 -54 -30 -226 -93 -230 -410 -7 -514 l46 -22 1386
-3 1386 -2 26 21 c33 25 36 70 7 99 -20 20 -33 20 -1395 20 -1521 0 -1416 -5
-1463 64 -33 48 -31 124 4 166 55 64 -51 60 1453 60 753 0 1377 3 1385 6 9 4
21 14 26 24 5 10 89 393 185 851 97 459 190 897 206 974 54 252 53 244 41 271
-7 13 -23 29 -38 34 -16 6 -650 10 -1755 10 -951 0 -1729 2 -1729 4 0 2 -18
89 -40 192 -30 138 -46 194 -61 209 -19 19 -34 20 -302 21 -155 1 -294 -1
-309 -3z m4087 -585 c-3 -13 -81 -385 -175 -828 -93 -443 -181 -858 -195 -922
-14 -65 -25 -120 -25 -123 0 -3 -573 -5 -1274 -5 l-1274 0 -16 73 c-9 39 -97
457 -196 927 -99 470 -182 865 -185 878 l-5 22 1675 0 1675 0 -5 -22z"/>
                                <path d="M1563 616 c-90 -29 -149 -85 -178 -167 -60 -169 69 -351 249 -351 97
0 192 58 239 146 29 55 30 173 2 230 -56 114 -199 179 -312 142z m137 -142
c58 -35 81 -126 45 -180 -86 -132 -287 -30 -229 116 29 72 117 103 184 64z"/>
                                <path d="M3280 611 c-99 -35 -180 -148 -180 -251 0 -53 30 -127 70 -172 126
-143 362 -108 441 66 25 54 25 157 0 211 -59 129 -201 192 -331 146z m161
-144 c67 -45 75 -139 18 -196 -52 -52 -124 -53 -181 -2 -26 23 -32 37 -36 82
-4 49 -1 59 24 88 15 18 37 37 48 41 39 16 92 11 127 -13z"/>
                            </g>
                        </svg>
                    </svg>
                </div></Link>
                <div className="name">
                <Link to={`/home?username=${username}&key=${key}`}><p>Trinity Online Electronics Store</p></Link>
                </div>
                <ul>
                    <li><Link to={`/home?username=${username}&key=${key}`}>Home</Link></li>
                    <li><Link to={`/about?username=${username}&key=${key}`}>About</Link></li>
                    <li><Link to={`/profile?username=${username}&key=${key}`}><i className="bi bi-person-circle"></i></Link></li>
                    <li><Link to={`/cart?username=${username}&key=${key}`}><i className="bi bi-cart"></i></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
