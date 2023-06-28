import { render, screen } from "@testing-library/react";
import Extrato from ".";

test("deve renderizar uma lista de transações", () => {
  // Ele vai estar testando o transações que uma prop .map e para poder ler ele, faz o seguinte ->

  const transacoes = [
    {
      transacao: "Depósito",
      valor: 100,
    },
  ];

  render(<Extrato transacoes={transacoes} />);
  const lista = screen.getByRole("listitem");
  expect(lista).toBeInTheDocument();
});
