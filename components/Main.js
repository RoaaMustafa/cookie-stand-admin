import CreateForm from "./CreateForm"
import React,{ useState } from "react";
import ReportTable from "./ReportTable";
import Footer from './Footer'

export default function Main() {
   
    const [store , setStore]=useState([])
    const [total , setTotal]=useState([])
   
   
   
    function  onCreate(newstore)
   {
       setStore(store=>[...store,newstore])
       sumtatals()
       
    }

    const sumtatals =()=>{
        const sumtotal=[]
       for (let i=0;i<=store.length-1;i++){
           for (let j=0;j<=store[i].hourlySales.length-1;j++)
             if (sumtotal[j]){
                 sumtotal[j]+=store[i].hourlySales[j]
             }else{
                sumtotal.push(store[i].hourlySales[j])
             }
       }
       setTotal([sumtotal,sumtotal.reduce((a, b) => a + b, 0)])
       console.log(total[1]);
    }


    return (
        <>

        <CreateForm
        onCreate={onCreate}
        />
        
        <ReportTable
        store={store}
        total={total}
        />
        <Footer
        reports={store}
        />

        </>
    )
}