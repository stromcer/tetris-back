import { useEffect, useState } from "react";

const useControls = () => {
    const [ rotateButton, setRotateButton ] = useState({
        "key": "ArrowUp",
        "keyCode": 38,
        "which": 38,
        "code": "ArrowUp",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": false,
        "shiftKey": false,
        "repeat": false
       })

    const [ moveLeftButton, setMoveLeftButton ] = useState({
        "key": "ArrowLeft",
        "keyCode": 37,
        "which": 37,
        "code": "ArrowLeft",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": false,
        "shiftKey": false,
        "repeat": false
       })
    
    const [ moveRightButton, setMoveRightButton ] = useState({
        "key": "ArrowRight",
        "keyCode": 39,
        "which": 39,
        "code": "ArrowRight",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": false,
        "shiftKey": false,
        "repeat": false
       })

    const [ moveDownButton, setMoveDownButton ] = useState({
        "key": "ArrowDown",
        "keyCode": 40,
        "which": 40,
        "code": "ArrowDown",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": false,
        "shiftKey": false,
        "repeat": false
       })
    
    const [ pauseButton, setPauseButton ] = useState({
        "key": "p",
        "keyCode": 80,
        "which": 80,
        "code": "KeyP",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": false,
        "shiftKey": false,
        "repeat": false
       })



    return({rotateButton,moveRightButton,moveLeftButton,moveDownButton, pauseButton})
}

export default useControls;