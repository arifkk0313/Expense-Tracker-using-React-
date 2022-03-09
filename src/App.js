
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomExpences from './Components/IncomExpences';
import TransactionList from './Components/TransactionList';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
