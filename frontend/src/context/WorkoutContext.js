import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }

        case 'CREATE_WORKOUT':
            return {
                //this will return a newly created workout on top followed by the
                //previously included workouts using prev state
                workouts: [action.payload, ...state.workouts]
            }
        default: 
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) => { //children reps App component that we wrap in index.js
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={ {...state, dispatch} }>
            { children }
        </WorkoutsContext.Provider>
    )
}