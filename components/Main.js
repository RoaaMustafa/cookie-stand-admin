import CreateForm from "./CreateForm"
import React,{ useState,useEffect } from "react";
import ReportTable from "./ReportTable";
import Footer from './Footer'
import useResource from '../hooks/useResource';



export default function Main() {
   
    const [store , setStore]=useState([])
    const [total , setTotal]=useState([])
   
    const { resources, loading, createResource, deleteResource } = useResource();

   
    function  onCreate(newstore)
   {
       setStore(newstore)
       
       
    }
    
    useEffect(()=>{
        if (store){
         sumtatals()  
            
        }
    },[store,resources])


    const sumtatals =()=>{
        console.log(store);
        const sumtotal=[]
       for (let i=0;i<=store.length-1;i++){
           for (let j=0;j<=store[i].hourly_sales.length-1;j++)
             if (sumtotal[j]){
                 sumtotal[j]+=store[i].hourly_sales[j]
             }else{
                sumtotal.push(store[i].hourly_sales[j])
             }
       }
       setTotal([sumtotal,sumtotal.reduce((a, b) => a + b, 0)])
       console.log(total);
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