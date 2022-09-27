import styles from "../Home/home.module.css";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// import Box from "@mui/material/Box";
import React from "react";
import Select from "react-select";

import AwesomeSlider from "react-awesome-slider";
import { FaCheckCircle } from "react-icons/fa";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

function Home() {
  const [data, setData] = useState([]);
  const [dataPlanos, setDataPlanos] = useState([]);
  const carousel = useRef(null);
  const [pessoa, setPessoa] = useState(null);
  const [venda, setVenda] = useState("");
  const [empresa, setEmpresa] = useState([]);
  const [parcela, setParcela] = useState("À vista");
  const [valor, setValor] = useState(null);
  const [selecionarEmpresa, setSelecionarEmpresa] = useState("");
  const [buscaPlano, setBuscaPlano] = useState([]); // buscar planos
  const [valorAtualizado, setValorAtualizado] = useState(null);
  const [taxaAplicada, setTaxaAplicada] = useState(null); // taxa que foi aplicada
  const [descontoAplicado, setDescontoAplicado] = useState(null); // desconto que foi aplicada
  const [notaReclameAqui, setNotaReclameAqui] = useState(null); // Nota do reclame aqui

  const [selectPlano, setSelectPlano] = useState(""); // estado dos plano selecionado

  const [parcelamentodoPlano, setParcelamentodoPlano] = useState([]); // taxas do parcelamento

  // const empresas = ["Ton", "Mercado Pago", "SumUp"];
  const parcelas = [
    "À vista",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
    "11x",
    "12x",
  ];

  // busca no banco de dados do firebase
  const empresaCollectionRef = collection(db, "empresas");
  const planoCollectionRef = collection(db, "planos");

  useEffect(() => {
    const getEmpresas = async () => {
      const lista_empresas = await getDocs(empresaCollectionRef);
      const lista_planos = await getDocs(planoCollectionRef);

      setEmpresa(
        lista_empresas.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setDataPlanos(
        lista_planos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getEmpresas();
  }, []);

  // função para calcular as taxas 
  function calculandotaxas([venda, valor, parcela, parcelamentodoPlano]) {
    let valo = null;
    let val = null;
    let taxaAtual = null;
    let desconto = null;
    let desc = null;
    let calc = parcelamentodoPlano[0];

    if (venda === "debito") {
      valo = (100 * valor) / (100 - calc[0]);
      val = valo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      taxaAtual = calc[0];
      desc = valo - valor;
      desconto = desc.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
    if (venda === "credito") {
      if (parcela === "À vista") {
        valo = (100 * valor) / (100 - calc[1]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[1];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "2x") {
        valo = (100 * valor) / (100 - calc[2]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[2];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "3x") {
        valo = (100 * valor) / (100 - calc[3]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[3];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "4x") {
        valo = (100 * valor) / (100 - calc[4]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[4];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "5x") {
        valo = (100 * valor) / (100 - calc[5]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[5];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "6x") {
        valo = (100 * valor) / (100 - calc[6]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[6];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "7x") {
        valo = (100 * valor) / (100 - calc[7]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[7];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "8x") {
        valo = (100 * valor) / (100 - calc[8]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[8];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "9x") {
        valo = (100 * valor) / (100 - calc[9]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[9];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "10x") {
        valo = (100 * valor) / (100 - calc[10]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[10];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "11x") {
        valo = (100 * valor) / (100 - calc[11]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[11];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "12x") {
        valo = (100 * valor) / (100 - calc[12]);
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[12];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      
      
    }
    setValorAtualizado(val);
    setTaxaAplicada(taxaAtual);
    setDescontoAplicado(desconto);
  }

  

  const BuscaPlanoFiltro = () => {
    const data = dataPlanos.filter((plano) =>
      plano.reference.startsWith(selecionarEmpresa.toLowerCase())
    );
    setBuscaPlano(data);
  };

  const setPlan = (e) => {
    setSelectPlano(e.nome);
    setParcelamentodoPlano([e.recebimento1, e.recebimento15, e.recebimento30]);
    setPessoa(e.tipo);
  };

  useEffect(() => {
    BuscaPlanoFiltro();
  }, [selecionarEmpresa]);

  useEffect(() => {
    fetch("http://localhost:3000/static/maquinas.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/static/planos.json")
  //     .then((response) => response.json())
  //     .then(setDataPlanos);
  // }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  function setActivePessoa({ target }) {
    setPessoa(target.id);
  }
  function setActiveVenda({ target }) {
    setVenda(target.id);
  }
  //observador da função de calculo
  useEffect(() => {
    calculandotaxas([venda, valor, parcela, parcelamentodoPlano]);
  }, [valor, parcela, parcelamentodoPlano]);

  if (!data || !data.length) return null;

  return (
    <>
      <div className={styles.boxbanner}>
        <div className={styles.banner}>
          <AwesomeSlider className={styles.slider} animation="cubeAnimation">
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/1200x630-maquina-cartoes.jpg" />
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/capa-1-1280x720-1.jpg" />
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/rede-pos-cielo-movel-banda-feat-br-1000x542-4.jpg" />
          </AwesomeSlider>
        </div>
      </div>
      <div className="container">
        <div className={styles.titulocalculadora}>
          <h2>Calculadora de taxa</h2>
        </div>
        <div className={styles.calculadora}>
          <div className={styles.boxcalculadora}>
            <div className={styles.data}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}>
                {/* <h1>{console.log(buscaPlano)}</h1> */}
                <label htmlFor="empresa">Escolha a empresa:</label>
                <select
                  value={selecionarEmpresa}
                  onChange={({ target }) => {
                    setSelecionarEmpresa(target.value);
                  }}>
                  <option value="escolha" disabled>
                    Escolha a empresa
                  </option>
                  {empresa &&
                    empresa.map((empre) => {
                      return <option key={empre.id}>{empre.nome}</option>;
                    })}
                </select>

                <label>Escolha o plano:</label>
                <div>
                  {buscaPlano &&
                    buscaPlano?.map((plan) => {
                      return (
                        <button
                          key={plan.id}
                          value={selectPlano}
                          onClick={() => setPlan(plan)}
                          className={
                            selectPlano === plan.nome ? styles.btnActive : ""
                          }>
                          {plan.nome}
                        </button>
                      );
                    })}
                </div>
                <label htmlFor="tipovenda">Plano Para:</label>
                <div className={styles.opcoes}>
                  <button
                    className={pessoa === 0 ? styles.btnActive : ""}
                    id="cpf">
                    Pessoa Física
                  </button>
                  <button
                    className={pessoa === 1 ? styles.btnActive : ""}
                    id="cnpj">
                    Pessoa Jurídica
                  </button>
                </div>

                {!buscaPlano && (
                  <button
                    className={`${styles.planButton} ${styles.buttonDisabled}`}>
                    Escolha a empresa
                  </button>
                )}
                <label htmlFor="tipovenda">Escolha o tipo de venda:</label>
                <div className={styles.opcoes}>
                  <button
                    className={venda === "credito" ? styles.btnActive : ""}
                    id="credito"
                    onClick={setActiveVenda}>
                    Crédito
                  </button>
                  <button
                    className={venda === "debito" ? styles.btnActive : ""}
                    id="debito"
                    onClick={setActiveVenda}>
                    Débito
                  </button>
                </div>
                <label htmlFor="valor">Valor da venda:</label>
                <input
                  type="number"
                  name="valor"
                  id="valor"
                  placeholder="ex: R$ 4257,89"
                  value={valor}
                  onChange={({ target }) => {
                    setValor(target.value);
                  }}
                />
                <h1>{console.log(parcela)}</h1>
                <label htmlFor="parcelamento">Parcelamento:</label>
                <select
                  value={parcela}
                  onChange={({ target }) => {
                    setParcela(target.value);
                  }}>
                  {parcelas.map((parcela) => {
                    return (
                      <option value={parcela} key={parcela}>
                        {parcela}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>
            <div className={styles.result}>
              <div className={styles.recebe}>
                <p>Você recebe:</p>
                <h3>
                  <span>{valorAtualizado}</span>
                </h3>
              </div>
              <div className={styles.taxa}>
                <p className={styles.titulo}>Taxa Aplicada:</p>
                <p>
                  <span>{taxaAplicada}%</span>
                </p>
              </div>
              <div className={styles.desconto}>
                <p className={styles.titulo}>Desconto Aplicado:</p>
                <span>{descontoAplicado}</span>
              </div>
              <div className={styles.melhor}>
                <p>
                  <FaCheckCircle />
                  Melhor taxa no crédito
                </p>
                <p>
                  <FaCheckCircle />
                  Nota 9.4 no reclame aqui
                </p>
              </div>
              <button className={styles.comprar}>Peça já a sua</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="logo">
          <h2>Principais ofertas</h2>
        </div>
        <center>
          <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const { id, nome, price, oldPrice, image } = item;
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image} alt={nome} />
                  </div>
                  <div className="info">
                    <span className="nome">{nome}</span>
                    <span className="oldPrice">R$ {oldPrice}</span>
                    <div className="bt-centro">
                      <NavLink to="/ofertas" end>
                        <button className="bt">R$ {price}</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </center>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="/static/images/image-1.png" alt="Scroll Left" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/static/images/image-1.png" alt="Scroll Right" />
          </button>
        </div>

        {/*testando a recuperação dos dados
          Aqui é para mostrar os nomes das empresas na tela home 
        */}
      </div>
    </>
  );
}
export default Home;
