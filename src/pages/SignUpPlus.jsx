import { useEffect, useState } from "react"
import ModalDetails from "../components/ModalDetails"
import Navigation from "../components/Navigation"
import postService from "../../services/post.service"
import { toast } from "sonner"
import authService from "../../services/auth.service"

const SignUpPlus = () => {
    const [render, setRender] = useState(false)
    const [label, setLabel] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState('')
    const [accountId, setAccountId] = useState('')

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        return authService.signOutGoogle();
    }

    useEffect(() => {
        checkAuth()
            .then(() => {
                authService.stateAuthentication()
                    .then((result) => {
                        if (result) {
                            setRender(true)
                            setAccountId(result.id)
                        } else {
                            SignOut();
                            window.location.href = "/"
                        }
                    });
            })
            .catch(() => {
                window.location.href = "/"
            });
    }, []);

    const AddReceiptToAccount = async () => {
        if (!label || !date || !category || !value) {
            toast.warning('Preencha todos os campos')
            return
        } else {
            const type = 'Entrada'
            const registerSalary =
            {
                id: accountId,
                title: label,
                type,
                date,
                category,
                value,
            }

            await postService.addAccount(registerSalary);
            toast.success('Registro efetuado com sucesso!');
            EraseReceiptToAccount()
        }
    }

    const EraseReceiptToAccount = () => {
        setLabel('')
        setDate('')
        setCategory('')
        setValue('')
    }

    if (render) {
        return (
            <>
                <Navigation />
                <ModalDetails>
                    <div className="modal-content">
                        <h3 className="plus">Adicionar Entrada</h3>
                        <i>Entrada são valores que entraram na conta</i>

                        <label htmlFor="label">Qual é o nome da entrada?</label>
                        <input type="text" name="label" placeholder="13º Salário" onChange={event => setLabel(event.target.value)} />

                        <label htmlFor="category">Qual é a categoria?</label>
                        <select name="category" onChange={event => setCategory(event.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Salário">Salário</option>
                            <option value="Contas à Receber">Contas à Receber</option>
                            <option value="Dinheiro Emprestado">Dinheiro Emprestado</option>
                        </select>

                        <label htmlFor="date">Informe a data</label>
                        <input type="date" name="date" onChange={event => setDate(event.target.value)} />

                        <label htmlFor="value">Informe o valor</label>
                        <input type="text" name="value" onChange={event => setValue(event.target.value)} />

                        <div className="buttons">
                            <button className="send" onClick={AddReceiptToAccount}>Enviar</button>
                            <button className="clear" onClick={EraseReceiptToAccount}>Limpar</button>
                        </div>
                    </div>
                </ModalDetails>
            </>
        )
    }
}

export default SignUpPlus