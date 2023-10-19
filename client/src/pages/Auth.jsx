
const Auth = () => {
    const onSubmit = () => {

    }
  return (
    <div className='background'>
        <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">
                Bem-vind0👋
            </div>
            <div className="form-subtitle">Informe um nome de usuário para entrar!</div>
            <div className="auth">
                <div className="auth-label">Username</div>
                <input className="auth-input" name="username" type="text" />
                <button className="auth-button" type="submit">Entrar</button>
            </div>
        </form>

    </div>
  )
}

export default Auth