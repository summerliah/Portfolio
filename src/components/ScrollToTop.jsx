import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top when navigating between main pages
    if (!pathname.includes('#')) {
      const element = document.documentElement;
      element.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;