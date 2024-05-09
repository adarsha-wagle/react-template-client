import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { store } from 'src/redux/store';

// Used to pre fetch data on protect../ routes
function PreFetch() {
  useEffect(() => {
    console.log('subscribing');
    return () => {
      console.log('unsubscribing');
    };
  }, []);

  return <Outlet />;
}

export default PreFetch;
