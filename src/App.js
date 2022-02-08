
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expense = [
    {
      id: 1,
      expenseTitle: 'Car Insurance',
      expenseAmount: 100,
      expenseDate: new Date('2019-01-01')
    },
    {
      id: 2,
      expenseTitle: 'Rent',
      expenseAmount: 500,
      expenseDate: new Date('2019-01-02')
    },
    {
      id: 3,
      expenseTitle: 'Food',
      expenseAmount: 100,
      expenseDate: new Date('2019-01-03')
    }
  ]

  return (
    <div>
      {/* <h1>Expense Manager</h1> */}
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
