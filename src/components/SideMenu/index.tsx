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

import { Container, List, ListItem, AvatarChannel, Footer } from './styles';

interface SideMenuProps {
  menuOpen: boolean;
}

const SideMenu = ({ menuOpen }: SideMenuProps) => {
  return (
    <Container open={menuOpen}>
      <List>
        <ListItem active>
          <MdHome size={25} />
          <span>Início</span>
        </ListItem>
        <ListItem>
          <MdWhatshot size={25} />
          <span>Em alta</span>
        </ListItem>

        <ListItem>
          <MdSubscriptions size={25} />
          <span>Inscrições</span>
        </ListItem>
      </List>

      {menuOpen && (
        <>
          <List>
            <ListItem>
              <MdHistory size={25} />
              <span>Histórico</span>
            </ListItem>

            <ListItem>
              <MdSlideshow size={25} />
              <span>Seus vídeos</span>
            </ListItem>

            <ListItem>
              <MdThumbUp size={25} />
              <span>Vídeos marcados com "Gostei"</span>
            </ListItem>
          </List>

          <List>
            <h3>Inscrições</h3>

            <ListItem>
              <AvatarChannel />
              <span>teste</span>
            </ListItem>

            <ListItem>
              <AvatarChannel />
              <span>teste</span>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <MdSettings size={25} />
              <span>Configurações</span>
            </ListItem>
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

            <div>
              <span>© 2020 Google LLC</span>
            </div>
          </Footer>
        </>
      )}
    </Container>
  );
};

export default SideMenu;
