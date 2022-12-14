import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import { useNavigate} from 'react-router-dom';

function ScrollToTop({ history }) {
  // const navigate = useNavigate();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  });

  return (null);
}

export default withRouter(ScrollToTop);