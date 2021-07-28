import ExpenseDate from './ExpenseDate';
import {useEffect, useState} from 'react'
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    setCount(Math.round(Math.random()*5))  
    setTitle(sampleArray[count]);
  }


  const sampleArray = ['rock', 'pepper', 'sisser', 'geen moer', 'niks', 'nadda']


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;