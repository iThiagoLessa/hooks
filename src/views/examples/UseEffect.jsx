import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
    const n = parseInt(num);
    if( n < 0) return -1;
    if( n === 0 ) return 1;
    return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [ParOuImpar, setParOuImpar] = useState(0);
  const [elm, setElm] = useState("Par");

  useEffect(function(){
    setFatorial(calcFatorial(number));
  }, [number]);

  function ImparOuPar(number) {
    const n = parseInt(number);
    return n % 2 === 0 ? 'Par' : 'Ímpar'
  }

  useEffect(function() {
    setElm(ImparOuPar(ParOuImpar));
  }, [ParOuImpar]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
            </div>
            <input type="number" 
                className="input" 
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
          <div>
              <span className="text">Par ou Ímpar: </span>
              <span className="text red">{elm}</span>
          </div>
          <input 
            type="number" 
            className="input"
            value={ParOuImpar}
            onChange={e => setParOuImpar(e.target.value)}
            />
      </div>
    </div>
  );
};

export default UseEffect;
