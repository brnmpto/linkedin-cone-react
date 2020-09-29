import React from 'react';

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcons,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcons />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars2.githubusercontent.com/u/71460757?s=460&u=770639956af2959d35b2c83cdc623bff47e54395&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default MobileHeader;
