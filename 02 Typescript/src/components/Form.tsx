import { FormEvent, forwardRef, useImperativeHandle, useRef, type ComponentPropsWithoutRef } from 'react'

type FormProps = {
    onSave: (value: unknown) => void

} & ComponentPropsWithoutRef<'form'>

export type FormHandle = {
    clear: () => void
}

const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear: () => form.current?.reset()
        }
    }) // only works with forwardRef

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData);
        onSave(data)
    }
    return (
        <form {...otherProps} onSubmit={handleSubmit} ref={form}>
            {children}
        </form>
    )
})

export default Form