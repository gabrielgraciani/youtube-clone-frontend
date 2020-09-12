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
              <div>
                <MdHome size={25} />
              </div>
              <span>Início</span>
            </div>
          </li>
          <li>
            <div>
              <div>
                <MdWhatshot size={25} />
              </div>
              <span>Em alta</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdSubscriptions size={25} />
              </div>
              <span>Inscrições</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <ul>
          <li>
            <div>
              <div>
                <MdHistory size={25} />
              </div>
              <span>Histórico</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdSlideshow size={25} />
              </div>
              <span>Seus vídeos</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdThumbUp size={25} />
              </div>
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
              <div>
                <AvatarChannel />
              </div>
              <span>teste</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <AvatarChannel />
              </div>
              <span>teste</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <ul>
          <li>
            <div>
              <div>
                <MdSettings size={25} />
              </div>
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
