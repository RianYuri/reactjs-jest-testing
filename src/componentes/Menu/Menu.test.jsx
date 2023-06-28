import { render, screen } from "@testing-library/react";
import Menu from ".";

test("deve renderizar um link para a pagina inicial", () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText("Inicial");
  expect(linkPaginaInicial).toBeInTheDocument();
});

test("deve renderizar uma lista de link", () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole("link");
  expect(listaDeLinks).toHaveLength(4);

  // Aqui nesse teste esta dizendo que no objeto link como ele é um array deve conter tamanho 4
});

test("Nao deve renderizar o link para Extrato", () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText("Extrato");
  expect(linkExtrato).not.toBeInTheDocument();

  // Aqui esta dizendo que no meu link Extrato nao esteja o Extrato
});

test('deve renderizar uma lista de link com a classe link', ()=>{
    render(<Menu/>)
    const links = screen.getAllByRole('link');
    links.forEach((link)=>expect(link).toHaveClass('link'))
    expect(links).toMatchSnapshot()
    // Esse teste verifica se meu array de link estao com a classe link e gera uma pasta snapshot mostrando como tem que ficar
})