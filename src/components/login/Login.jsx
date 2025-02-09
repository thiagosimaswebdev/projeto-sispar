import Logo from "../../assets/Tela Login/logo-ws.png"
import Capa from "../../assets/Tela Login/imagem tela de login.png"
function Login (){
    return (
        <>
        <main>
            <section>
                <img src={Capa} alt="Imagem tela de login" />
            </section>

            <section>
                <img src={Logo} alt="Logo da Wilson sons" />
                <h1>Boa vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos  e Parcelamentos</p>

                <form action="">
                <input type="email" name="email" id="email" placeholder="E-mail" />
                <input type="password" name="senha" id="senha" placeholder="Senha"/>

                <a href="#">Esqueci minha senha</a>

                <div>
                    <button>Entrar</button>
                    <button>Criar Conta</button>
                </div>


                </form>
            </section>
        </main>
        </>
    )
}

export default Login 