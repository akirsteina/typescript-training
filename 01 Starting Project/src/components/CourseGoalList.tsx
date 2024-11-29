import { ReactNode } from 'react'
import { CourseGoal as CGoal } from '../App'
import CourseGoal from './CourseGoal'
import InfoBox from './InfoBox'

type CourseGoals = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoals) => {
    if (goals.length === 0) {
        return <InfoBox mode='hint' >No goals found. Maybe add one?</InfoBox>
    }

    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = <InfoBox mode='warning' severity='high'>You're collecting a lot of goals!</InfoBox>
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map(goal => <li key={goal.id}><CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </CourseGoal></li>)}
            </ul>
        </>
    )
}

export default CourseGoalList