import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never }
type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string }

const isAnchorProps = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props

const Button = (props: ButtonProps | AnchorProps) => {
    if (isAnchorProps(props)) return <a className="button" {...props}></a>
    return <button className="button" {...props}></button>
}

// type ButtonProps = {
//     el: 'button'
// } & ComponentPropsWithoutRef<'button'>

// type AnchorProps = {
//     el: 'anchor'
// } & ComponentPropsWithoutRef<'a'>

// const Button = (props: ButtonProps | AnchorProps) => {
//     if (props.el === 'anchor') return <a {...props}></a>
//     return <button {...props}></button>
// }

export default Button