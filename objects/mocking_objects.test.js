// criando um mock de objeto com a minha implementação:
const meuServico = {
    somar: jest.fn().mockReturnValue(10),
    subtrair: jest.fn().mockImplementation((a, b) => a - b)
  };

test('testando a função soma', () => {
    expect(meuServico.somar()).toBe(10);
  })

test('testando a função subtrair', () => {
    expect(meuServico.subtrair(8, 2)).toBe(6);
  })
