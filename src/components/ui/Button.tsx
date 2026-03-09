interface Props{
    callback?: () => void;
    className?: string;
    children: string;
}

const Button = ({children, callback, className}: Props) => {
    return (
        <div
            onClick={callback ?? (() => {})}
            className={`bg-danger border px-3 rounded-md cursor-pointer hover:bg-red-500 hover:text-white ${className ?? ''}`}
        >{children}</div>
    )
}

export default Button;