import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/images/logo.png"
        alt="logo"
        className=" h-10 object-contain"
      />
    </Link>
  );
};

export default Logo;
