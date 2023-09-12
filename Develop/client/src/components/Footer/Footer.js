// import { MailchimpForm } from "../MailChip/MailchimpForm";
// import logo from "../footer.js/logo.svg";
// import navIcon1 from "../footer.js/nav-icon1.svg";
// import navIcon2 from "../footer.js/nav-icon2.svg";
// import navIcon3 from "../footer.js/nav-icon3.svg";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <MailchimpForm />

//           <Col size={12} sm={6}>
//             <img src={logo} alt="Logo" />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             Social Media Icons Here
//             <div className="social-icon">
//               <a href="#"><img src={navIcon1} alt="Icon" /></a>
//               <a href="#"><img src={navIcon2} alt="Icon" /></a>
//               <a href="#"><img src={navIcon3} alt="Icon" /></a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

import logo from "./logo.svg";
import navIcon1 from "./nav-icon1.svg";
import navIcon2 from "./nav-icon2.svg";
import navIcon3 from "./nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2">
            <img src={logo} alt="Logo" />
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right mt-4 sm:mt-0">
            <div className="flex justify-center sm:justify-end space-x-4 mt-5">
              <a href="#">
                <img src={navIcon1} alt="Icon" className="w-12 h-12" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" className="w-12 h-12" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
