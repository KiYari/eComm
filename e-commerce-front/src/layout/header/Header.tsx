import {FC, MouseEventHandler, useEffect, useState} from 'react';
import styles from './header.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Order from './order/order';
import commodity from '@/components/commodities/commodity.prop';

interface HeaderProps {
    clickHandler: boolean;
}

const App: FC<HeaderProps> = ({clickHandler: parentClick}) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [orders, setOrders] = useState<commodity[]>([])

    useEffect(() => {
        window.addEventListener('storage', () => {
            // @ts-ignore
            setOrders(JSON.parse(localStorage.getItem('orders')))
        })
    }, [])

    const showOrders = () => 
        (orders.map((order, key) => 
        <Order key={key} item={order}/>))
    

    const showNothing = () => (<h1>Nothing here yet!</h1>)

    return(
        <header>
            <div>
                <span className={styles.logo}>House Stuff</span>
                <ul className={styles.nav}>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>My account</li>
                    <li><ShoppingCartOutlined
                    onClick={() => {
                        setCartOpen(!cartOpen)
                    console.log(cartOpen)}} 
                    className={`${styles.cartButton} ${cartOpen && styles.active}`}/></li>

                    {cartOpen && (
                        <div className={styles.shopcart}> 
                            {
                                orders.length > 0 ?
                                showOrders() : showNothing()
                            }
                        </div>
                    )}
                </ul>
            </div>
            <div className={styles.presentation}></div>
        </header>
    )
} 

export default App;