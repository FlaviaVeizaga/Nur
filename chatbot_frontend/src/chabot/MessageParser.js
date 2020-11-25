class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        console.log(this.state)

        if (lowerCaseMessage.includes("iniciar sesion")) {
            this.actionProvider.handleInicioSession()
        }

        if (lowerCaseMessage.includes('') || lowerCaseMessage === null) {
            this.actionProvider.mensajevacio();
        }

        if (lowerCaseMessage.includes("hola")) {
            this.actionProvider.greet()
        }

    }
}

export default MessageParser;