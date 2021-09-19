import React, { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Footer from "./Footer";
import useResource from "../hooks/useResource";
import { useAuth } from '../contexts/auth'



export default function Main() {
    const { user, login, logout } = useAuth();
    const { resources, loading, createResource, deleteResource } = useResource();

    const data = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
    const [store, setStore] = useState([])
    const [total, setTotal] = useState([])
    const [message, setMessage] = useState('')



    const sumtotals = () => {
        const sumtotal = []
        console.log(store.length);
        for (let i = 0; i <= store.length - 1; i++) {
            for (let j = 0; j <= store[i].hourly_sales.length - 1; j++)
                if (sumtotal[j]) {
                    sumtotal[j] += store[i].hourly_sales[j]
                } else {
                    sumtotal.push(store[i].hourly_sales[j])
                }
        }
        setTotal([sumtotal, sumtotal.reduce((a, b) => a + b, 0)])
        console.log(total);

    }


    
    const onCreate = ((event) => {
        event.preventDefault()
        const storeCity = {
            location: event.target.location.value,
            hourly_sales: data.map(() => {
                return Math.floor(Math.random() * parseInt(event.target.avg.value) * (parseInt(event.target.max.value) - parseInt(event.target.min.value) + 1) + parseInt(event.target.min.value))
            }),
            minimum_customers_per_hour: event.target.min.value,
            maximum_customers_per_hour: event.target.max.value,
            average_cookies_per_sale: event.target.avg.value,
            owner:user.id
        }
        const hourlySales = storeCity.hourly_sales
        
        const objectData = {
            location: event.target.location.value,
            hourlySales: hourlySales,
            sum: hourlySales.reduce((a, b) => a + b, 0)
            
            
        }
        event.target.location.value= null
        event.target.min.value =null
        event.target.max.value =null
        event.target.avg.value= null

        createResource(storeCity)
        // setStore(resources)
        // console.log(store);
        
        
    })
    useEffect(() => {
        if (!loading){
        
         setStore( resources)
        //  sumtotals()
        console.log(store);
         setMessage('')
        }
        else{
            setMessage("data is loading")
        }
        console.log("resorces is " , resources);
        console.log("LOdaing status", loading);
        // console.log(store);
        

    }, [resources])

    useEffect(() => {
       
         sumtotals()
       
        

    }, [store])
    
    return (
        <>
            <CreateForm onCreate={onCreate} />
            
            <ReportTable store={store} total={total} delete1={deleteResource} message={message}/>
            <Footer reports={store} />
        </>
    )
}