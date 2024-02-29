// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import ModalDetails from "../components/ModalDetails"
import Navigation from "../components/Navigation"
import postService from "../../services/post.service";
import { toast } from "sonner";

const SignUpLess = () => {
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
            const type = 'Saída'
            const registerSalary =
            {
                code: accountId,
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
                        <h3 className="less">Adicionar Saída</h3>
                        <i>Saída são valores que saíram de sua conta</i>

                        <label htmlFor="label">Qual é o nome da despesa?</label>
                        <input type="text" name="label" placeholder="Salgado do Beto" onChange={event => setLabel(event.target.value)} />

                        <label htmlFor="category">Qual é a categoria?</label>
                        <select name="category" onChange={event => setCategory(event.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Moradia">Moradia</option>
                            <option value="Alimentação">Alimentação</option>
                            <option value="Transporte">Transporte</option>
                            <option value="Saúde">Saúde</option>
                            <option value="Educação">Educação</option>
                            <option value="Diversos">Diversos</option>
                        </select>

                        <label htmlFor="date">Informe a data</label>
                        {/* FIXME: National Date */}
                        <input type="date" name="value" onChange={event => setDate(event.target.value)} />

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

export default SignUpLess