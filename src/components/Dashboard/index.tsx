import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
import { Container } from "./styles"


function Dashborad() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}

export { Dashborad }