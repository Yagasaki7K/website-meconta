// import { useEffect, useState } from "react";
import ModalDetails from "../components/ModalDetails"
import Navigation from "../components/Navigation"

const SignUpLess = () => {
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`;
    };

    return (
        <>
            <Navigation />
            <ModalDetails>
                <div className="modal-content">
                    <h3 className="less">Adicionar Saída</h3>
                    <i>Saída são valores que saíram de sua conta</i>

                    <label htmlFor="">Qual é o nome da despesa?</label>
                    <input type="text" />

                    <label htmlFor="">Qual é a categoria?</label>
                    <select name="" id="">
                        <option value="">Salário</option>
                        <option value="">Contas à Receber</option>
                        <option value="">Dinheiro Emprestado</option>
                        <option value="">Empréstimo Bancário</option>
                    </select>

                    <label htmlFor="">Informe a data</label>
                    <input type="date" id="inicialDate" name="inicialDate" value={getCurrentDate} />

                    <label htmlFor="">Informe o valor</label>
                    <input type="text" name="" id="" />


                    <div className="buttons">
                        <button className="send">Enviar</button>
                        <button className="clear">Limpar</button>
                    </div>

                </div>
            </ModalDetails>
        </>
    )
}

export default SignUpLess