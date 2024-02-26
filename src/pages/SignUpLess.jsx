// import { useEffect, useState } from "react";
import ModalDetails from "../components/ModalDetails"
import Navigation from "../components/Navigation"

const SignUpLess = () => {

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
                        <option value="">Moradia</option>
                        <option value="">Alimentação</option>
                        <option value="">Transporte</option>
                        <option value="">Saúde</option>
                        <option value="">Educação</option>
                        <option value="">Diversos</option>
                    </select>

                    <label htmlFor="">Informe a data</label>
                    {/* FIXME: National Date */}
                    <input type="date" />

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