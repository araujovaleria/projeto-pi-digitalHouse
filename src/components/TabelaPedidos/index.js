import React from 'react';
import Paragrafo from '../Paragrafo';
import './style.css';

const TabelaPedidos = () => {
  return (
    <div className="border-coluna">
      <Paragrafo classe="titulo-left" texto="Minhas compras" />
      <table className="tabela">
        <thead>
          <tr>
            <th className="tamanho1">ITEM</th>
            <th className="tamanho">TAMANHO</th>
            <th className="tamanho">QT.</th>
            <th className="tamanho">PREÇO</th>
            <th className="tamanho1"> PEDIDO ADICIONAL</th>
            <th className="tamanho"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Camiseta shirt</td>
            <td>XL</td>
            <td>1</td>
            <td>49,90</td>
            <td>-</td>
            <td className="bottun-remover">X Remover</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaPedidos;
