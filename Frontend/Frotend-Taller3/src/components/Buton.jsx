
const Buton = ({ children, onClick, type, width, colors, center }) => {
    return (
        <button
            type={type}
            className={`py-1 ${colors ? colors : 'bg-secundary-500 hover:bg-secundary-500/90'}  rounded-lg px-3 ${width ? width : 'w-auto'} block ${center && center} text-secundary-100`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Buton