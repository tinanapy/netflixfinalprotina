import React, { useEffect, useState } from 'react';
import "./Nav.css";

import youTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Nav() {
    const [show , handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            // window.removeEventListener("scroll");
        };
    }, []);
    return (
      //hule nav yihun classnamu gen show true at no 8 or >100 sihon classnamun nav__black tetkem
      <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo'
                 src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
           
              alt="Netflix Logo"
          />
            <img className='nav__avatar'
                 src="https://occ-0-990-1327.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
             
                alt="Avatar logo"
          />
    </div>
  )
}

export default Nav

