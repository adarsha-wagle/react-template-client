import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'src/redux/actions/theme.slice.ts';

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Typography color="primary">Hello world</Typography>
      <button type="button" onClick={() => dispatch(toggleTheme())}>
        Change Mode
      </button>
    </div>
  );
}
export default HomePage;
