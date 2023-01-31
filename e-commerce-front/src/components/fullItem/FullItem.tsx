import {FC, useState} from "react";
import commodity from "@/components/commodities/commodity.prop";

interface fullItemProps {
    commodity: commodity
}

const App:FC<fullItemProps> = ({commodity}) => {
    const [showFullItem, setShowFullItem] = useState()
    return(
        <div>

        </div>
    )
}

export default App;