import { useEffect, useState } from "react";

const useControls = () => {
    const [modalsShows, setModalsShows] = useState({
        rotateModal: false,
        moveLeftModal: false,
        moveRightModal: false,
        moveDownModal: false,
        pauseModal: false
    })


    const [ buttonsMap, setButtonsMap ] = useState({
        rotateButton: {
        "key": "ArrowUp",
        "keyCode": 38,
        "code": "ArrowUp",
       },
       moveLeftButton: {
        "key": "ArrowLeft",
        "keyCode": 37,  
        "code": "ArrowLeft",
       },
       moveRightButton:{
        "key": "ArrowRight",
        "keyCode": 39,
        "code": "ArrowRight",
       },
       moveDownButton:{
        "key": "ArrowDown",
        "keyCode": 40,
        "code": "ArrowDown",
       },
       pauseButton:{
        "key": "p",
        "keyCode": 80,
        "code": "KeyP",
       }
    })
    

    const handleChangeButton = (button ,mappedKey) => setButtonsMap(res => ({...res, [button]: mappedKey}))
    const handleOpenModal = (modalName) => setModalsShows(res => ({...res, [modalName]: true}));
    const handleCloseModal = (modalName) => setModalsShows(res => ({...res, [modalName]: false}));


    return({buttonsMap,modalsShows, handleOpenModal, handleCloseModal, handleChangeButton})
}

export default useControls;

