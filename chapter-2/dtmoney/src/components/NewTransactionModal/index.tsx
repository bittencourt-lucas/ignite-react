import Modal from 'react-modal';
import { useState } from 'react';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
