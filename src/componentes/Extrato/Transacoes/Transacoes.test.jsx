import { render, screen } from "@testing-library/react";
import Transacoes from ".";
import estilos from '../Extrato.module.css'


test("Deve renderizar o mesmo componente com props atualizadas", () => {
    const transacao = {
      transacao: "Depósito",
      valor: 100,
    };
    render(
    <Transacoes
      estilos={estilos}
      transacao={transacao}
    />
  );
  const tipoTransacao = screen.getByTestId("tipoTransacao");
  const valorTransacao = screen.getByTestId("valorTransacao");

  expect(tipoTransacao).toHaveTextContent("Depósito");
  expect(valorTransacao).toHaveTextContent("R$ 100");

  
});
