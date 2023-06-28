import { render,screen } from "@testing-library/react";
import Cabecalho from ".";
test("Deve renderizar o nome do usuario logado ",()=>{
    render(<Cabecalho/>)
    const nomeUsuario = screen.getByText('Rian Yuri Rodrigues')
    expect(nomeUsuario).toBeInTheDocument();  
    // Esse teste esta verificando se o nome do cabecalho e o Rian Yuri Rodrigues Ohara

})