import { useEffect, useState } from "react";
import getStoredControls from "../utils/getStoredControls";

const useControls = () => {
    const [modalsShows, setModalsShows] = useState({
        rotateModal: false,
        moveLeftModal: false,
        moveRightModal: false,
        moveDownModal: false,
        pauseModal: false
    })


    const [ buttonsMap, setButtonsMap ] = useState(getStoredControls())



    useEffect(()=>{
        localStorage.setItem("buttonsMap", JSON.stringify(buttonsMap))
    },[buttonsMap])


    
    const handleChangeButton = (button ,mappedKey) => setButtonsMap(prev => ({...prev, [button]: mappedKey}))
    const handleOpenModal = (modalName) => setModalsShows(prev => ({...prev, [modalName]: true}));
    const handleCloseModal = (modalName) => setModalsShows( prev => ({...prev, [modalName]: false}) ) 


    return({buttonsMap,modalsShows, handleOpenModal, handleCloseModal, handleChangeButton})
}

export default useControls;

