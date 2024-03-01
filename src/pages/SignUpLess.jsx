// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import ModalDetails from "../components/ModalDetails"
import Navigation from "../components/Navigation"
import postService from "../../services/post.service";
import { toast } from "sonner";
import LogoMobile from "../components/LogoMobile";

const SignUpLess = () => {
    const [Render, setRender] = useState(false)
    const [Label, setLabel] = useState('')
    const [Date, setDate] = useState('')
    const [Category, setCategory] = useState('')
    const [Value, setValue] = useState('')
    const [AccountId, setAccountId] = useState('')

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
        if (!Label || !Date || !Category || !Value) {
            toast.warning('Preencha todos os campos')
            return
        } else {
            const type = 'Saída'
            const registerSalary =
            {
                code: AccountId,
                title: Label,
                type,
                date: Date,
                category: Category,
                value: Value,
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

    const handleInputMoney = (event) => {
        let inputValue = event.target.value;

        // Remove todos os caracteres não numéricos
        inputValue = inputValue.replace(/[^\d]/g, '');

        // Formata o valor com duas casas decimais e o separador de milhar
        const formattedValue = Number(inputValue / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        setValue(formattedValue);
    };

    if (Render) {
        return (
            <>
                <Navigation />
                <ModalDetails>

                    <div className="modal-content">
                        <LogoMobile />

                        <h3 className="less">Adicionar Saída</h3>
                        <i>Saída são valores que saíram de sua conta</i>

                        <label htmlFor="label">Qual é o nome da despesa?</label>
                        <input type="text" name="label" value={Label} placeholder="Salgado do Beto" onChange={event => setLabel(event.target.value)} />

                        <label htmlFor="category">Qual é a categoria?</label>
                        <select name="category" value={Category} onChange={event => setCategory(event.target.value)}>
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
                        <input type="date" name="value" value={Date} onChange={event => setDate(event.target.value)} />

                        <label htmlFor="value">Informe o valor</label>
                        <input type="text" value={Value} onChange={handleInputMoney} placeholder="R$ 1.000,00" />

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