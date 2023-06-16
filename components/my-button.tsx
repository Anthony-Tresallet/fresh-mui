import { Button } from '@mui/material';

const MyButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Click me
    </Button>
  );
};

export default MyButton;