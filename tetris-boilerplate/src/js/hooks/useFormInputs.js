import {useState, useCallback, useEffect} from "react"


const useFormInputs = () => {
    const [userTextInputs, setUserInputs] = useState({})


    const handleTextChangeInputs = (e) => {
        
        setUserInputs( prev => {
            
            const newState = { ...prev, [e.target.name] : e.target.value }
            console.log(userTextInputs)
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



export default useFormInputs;