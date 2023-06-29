import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from ".";
describe("Deve renderizar um campo de input",()=>{
    
    test('no documento', () => {
      render(<Formulario />);
      const inputText = screen.getByPlaceholderText("Digite um valor");
      expect(inputText).toBeInTheDocument();
    });
    
    test("com o type number", () => {
      render(<Formulario />);
      const inputText = screen.getByPlaceholderText("Digite um valor");
      expect(inputText).toHaveAttribute("type", "number");
    });
    
    test("que pode ser preenchido", () => {
      render(<Formulario />);
      const inputText = screen.getByPlaceholderText("Digite um valor");
      userEvent.type(inputText, "50");
      expect(inputText).toHaveValue(50);
    });
})
test('deve chamar um evento de on submit  ao clicar em reaizar a transação',()=>{
  const realizarTransacao = jest.fn();
  // o jest.fn esta simulando o comportamento de uma função

  render(<Formulario realizarTransacao={realizarTransacao}/>)
    const botao = screen.getByRole('button')

    userEvent.click(botao)

    expect(realizarTransacao).toHaveBeenCalledTimes(1)

    // Essa função espera que o botao seja acionado pelo menos uma vez
})