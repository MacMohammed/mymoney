import React from "react";
import Rest from "./rest";

const baseURL = "https://mymoney-macmohammed.firebaseio.com/";
const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {
  // const data = useGet("movimentacoes/2019-08");
  // const [postData, post] = usePost("movimentacoes/2019-08");
  // const [deleteData, remove] = useDelete();

  const data = useGet("meses");

  const saveNew = () => {
    // post({ valor: 60, descricao: "Chop" });
  };

  const doRemove = () => {
    // remove("movimentacoes/2019-08/-MDHUmWB2igSeCzPcV-5");
  };

  return (
    <div className="container">
      <div>
        <nav className="navbat navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand">MyMoney</a>
          </div>
        </nav>

        <h2>Adicionar mês</h2>

        <select>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>

        <select>
          <option value="01">01</option>
          <option value="02">02</option>
        </select>

        <button>Adicionar mês</button>
        {data.loading && <span>Carregando...</span>}
        {!data.loading && (
          <table className="table">
            <thead>
              <tr>
                <th>Mês</th>
                <th>Previsão entrada</th>
                <th>Entradas</th>
                <th>Previsão saída</th>
                <th>Saídas</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.data).map((mes) => {
                return (
                  <tr key={mes}>
                    <td>{mes}</td>
                    <td>{data.data[mes].previsao_entrada}</td>
                    <td>{data.data[mes].entradas}</td>
                    <td>{data.data[mes].previsao_saida}</td>
                    <td>{data.data[mes].saidas}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
