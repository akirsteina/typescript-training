import { PropsWithChildren } from "react"

type CourseGoalProps = PropsWithChildren<{
    id: number,
    title: string,
    onDelete: (id: number) => void
}>

// import { type ReactNode } from "react";

// type CourseGoalProps = {
//     title: string;
//     children: ReactNode;
// }

const CourseGoal = ({ id, title, onDelete, children }: CourseGoalProps) => {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
}

export default CourseGoal