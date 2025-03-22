import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DynamicHelmet = () => {
  const location = useLocation();

  // Define page titles based on the URL path
  const pageTitle = (() => {
    switch (location.pathname) {
      case '/About':
        return 'About  - School';
        case '/Academics':
        return 'Academics - WeTe';
      case '/Events':
        return 'Events - WeTe';
      case '/Student':
        return 'Students  - WeTe';
      case '/Facilities':
        return 'Facilities  - WeTe';
      case '/Gallery':
        return 'Gallery  - WeTe';
      case '/Admission':
        return 'Addmissions  - WeTe';
      case '/Admissions':
        return 'Admissions  - WeTe';
      case '/*':
        return 'Page Not Found - ';
      case '/Contact':
        return 'Contact Us - WeTe';
      default:
        return 'Home - WeTe';
    }
  })();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content="Your dynamic page description" />
      <meta property="og:title" content={pageTitle} />
    </Helmet>
  );
};

export default DynamicHelmet;