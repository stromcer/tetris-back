import {useState, useCallback, useEffect} from "react"


const useLogin = () => {
    const [userTextInputs, setUserInputs] = useState({})


    const handleTextChangeInputs = (e) => {
        setUserInputs( prev => {
            const newState = { ...prev, [e.target.name] : e.target.value }
            return newState
        })
    }

    const handleChecksChangeInputs = (e) => {
        setUserInputs( prev => {
            const newState = { ...prev, [e.target.name] : e.target.checked }
            return newState
        })

    }
    
    useEffect(()=>{
        console.log(userTextInputs)
    },[userTextInputs])

    return({userTextInputs, handleTextChangeInputs, handleChecksChangeInputs})
}



export default useLogin;