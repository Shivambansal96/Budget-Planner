// import "./Homepage.css"

// function Homepage() {
//     return(
//         <div id="homepage" className="h-screen w-screen bg-white flex flex-col justify-center items-center">
//             <div id="one" className=" h-1/5 w-4/5 ">
//                 <div className="top w-full h-1/2">
//                     <h1 className="text-5xl"> My Budget Planner</h1>
//                 </div>
//                 <div className="bottom w-full h-1/2 flex justify-between">
//                     <div id="budget-container" className="bg-slate-300 flex justify-center items-center gap-2">
//                         <p className="text-xl text-slate-700">Budget: Rs </p>
//                         <input className="w-1/5 text-center text-white bg-black rounded-xl " type="number" id="budget" value={2000} />
//                     </div>
//                     <div id="remaining-container" className="bg-slate-300 flex justify-center items-center gap-2">
//                         <p className="text-xl text-green-700">Remaining: Rs </p>
//                         <input className="w-1/5 text-center text-white bg-black rounded-xl " type="number" id="remaining" value={2000} />
//                     </div>
//                     <div id="spent-container" className=" bg-blue-300 flex justify-center items-center gap-2">
//                         <p className="text-xl text-blue-800">Spent so Far: Rs </p>
//                         <input className="w-1/5 text-center text-white bg-black rounded-xl " type="number" id="spent" value={0} />
//                     </div>
//                 </div>

//             </div>

//             <div id="two" className="h-2/5 w-4/5">
//                 <div className="top h-2/5 w-full flex justify-start items-center">
//                     <h2 className="text-3xl">Expense List</h2>
//                 </div>
                
//                 <div id="js" className="bottom h-3/5 w-full flex">   {/* this will be made dynamic and map will be used as a card */}
//                     <div id="content" className="flex justify-between gap-4 bg-slate-600 border-2">
//                         <p>Mango</p>
//                         <p>Rs 300</p>
//                         <i>Cross</i>
//                     </div>
//                     {/* <div id="content" className="flex justify-between gap-4 bg-slate-600 border-2">
//                         <p>Mango</p>
//                         <p>Rs 300</p>
//                         <i>Cross</i>
//                     </div> */}
//                 </div>
//             </div>

//             <div id="three" className="h-2/5 w-4/5 flex flex-col">
//                 <div className="top h-2/5 w-full flex justify-start items-center">
//                     <h1 className="text-3xl">Add Expenses</h1>
//                 </div>

//                 <div className="mid h-2/5 w-full flex justify-start items-center gap-4">

//                     <p className="text-lg italic">Name: </p><input className="border-2 h-1/2 w-1/2 p-2 text-xl" type="text" name="" id="" />
//                     <p className="text-lg italic">Cost: </p><input className="border-2 h-1/2 p-2 text-xl" type="number" name="" id="" />
//                 </div>

//                 <div className="botttom h-1/5 w-full">
//                     <button type="submit" className=" text-white bg-blue-500 rounded-lg w-1/12 text-lg font-semibold hover:bg-black hover:text-blue-600 hover:italic p-2">Save</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Homepage;






// import React, { useState } from 'react';
// import './Homepage.css';
// import cross_logo from '../assets/x.gif'

// function Homepage() {
//     // State to manage budget, remaining, spent, and expenses list
//     const [budget, setBudget] = useState(2000);
//     const [remaining, setRemaining] = useState(2000);
//     const [spent, setSpent] = useState(0);
//     const [expenses, setExpenses] = useState([]);
//     const [expenseName, setExpenseName] = useState('');
//     const [expenseCost, setExpenseCost] = useState('');

//     // Function to handle the addition of an expense
//     const addExpense = () => {
//         const cost = Number(expenseCost);
//         if (cost && expenseName && cost <= remaining) {
//             const newExpense = { name: expenseName, cost };
//             setExpenses([...expenses, newExpense]);
//             setSpent(prevSpent => prevSpent + cost);
//             setRemaining(prevRemaining => prevRemaining - cost);
//             // Reset input fields
//             setExpenseName('');
//             setExpenseCost('');
//         } else {
//             alert('Invalid cost or name, or cost exceeds remaining budget.');
//         }
//     };

//     const removeExpense = (index) => {
//         const expense = expenses[index];
//         const filteredExpenses = expenses.filter((_, i) => i !== index);
//         setExpenses(filteredExpenses);
//         setSpent(prevSpent => prevSpent - expense.cost);
//         setRemaining(prevRemaining => prevRemaining + expense.cost);
//     };

//     return (
//         <div id="homepage" className="h-screen w-screen bg-white flex flex-col justify-center items-center">
//             <div id="one" className="h-1/5 w-4/5">
//                 <div className="top w-full h-1/2">
//                     <h1 className="text-5xl">My Budget Planner</h1>
//                 </div>
//                 <div className="bottom w-full h-1/2 flex justify-between">
//                     <div id="budget-container" className="bg-slate-300 flex justify-center items-center gap-2">
//                         <p className="text-xl text-slate-700">Budget: Rs </p>
//                         <input className="w-1/5 text-center text-white bg-black rounded-xl" type="number" id="budget" value={budget} readOnly />
//                     </div>
//                     <div id="remaining-container" className="bg-slate-300 flex justify-center items-center gap-2">
//                         <p className="text-xl text-green-700">Remaining: Rs </p>
//                         <input className="w-1/5 text-center text-white bg-black rounded-xl" type="number" id="remaining" value={remaining} readOnly />
//                     </div>
//                     <div id="spent-container" className="bg-blue-300 flex justify-center items-center gap-2">
//                         <p className="text-xl text-blue-800">Spent so Far: Rs </p>
//                         <input className="w-1/5 text-center text-white bg-black rounded-xl" type="number" id="spent" value={spent} readOnly />
//                     </div>
//                 </div>
//             </div>

