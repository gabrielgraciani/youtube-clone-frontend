import React, { useState, useCallback } from 'react';
import { FaHome, FaFire, FaYoutube, FaHistory } from 'react-icons/fa';

import { Container, Item } from './styles';

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const handleChangeMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Container open={open}>
      <Item onClick={handleChangeMenu} active>
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
      <Item active={false}>
        <FaHistory size={20} />
        <span>Histórico</span>
      </Item>
    </Container>
  );
};

export default SideMenu;
