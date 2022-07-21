import { useEffect } from 'react'
import { Outlet } from 'react-router';
import Directory from '../../components/directory/directory.component.jsx'

import * as S from './home.styles'


const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <S.homeContainer>
      <Outlet />
      <Directory />
    </S.homeContainer>
  );
};

export default Home;