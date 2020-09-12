/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  FaHome,
  FaFire,
  FaYoutube,
  FaHistory,
  FaThumbsUp,
} from 'react-icons/fa';

import { Container, Item } from './styles';

interface SideMenuProps {
  menuOpen: boolean;
}

const SideMenu = ({ menuOpen }: SideMenuProps) => {
  return (
    <Container open={menuOpen}>
      <Item active>
        <FaHome size={20} />
        <span>Início</span>
      </Item>
      <Item active={false}>
        <FaFire size={20} />
        <span>Em alta</span>
      </Item>
      <Item active={false}>
        <FaYoutube size={20} />
        <span>Inscrições</span>
      </Item>

      {menuOpen && (
        <>
          <Item active={false}>
            <FaHistory size={20} />
            <span>Histórico</span>
          </Item>
          <Item active={false}>
            <FaThumbsUp size={20} />
            <span>Vídeos marcados com "Gostei"</span>
          </Item>
        </>
      )}
    </Container>
  );
};

export default SideMenu;
