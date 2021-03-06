import React ,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'



function AddTransaction() {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const submit=(e)=>{
        e.preventDefault()
        const newTransaction ={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
    }
  return (
    <div>
        <h3>
            Add new Transaction
        </h3>
        <form onSubmit={submit} >
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder='enter text ...' />

            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                (negtive - expense,positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder='enter amount ...'/>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction