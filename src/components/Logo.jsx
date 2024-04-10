// import React from 'react';

// function Logo({ width = '100px', imageUrl }) {
//   return (
//     <div >
//       <img src="Logo.png" alt="Input Image" style={{ width }} />
      
//     </div>
//   );
// }

// export default Logo;


import React from "react";
import logo from "../../public/images/logo.png";
const Logo = ({
  width = "100px",

  invert = true,
  className,
}) => {
  return (
    <img
      className={`${invert && "invert"} ${className} `}
      src={logo}
      width={width}
    
      alt="Logo"
    />
  );
};

export default Logo;
