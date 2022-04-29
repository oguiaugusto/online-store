import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen((_location, action) => {
      if (action !== 'POP') {
        window.scrollTo(0, 0);
      }
    });
    return () => { unlisten(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default withRouter(ScrollToTop);

/* Source: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition */
