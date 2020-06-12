import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Functionality recommended by React Router. Causes a scroll to top of the page each time path changes.
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop