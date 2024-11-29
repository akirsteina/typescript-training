import { createContext, useContext, useReducer, type ReactNode } from "react";
import Timer from "../components/Timer";

export type Timer = {
    name: string
    duration: number
}

type TimersState = {
    isRunning: boolean
    timers: Timer[]
}

const initialState: TimersState = {
    isRunning: false,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void
    startTimers: () => void
    stopTimers: () => void
}

type TimersContextProviderProps = {
    children: ReactNode
}

const TimersContext = createContext<TimersContextValue | null>(null)

export const useTimersContext = () => {
    const timersContext = useContext(TimersContext)

    if (timersContext === null) {
        throw new Error('TimersContext is null - that should not be the case!')
    }
    return timersContext
}

type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
}

type AddTimerAction = {
    type: 'ADD_TIMER'
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction

const timersReducer = (state: TimersState, action: Action): TimersState => {
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [...state.timers,
            {
                name: action.payload.name,
                duration: action.payload.duration
            }]
        }
    }
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true
        }
    }
    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }
    return state
}


const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
    const [timersState, dispatch] = useReducer(timersReducer, initialState)

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer: (timerData) => {
            dispatch({ type: 'ADD_TIMER', payload: timerData })
        },
        startTimers: () => {
            dispatch({ type: 'START_TIMERS' })
        },
        stopTimers: () => {
            dispatch({ type: 'STOP_TIMERS' })
        }
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}

export default TimersContextProvider