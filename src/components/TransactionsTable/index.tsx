import { useEffect, useState } from "react"
import { Container } from "./styles"
import { api } from "../../services/api"

interface ITransacation {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

function TransactionsTable() {

  
  const [transacations, setTransactions] = useState<ITransacation[]>([])
  
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transacations.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-Br', {
                style: 'currency', 
                currency: 'BRL',
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-Br').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export { TransactionsTable }