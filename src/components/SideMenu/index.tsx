/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  MdHome,
  MdWhatshot,
  MdSubscriptions,
  MdHistory,
  MdSlideshow,
  MdThumbUp,
  MdSettings,
} from 'react-icons/md';

import { Container, List, AvatarChannel, Footer, Copyright } from './styles';

interface SideMenuProps {
  menuOpen: boolean;
}

const SideMenu = ({ menuOpen }: SideMenuProps) => {
  return (
    <Container className={menuOpen ? 'openMenu' : ''}>
      <List>
        <ul>
          <li className="active">
            <div>
              <MdHome size={25} />
              <span>Início</span>
            </div>
          </li>
          <li>
            <div>
              <MdWhatshot size={25} />
              <span>Em alta</span>
            </div>
          </li>

          <li>
            <div>
              <MdSubscriptions size={25} />
              <span>Inscrições</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <ul>
          <li>
            <div>
              <MdHistory size={25} />
              <span>Histórico</span>
            </div>
          </li>

          <li>
            <div>
              <MdSlideshow size={25} />
              <span>Seus vídeos</span>
            </div>
          </li>

          <li>
            <div>
              <MdThumbUp size={25} />
              <span>Vídeos marcados com "Gostei"</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <h3>Inscrições</h3>

        <ul>
          <li>
            <div>
              <AvatarChannel />
              <span>teste</span>
            </div>
          </li>

          <li>
            <div>
              <AvatarChannel />
              <span>teste</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <ul>
          <li>
            <div>
              <MdSettings size={25} />
              <span>Configurações</span>
            </div>
          </li>
        </ul>
      </List>

      <Footer>
        <div>
          <span>Sobre</span>
          <span>Imprensa</span>
          <span>Direitos autorais</span>
          <span>Criadores de conteúdo</span>
          <span>Publicidade</span>
          <span>Desenvolvedores</span>
        </div>

        <div>
          <span>Termos</span>
          <span>Privacidade</span>
          <span>Política e Segurança</span>
          <span>Testar os novos recursos</span>
        </div>

        <Copyright>
          <p>© 2020 Google LLC</p>
        </Copyright>
      </Footer>
    </Container>
  );
};

export default SideMenu;
