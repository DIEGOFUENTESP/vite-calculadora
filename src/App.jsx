import React, { useState } from 'react';
import BtnChangeTheme from './BtnChangeTheme';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  

  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  const appendSymbol = (symbol) => {
    setExpression((prevExpression) => prevExpression + symbol);
  };

  const calculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearAll = () => {
    setExpression('');
  };

  const clearLast = () => {
    setExpression((prevExpression) =>
      prevExpression.length > 0 ? prevExpression.slice(0, -1) : ''
    );
  };

  const togglePercent = () => {
    setExpression((prevExpression) => {
      const lastChar = prevExpression.slice(-1);
      return lastChar === '%' ? prevExpression : prevExpression + '%';
    });
  };

  const toggleParenthesis = () => {
    setExpression((prevExpression) =>
      prevExpression.endsWith('(') ? prevExpression + ')' : prevExpression + '('
    );
  };

  return (
    <div className={`calculator ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <BtnChangeTheme handlerClick={toggleTheme} isDark={isDarkTheme} />
    <input value={expression} className="display" disabled />
      <div className="buttons">
        <button className='green' onClick={clearAll}>C</button>
        <button className='green' onClick={clearLast}>CE</button>
        <button className='green' onClick={togglePercent}>%</button>
        <button className='green' onClick={() => appendSymbol('+')}>+</button>        

        <button onClick={() => appendSymbol('7')}>7</button>
        <button onClick={() => appendSymbol('8')}>8</button>
        <button onClick={() => appendSymbol('9')}>9</button>
        <button className='green' onClick={() => appendSymbol('/')}>/</button>

        <button onClick={() => appendSymbol('4')}>4</button>
        <button onClick={() => appendSymbol('5')}>5</button>
        <button onClick={() => appendSymbol('6')}>6</button>
        <button className='green' onClick={() => appendSymbol('*')}>*</button>

        <button onClick={() => appendSymbol('1')}>1</button>
        <button onClick={() => appendSymbol('2')}>2</button>
        <button onClick={() => appendSymbol('3')}>3</button>
        <button className='green' onClick={() => appendSymbol('-')}>-</button>

        <button onClick={() => appendSymbol('0')}>0</button>
        <button onClick={() => appendSymbol('.')}>.</button>
        <button className='green' onClick={toggleParenthesis}>()</button>
        <button className='red' onClick={calculate}>=</button>            
      </div>
    </div>
  );
};

export default App;