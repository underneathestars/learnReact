import "./form-style.css"

export const Form = () => {
    return (
        <div className="formContainer">
            <h1>Contattami</h1>
            <form>
                <div className="form">
                    <label className="labelName" htmlFor="fistName">Nome</label>
                    <input type="text" name="firstName" className="firstName" tabIndex="1" />
                    <label className="labelLast" htmlFor="lastName">Cognome</label>
                    <input type="text" name="lastName" className="lastName" tabIndex="2" />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="esempio@gmail.it" tabIndex="2" />
                    <label htmlFor="message">Il tuo messaggio</label>
                    <textarea name="message" className="message" cols="30" rows="10" placeholder="Scrivi qui il tuo messaggio..."></textarea>
                    <button type="submit" className="send">Invia</button>
                </div>
            </form>
        </div>
    )
}
