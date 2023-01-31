import {FC, useEffect, useState} from "react";
import commodity from './commodity.prop';
import Commodity from './commodity/commodity';
import ky from 'ky';

const App: FC = () => {
    const [commodities, setCommodities] = useState<commodity[]>([])
    const [orders, setOrders] = useState<commodity[]>([])

    useEffect(() => {
        const fetchData:() => Promise<Array<commodity>> = async () => {
            return await ky.get('http://localhost:8080/all').json()
        }
        fetchData().then(data => {
            setCommodities(data)
            console.log(data)
        })
    }, [])

    const addCommodityToOrder = (goods: commodity) => {
        let isInArray = false
        orders.forEach(e => {
            if(e.id === goods.id) isInArray = true
        })
        if(!isInArray) setOrders([...orders, goods])
    }

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
        window.dispatchEvent(new Event("storage"));
    }, [addCommodityToOrder])

    return (
        <main>
            {commodities.map((commodity, key) => 
                <Commodity key={key} 
                commodity={commodity}
                onAdd={addCommodityToOrder}/>
            )}
        </main>
    )
}

export default App;