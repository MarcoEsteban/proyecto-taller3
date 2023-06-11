
const Buton = ({ children, onClick, type, width, colors }) => {
    return (
        <button
            type={type}
            className={`py-2 ${colors ? colors : 'bg-secundary-500 hover:bg-secundary-500/90'}  rounded-lg px-3 ${width ? width : 'w-auto'} block text-secundary-100`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Buton