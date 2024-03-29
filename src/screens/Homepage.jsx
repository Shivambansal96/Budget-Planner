import "./Homepage.css"

function Homepage() {
    return(
        <div id="homepage" className="h-screen w-screen bg-white flex flex-col justify-center items-center">
            <div id="one" className=" h-1/5 w-4/5 ">
                <div className="top w-full h-1/2">
                    <h1 className="text-5xl"> My Budget Planner</h1>
                </div>
                <div className="bottom w-full h-1/2 flex justify-between">
                    <div id="budget-container" className="bg-slate-300 flex justify-center items-center gap-2">
                        <p className="text-xl text-slate-700">Budget: Rs </p>
                        <input className="w-1/5 text-center text-white bg-black rounded-xl " type="number" id="budget" value={2000} />
                    </div>
                    <div id="remaining-container" className="bg-slate-300 flex justify-center items-center gap-2">
                        <p className="text-xl text-green-700">Remaining: Rs </p>
                        <input className="w-1/5 text-center text-white bg-black rounded-xl " type="number" id="remaining" value={2000} />
                    </div>
                    <div id="spent-container" className=" bg-blue-300 flex justify-center items-center gap-2">
                        <p className="text-xl text-blue-800">Spent so Far: Rs </p>
                        <input className="w-1/5 text-center text-white bg-black rounded-xl " type="number" id="spent" value={0} />
                    </div>
                </div>

            </div>

            <div id="two" className="h-2/5 w-4/5">
                <div className="top h-2/5 w-full flex justify-start items-center">
                    <h2 className="text-3xl">Expense List</h2>
                </div>
                
                <div id="js" className="bottom h-3/5 w-full flex">   {/* this will be made dynamic and map will be used as a card */}
                    <div id="content" className="flex justify-between gap-4 bg-slate-600 border-2">
                        <p>Mango</p>
                        <p>Rs 300</p>
                        <i>Cross</i>
                    </div>
                    {/* <div id="content" className="flex justify-between gap-4 bg-slate-600 border-2">
                        <p>Mango</p>
                        <p>Rs 300</p>
                        <i>Cross</i>
                    </div> */}
                </div>
            </div>

            <div id="three" className="h-2/5 w-4/5 flex flex-col">
                <div className="top h-2/5 w-full flex justify-start items-center">
                    <h1 className="text-3xl">Add Expenses</h1>
                </div>

                <div className="mid h-2/5 w-full flex justify-start items-center gap-4">

                    <p className="text-lg italic">Name: </p><input className="border-2 h-1/2 w-1/2 p-2 text-xl" type="text" name="" id="" />
                    <p className="text-lg italic">Cost: </p><input className="border-2 h-1/2 p-2 text-xl" type="number" name="" id="" />
                </div>

                <div className="botttom h-1/5 w-full">
                    <button type="submit" className=" text-white bg-blue-500 rounded-lg w-1/12 text-lg font-semibold hover:bg-black hover:text-blue-600 hover:italic p-2">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
