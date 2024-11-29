import { FormEvent, useRef } from 'react'

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value
        e.currentTarget.reset()
        onAddGoal(enteredGoal, enteredSummary)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your goal</label>
                <input id="goal" type='text' ref={goal} />
            </p>
            <p>
                <label htmlFor='description'>Short summary</label>
                <input id="description" type='text' ref={summary} />
            </p>
            <p>
                <button type='submit'>Add Goal</button>
            </p>
        </form>
    )
}
