import { Navbar } from 'flowbite-react';
import profile from '../images/ridwan-trans-bg.png';


// const Navigation = () => {
//   return (
//     <section className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//       <Navbar fluid={true} rounded={true} className="py-6">
//         <Navbar.Brand href="https://flowbite.com/">
//           <img
//             src={profile}
//             className="mr-3 h-6 sm:h-9 rounded-full ml-64"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//             Ridwan
//           </span>
//         </Navbar.Brand>
//         <div className="flex md:order-2">
//           <Navbar.Toggle />
//         </div>
//         <Navbar.Collapse className="ml-auto mr-64">
//           <Navbar.Link href="/navbars" active={true} className="text-xl">
//             Work
//           </Navbar.Link>
//           <Navbar.Link href="/navbars" className="text-xl">
//             Skills
//           </Navbar.Link>
//           <Navbar.Link href="/navbars" className="text-xl">
//             Recommendation
//           </Navbar.Link>
//           <Navbar.Link href="/navbars" className="text-xl">
//             Contact
//           </Navbar.Link>
//         </Navbar.Collapse>
//       </Navbar>
//     </section>
//   );
// }

// export default Navigation
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navigation({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 py-6 bg-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              src={profile}
              className="ml-3 h-6 sm:h-9 rounded-full"
              alt="Flowbite Logo"
            />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-base">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-base">Recommendations</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-base">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default  Navigation;
