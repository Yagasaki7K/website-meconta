import ModalDetails from "../components/ModalDetails"
import Navigation from "../components/Navigation"

const SignUpPlus = () => {
    return (
        <>
            <Navigation />
            <ModalDetails>
                <div className="modal-content">
                    <h3 className="plus">Adicionar Entrada</h3>
                    <i>Entrada são valores que entraram na conta</i>

                    <label htmlFor="">Qual é o nome da entrada?</label>
                    <input type="text" />

                    <label htmlFor="">Qual é a categoria?</label>
                    <select name="" id="">
                        <option value="">Salário</option>
                        <option value="">Contas à Receber</option>
                        <option value="">Dinheiro Emprestado</option>
                    </select>

                    <label htmlFor="">Informe a data</label>
                    <input type="date" name="" id="" />

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

export default SignUpPlus