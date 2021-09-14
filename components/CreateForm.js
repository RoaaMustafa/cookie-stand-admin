import React,{ useState } from "react";
export default function CreateForm({onCreate}) {
   


    const data = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

    function formhandler(event){
        event.preventDefault();
        
        
        const storeCity={
            location:event.target.location.value,
            min:event.target.min.value,
            max:event.target.max.value,
            avg:event.target.avg.value,
        }

        const hourlySales=data.map(()=>{
            return Math.floor(Math.random() * parseInt(storeCity.avg) * (parseInt(storeCity.max) - parseInt(storeCity.min)+ 1) + parseInt(storeCity.min))
         })
         

        const newStore={
            location:event.target.location.value,
            hourlySales:hourlySales,
            sum:hourlySales.reduce((a, b) => a + b, 0)

        }

        onCreate(newStore)

    }
    
    return (
        <div>
        <div className="w-2/3 h-56 mx-auto my-10 bg-green-300 rounded-lg "> 
            <h2 className="flex items-center justify-center text-xl h-12 "> Cookie Stand Admin</h2>
            <form onSubmit={formhandler}>
                <div>
                    <label for="location" className="ml-3 mr-2">Location</label>
                    <input type="text" name="location" id="location" className="flex-auto w-10/12 mt-2 rounded-sm bg-gray-200"/>
                </div>
                <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
                    <div >
                        <label for="min" className="pr-1">Minumum Customers Per Hour</label>
                        <br />
                        <input type="text" name="min" id="min" className="" />
                    </div>
                    <div >
                        <label for="max" className="pr-1">maximum Customers per hour
 </label>
                        <br />
                        <input type="text" name="max" id="max" className="" />
                    </div>
                    <div >
                        <label for="avg" className="pr-1">Average Cookies per Sale </label>
                        <br />
                        <input type="text" name="avg" id="avg" className="" />
                        
                    </div>
                    <div className="mx-3 my-1 font-semibold bg-green-500 rounded flex-grow ">
                    <button className="ml-16 text-xl h-12" >Create </button>
                    </div>
                </div>

              
            </form>
            
        </div>
        


        </div>
    )
}