//             <div id="two" className="h-2/5 w-4/5">
//                 <div className="top h-2/5 w-full flex justify-start items-center">
//                     <h2 className="text-3xl">Expense List</h2>
//                 </div>
//                 <div className="bottom h-3/5 w-full flex flex-col">
//                     {expenses.map((expense, index) => (
//                         <div key={index} className="flex justify-between gap-4 bg-slate-600 border-2 p-2 my-1">
//                             <p>{expense.name}</p>
//                             <p>Rs {expense.cost}</p>

                            
//                             <button onClick={() => removeExpense(index)}>
//                                 <img src={cross_logo} alt="Remove" className='h-10 w-10 bg-none rounded-3xl'/>
//                             </button>

//                             {/* <i>Cross</i> */}



//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div id="three" className="h-2/5 w-4/5 flex flex-col">
//                 <div className="top h-2/5 w-full flex justify-start items-center">
//                     <h1 className="text-3xl">Add Expenses</h1>
//                 </div>
//                 <div className="mid h-2/5 w-full flex justify-start items-center gap-4">
//                     <p className="text-lg italic">Name:</p>
//                     <input className="border-2 h-1/2 w-1/2 p-2 text-xl" type="text" value={expenseName} onChange={e => setExpenseName(e.target.value)} />
//                     <p className="text-lg italic">Cost:</p>
//                     <input className="border-2 h-1/2 p-2 text-xl" type="number" value={expenseCost} onChange={e => setExpenseCost(e.target.value)} />
//                 </div>

//                 <div className="bottom h-1/5 w-full flex justify-center">
//                     <button type="submit" className="text-white bg-blue-500 rounded-lg w-1/12 text-lg font-semibold hover:bg-black hover:text-blue-600 hover:italic p-2" onClick={addExpense}>
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Homepage;



import React, { useState } from 'react';
import cross_logo from '../assets/x.gif';  

function Homepage() {
    const [budget, setBudget] = useState(2000);
    const [remaining, setRemaining] = useState(2000);
    const [spent, setSpent] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [expenseName, setExpenseName] = useState('');
    const [expenseCost, setExpenseCost] = useState('');

    const addExpense = () => {
        const cost = Number(expenseCost);
        if (cost > 0 && expenseName && cost <= remaining) {
            const newExpense = { name: expenseName, cost };
            setExpenses([...expenses, newExpense]);
            setSpent(prevSpent => prevSpent + cost);
            setRemaining(prevRemaining => prevRemaining - cost);
            setExpenseName('');
            setExpenseCost('');
        } else {
            alert('Invalid cost or name, or cost exceeds remaining budget.');
        }
    };

    const removeExpense = (index) => {
        const expense = expenses[index];
        const filteredExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(filteredExpenses);
        setSpent(prevSpent => prevSpent - expense.cost);
        setRemaining(prevRemaining => prevRemaining + expense.cost);
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-500 to-green-400">
            <div className="text-5xl text-white mb-8">
                My Budget Planner
            </div>
            <div className="flex justify-between w-4/5 mb-6">
                <div className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-around flex-grow mx-2">
                    <p className="text-lg text-gray-700">Budget:</p>
                    <span className="text-xl font-semibold">Rs {budget}</span>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-around flex-grow mx-2">
                    <p className="text-lg text-green-700">Remaining:</p>
                    <span className="text-xl font-semibold">Rs {remaining}</span>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-around flex-grow mx-2">
                    <p className="text-lg text-blue-700">Spent So Far:</p>
                    <span className="text-xl font-semibold">Rs {spent}</span>
                </div>
            </div>
            <div className="w-4/5">
                <h2 className="text-3xl text-white mb-4">Expense List</h2>
                {expenses.map((expense, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-2">
                        <p>{expense.name}</p>
                        <p>Rs {expense.cost}</p>
                        <button onClick={() => removeExpense(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            <img src={cross_logo} alt="Remove" className="h-5 w-5"/>
                        </button>
                    </div>
                ))}
            </div>
            <div className="w-4/5 flex mt-6">
                <input
                    type="text"
                    placeholder="Expense Name"
                    value={expenseName}
                    onChange={e => setExpenseName(e.target.value)}
                    className="flex-grow p-2 border rounded-l-lg"
                />
                <input
                    type="number"
                    placeholder="Expense Cost"
                    value={expenseCost}
                    onChange={e => setExpenseCost(e.target.value)}
                    className="flex-grow p-2 border-t border-b"
                />
                <button onClick={addExpense} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
                    Add Expense
                </button>
            </div>
        </div>
    );
}

export default Homepage;















