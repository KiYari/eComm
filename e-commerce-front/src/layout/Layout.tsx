import Header from './header/Header';
import Footer from './footer/Footer';
import { Layout } from 'antd';
import LayoutProps from './layout.props';
import {FC, useState} from 'react';
import styles from './layout.module.css';

const App: FC<LayoutProps> = ({children}) => {
    const [click, setClick] = useState(false)
    return(
        <div className={styles.wrapper} onClick={()=> setClick(!click)}>
             <Header clickHandler={click}/>
             {children}
             <Footer/>
         </div>
    )
}

export default App;