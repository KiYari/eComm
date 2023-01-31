import {FC, useEffect} from "react";
import styles from './order.module.css'
import commodity from "@/components/commodities/commodity.prop";
import {DeleteOutlined} from "@ant-design/icons";

interface OrderProps {
    item: commodity
    orderId: number
}


const App:FC<OrderProps> = ({item: commodity}) => {
    const deleteCommodity = () => {

        // @ts-ignore
        let orders: Array<commodity> = JSON.parse(localStorage.getItem('orders'))
        orders.forEach((order) => {
            console.log(order);
            if(order.id === commodity.id) orders.splice(orders.indexOf(order), 1)
        })
        localStorage.setItem('orders', JSON.stringify(orders))
        window.dispatchEvent(new Event('storage'))
    }

    const viewCommodity = () => {
        console.log(commodity);
    }

    useEffect(() => {
    }, [deleteCommodity])

    return(
        <div className={styles.order}>
            <img src={"./img/" + commodity.img} onClick={viewCommodity}/>
            <h2>{commodity.title}</h2>
            <b>{commodity.price}$</b>
            <DeleteOutlined className={styles.trashIcon} onClick={deleteCommodity}/>
        </div>
    )
} 

export default App;