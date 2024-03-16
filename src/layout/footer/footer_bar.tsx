// eslint-disable-next-line object-curly-newline

import { Typography, Box } from '@mui/material';

export function FooterBar() {
  return (
    <footer>
      <Box
        sx={{
          height: '5rem',
          border: '1px solid red',
          backgroundColor: 'primary.main',
        }}
      >
        <Typography color="neutral.main">I am Footer</Typography>
      </Box>
    </footer>
  );
}

export default FooterBar;
