import React, { useState } from 'react';

function SumCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');

  const calculateSum = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      setSum(parsedNum1 + parsedNum2);
    } else {
      setSum('Invalid input');
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumCalculator;
