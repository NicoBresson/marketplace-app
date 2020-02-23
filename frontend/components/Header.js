import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import Cart from './Cart';
import Search from './Search';

Router.onRouteChangeStart=()=>{
  NProgress.start();
}
Router.onRouteChangeComplete=()=>{
  NProgress.done();
}
Router.onRouteChangeError=()=>{
  NProgress.done();
}

const Logo = styled.h1 `
  font-size:4rem;
  margin-left:2rem;
  position:relative;
  z-index:2;
  transform:skew(-7deg);
  a{
    padding:0.5rem;
    background:${props => props.theme.red};
    color:white;
    text-transform:uppercase;
    text-decoration:none;
  }
  @media(max-width:1300px){
    margin:0;
    text-align:center;
  }
`;

const StyledHeader = styled.div `
.bar{
  border-bottom:10px solid ${props => props.theme.black};
  display: grid;
  grid-template-colums:auto 1fr;
  justify-content:space-between;
  align-items:strech;
  @media(max-width:1300px){
      grid-template-colums: 1fr;
      justify-content:center;
  }
}
.sub-bar{
  display:grid;
  grid-template-colums:1fr auto;
  border-bottom:10px solid ${props => props.theme.lightgrey};
}
`;


const Header = () => (
    <StyledHeader>
    <div className='bar'>
      <Logo>
        <Link href='/'>
         <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
                      </div>
    <div className="sub-sub">
      <Search/>
    </div>
    <Cart/>
    </StyledHeader>
)

export default Header;
