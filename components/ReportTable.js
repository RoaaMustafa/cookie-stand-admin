import useResource from '../hooks/useResource';
import React,{ useState,useEffect } from "react";


export default function ReportTable({store,total}){

    const data = ['Location','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Totals']
    const { resources, loading, createResource, deleteResource } = useResource();

    const [totalByRow, setTotalByRow] = useState([])
    let total_by_row=[]
    const sumTotalByRow =((total)=>{   
      let x=0
      store.map((item,idx)=>{
        
        item.hourly_sales.map((hour=>{
          x +=hour
        }))
        total_by_row.push(x)
        x=0
      })

      setTotalByRow(total_by_row)
      console.log(totalByRow);


    })

    useEffect(() => {
    //  console.log(totalByRow);
      sumTotalByRow()
      // console.log(store);
  }, [store])




    return(
        <>
        
        {store.length?

         <table className="mx-auto w-1/2 my-4">
          <thead>

            <tr className='bg-green-500' >
                {data.map(item =>
                
                    <th className="border border-gray-70">{item}</th>
                
                )
              
}
            </tr>
          </thead>
          <tbody>
            {store.map((item,idx) => (
              <tr className={`bg-green-${idx % 2 ? 400 : 300}`}  key={`${idx}`}>
                <td className="pl-2 border border-gray-700">{item.location} <button onClick={()=>deleteResource(item.id)} className="flex  bg-red-700">🗑</button></td>
                {   

                    item.hourly_sales.map((hour,key)=>
                <td key={`${key}`} className="pl-2 border border-gray-700">{hour}</td>
                )}
                <td className="pl-2 border border-gray-700">{totalByRow[idx]}</td>
              </tr>))}

              <tr className='bg-green-500'>
                  <th className="pl-2 border border-gray-700" >Totals</th>
                  {
                      total[0].map((item,key) =>
                    <td key={`${key}`} className="pl-2 border border-gray-700" > {item}</td>
                      )}
                      <td className="pl-2 border border-gray-700" > {total[1]}</td>

              </tr>
          </tbody>
        </table>:
        <p className=" flex items-center justify-center text-xl h-12  "	>
            No Cookie Stand Available
        </p>

        }


        </>
    )


}