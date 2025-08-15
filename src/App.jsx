import { Header } from './components/Header.jsx';
import { UserInputs } from './components/userInputs.jsx';
import { CustomTable } from './components/CustomTable.jsx'
import { calculateInvestmentResults } from './util/investment.js'
import { useState } from 'react';



function App() {

  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 1,
    annualInvestment: 1,
    expectedReturn: 3,
    duration: 4
  });

  const tableResult = calculateInvestmentResults(investmentData);
 const invalidInput = (investmentData.duration >=1 && investmentData.duration <=20)
  && (investmentData.initialInvestment >=-200000 && investmentData.initialInvestment <=200000)
  && (investmentData.annualInvestment >=-200000 && investmentData.annualInvestment <=200000)
  && (investmentData.expectedReturn >=-200000 && investmentData.expectedReturn <=200000);

  return (
    <>
      <Header>React Investment Calculator</Header>
      <UserInputs
        investmentData={investmentData}
        setInvestmentData={setInvestmentData}
      />
      {!invalidInput && <p className='center'>Input values are too large or Invalid.</p>}
        {invalidInput && <CustomTable newTableData={tableResult} />}
      

    </>
  )
}

export default App
