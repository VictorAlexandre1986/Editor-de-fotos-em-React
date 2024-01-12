
const Navbar = ({setBackground}) =>{
    return(
        <>
            <div className="navbar">
                <span>Editor de fotos</span>
                <input type='text' placeholder='Insira o link  da imagem a ser editada' onChange={(e) => { setBackground(e.target.value)}}></input>
            </div>
        </>
    )
}

export default Navbar