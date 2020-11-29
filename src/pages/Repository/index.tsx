import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FunctionComponent = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/60330828?s=460&u=cc32102f0ee41d53cdbb248f7d592e2312b331c2&v=4"
            alt="avatar"
          />
          <div>
            <strong>blablabla</strong>
            <p>Desceição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>18010</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>18010</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>18010</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="dfgsdfsdf">
          <div>
            <strong>uijokplḉ;</strong>
            <p>ghyjukiolpç</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
