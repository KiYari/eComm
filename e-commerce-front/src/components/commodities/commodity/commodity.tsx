import {FC, useState} from "react";
import commodity from "../commodity.prop";
import styles from './commodity.module.css';
import {Button, Modal} from "antd";

interface CommodityProps {
    commodity: commodity
    onAdd: any
}

const App: FC<CommodityProps> = ({commodity, onAdd}) => {
    const [openModal, setOpenModal] = useState(false);

    const showModal = () => {
        setOpenModal(true);
    }

    const onOk = () => {
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    return(
        <div className={styles.item}>
            <Modal open={openModal} onCancel={onCancel} okText={''}
                   title={commodity.title} width={720}
                    className={styles.modal}
                   footer={null}>
                <img src={"./img/" + commodity.imagePath}/>
                <h5>{commodity.desc}</h5>
                <b className={styles.price}>{commodity.price/100}$</b>
                <div className={styles.add_to_cart} onClick={() => {
                    onAdd(commodity)
                    onOk()
                }}>+</div>
            </Modal>
            <img src={"./img/" + commodity.imagePath} onClick={showModal}/>
            <h2>{commodity.title}</h2>
            <p>{commodity.desc}</p>
            <b className={styles.price}>{commodity.price/100}$</b>
            <div className={styles.add_to_cart} onClick={() => onAdd(commodity)}>+</div>
        </div>
    )
}

export default App;