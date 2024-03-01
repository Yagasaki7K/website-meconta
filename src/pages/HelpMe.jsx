import { useEffect, useState } from "react";
import Navigation from "../components/Navigation"
import SidepageDetails from "../components/SidepageDetails"
import authService from "../../services/auth.service";
import LogoMobile from "../components/LogoMobile";

const HelpMe = () => {
    const [render, setRender] = useState(false)

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

    if (render) {
        return (
            <SidepageDetails>
                <Navigation />

                <div className="content">
                    <LogoMobile />

                    <h1><i className="uil uil-question-circle" /> Central de Dúvidas</h1>

                    <h4>Como posso cadastrar um gasto que eu tive?</h4>
                    <p>
                        Isso é simples, entre em <b>Adicionar Saída</b>, existem duas maneiras, pelo menu lateral ou se estiver pelo
                        celular, você poderá clicar no menu, um botão no rodapé com três pontos e clicar no negativo (vermelho). Preencha
                        o formulário e o sistema irá registrar o gasto.
                    </p>

                    <h4>Como posso cadastrar um salário que eu ganhei?</h4>
                    <p>
                        Isso também é simples, entre em <b>Adicionar Entrada</b>, existem duas maneiras, pelo menu lateral ou se estiver pelo
                        celular, você poderá clicar no menu, um botão no rodapé com três pontos e clicar no positivo (verde). Preencha
                        o formulário e o sistema irá registrar o gasto.
                    </p>

                    <h4>Cadastrei um gasto ou receita errado, o que fazer?</h4>
                    <p>
                        Vá no <b>Relatório de Gastos</b> localizado no menu lateral ou se estiver pelo celular, você poderá clicar
                        no menu, um botão no rodapé com três pontos e clicar no cifrão (roxo) e através
                        dele você verá todo o relatório do mês (você pode filtrar para o mês desejado) e poderá deletar despesas
                        que foram inseridas de maneiras incorretas. Deletar uma despesa ou receita,
                        irá refletir no gráfico e no documento do relatório, caso faça o download.
                    </p>

                    <p>
                        Lembre-se que só será possível deletar uma despesa ou receita que foi inserida no mês atual. Despesas erradas nos meses
                        anteriores não podem ser deletadas.
                    </p>

                    <h4>Como posso resetar a minha conta?</h4>
                    <p>Através do <a href="https://api.whatsapp.com/send/?phone=5519998018174&text=Ol%C3%A1+estou+solicitando+o+resete+da+minha+MeConta.+Voc%C3%AA+pode+me+ajudar?&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">contato pelo suporte</a>, você estará enviando uma mensagem a um de nossos desenvolvedores
                        para solicitar o resete da conta. Para a sua segurança você não poderá fazer isso através da plataforma.
                        Será necessário apresentação de documentos para informar que a conta Google cadastrada pertence a você e após isso,
                        sua conta será limpa do sistema para novos cadastros.
                    </p>

                    <p>Mas cuidado, somente informe isso quando for extremamente necessário. Nenhuma informação poderá ser
                        recuperada ou restaurada após essa ação.</p>

                    <h4>Como posso deletar a minha conta?</h4>
                    <p>Através do <a href="https://api.whatsapp.com/send/?phone=5519998018174&text=Ol%C3%A1+estou+solicitando+a+exclusão+da+minha+MeConta.+Voc%C3%AA+pode+me+ajudar?&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">contato pelo suporte</a>, você estará enviando uma mensagem a um de nossos desenvolvedores
                        para solicitar a exclusão da conta de forma permanente. Para a sua segurança você não poderá fazer isso através da plataforma.
                        Será necessário apresentação de documentos para informar que a conta Google cadastrada pertence a você e após isso,
                        sua conta será deletada do sistema para novos cadastros.
                    </p>

                    <p>Mas cuidado, somente informe isso quando for extremamente necessário. Nenhuma informação poderá ser
                        recuperada ou restaurada após essa ação.</p>

                    <h4>O que são esses gráficos no início?</h4>
                    <p>Temos dois gráficos atualmente registrados em nosso sistema, sendo o primeiro <b>Gasto Mensal</b> e a <b>Média de Gasto</b> por Categoria.</p>

                    <p>
                        Mas o que significa? O gasto mensal, iremos calcular TODOS as SAÍDAS (Despesas) e ENTRADAS (Receitas) do mês e exibir o valor total,
                        mas somente para aquele mês mencionado no gráfico.
                    </p>

                    <p>
                        Já o gasto por categoria, vamos mostrar o valor total que você gastou no mês atual com cada categoria, assim você terá noção durante
                        o mês inteiro o que você está gastando mais, será que você está gastando muito com transporte ou com saúde e alimentação? Esse gráfico
                        irá te ajudar a ter essa métrica.
                    </p>

                    <h4>Estou no meu celular, porque não vejo o gráfico?</h4>
                    <p>
                        Separamos o gráfico apenas para ficar no computador e deixamos o celular apenas para funcionalidades simples, como
                        adicionar despesas e cadastrar receitas, já que estamos cuidando do seu dia a dia e não queremos excesso de informações
                        na sua cara, quando na verdade, você só quer cadastrar que ganhou um dinheiro ou acabou de gastar com um salgado e um refrigerante.
                    </p>

                    <h4>Onde ficam guardadas as minhas informações?</h4>
                    <p>
                        Todas as informações que você nos dá para o MeConta, ele está armazenado no banco de dados do Google e vinculado com a sua conta Google,
                        todas as informações são armazenadas e reservadas nos registros da MeConta e estão protegidos pelo serviço da Google. Somente consultaremos
                        seus registros em caso de algum problema técnico ou mediante a solicitação do usuário junto a identificação do usuário através de documentos. Não compartilharemos nenhuma informação, toda a informação deve ser acessada através da plataforma, as consultas somente serão realizadas para fins de ajustes ou revisões de conflito ou problemas com a plataforma.
                    </p>

                    <h4>Vocês então tem acesso a minha conta do Google?</h4>
                    <p>
                        Negativo. Ao se conectar com o Google toda a segurança é deles e somente estamos vinculando a sua conta com as informações que você
                        passar na plataforma, como apenas o caso de cadastro de receitas e despesas.
                    </p>

                    <h4>Realmente preciso entrar em contato</h4>
                    <p>Para entrar em contato, é só <a href="https://api.whatsapp.com/send/?phone=5519998018174&text=Ol%C3%A1+estou+solicitando+o+suporte+da+MeConta.+Voc%C3%AA+pode+me+ajudar?&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">clicar aqui</a>. Assim você estará
                        entrando em contato direto com o WhatsApp. E claro, vale lembrar que esse tipo de contato já releva que você leu todo o FAQ e ainda assim, não conseguiu ajuda para a sua dificuldade.</p>

                    <p className="mobile">&nbsp;</p>
                </div>
            </SidepageDetails>
        )
    }
}

export default HelpMe