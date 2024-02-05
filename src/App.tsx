import { useState } from "react";
import { Dashborad } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function openTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function closeTransactionModal() {
    setIsNewTransactionModalOpen(false) 
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal = {openTransactionModal} />
      <Dashborad />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export { App }
