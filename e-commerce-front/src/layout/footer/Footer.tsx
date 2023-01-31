import { FC } from 'react';
import styles from './footer.module.css';

interface FooterProps {

}

const App: FC<FooterProps> = () => {
    return(
        <footer>
            All rights reserved &copy;
        </footer>
    )
}

export default App;