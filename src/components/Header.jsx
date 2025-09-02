 import chefImage from '../images/chef.png';

const Header = () => {
  return (
    <header>    
       <h1>Chef Claude</h1>
      <img src={chefImage} alt="Chef Claude Logo" />        
    </header>
  );
};

export default Header;
