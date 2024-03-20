import { Button, Typography } from '@mui/material';

function FirstSectionHomeLanding() {
  const handleThrowError = () => {
    throw new Error('This is an error came from home');
  };
  return (
    <div>
      <Typography>Home Landing Section</Typography>
      <Button onClick={handleThrowError}>Throw new error</Button>
    </div>
  );
}

export default FirstSectionHomeLanding;
