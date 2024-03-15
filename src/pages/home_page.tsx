import { Typography } from '@mui/material';
import { useMode } from 'src/theme/theme.ts';

function HomePage() {
  const [colorMode] = useMode();
  console.log('color mode', colorMode);
  return (
    <div>
      <Typography color="primary">Hello world</Typography>
      <button type="button">Change Mode</button>
    </div>
  );
}
export default HomePage;
