import { Navbar } from 'flowbite-react';
import React from 'react'

const Navigation = () => {
  return (
    <section className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ridwan
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="ml-auto">
          <Navbar.Link href="/navbars" active={true}>
            Work
          </Navbar.Link>
          <Navbar.Link href="/navbars">Skills</Navbar.Link>
          <Navbar.Link href="/navbars">Recommendation</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default Navigation
