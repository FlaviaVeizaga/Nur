

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hola, estamos aqui para ayudarte.")
    this.updateChatbotState(greetingMessage)
  }

  mensajevacio =() => {
    const message = this.createChatBotMessage(
      "Que información deseas saber?\n aquí algunas sugerencias!"
      ,{
        widget:'learningOptions',
        delay:500,
        withAvatar: true,
      }
    );
    this.updateChatbotState(message)
  }

  respuestaAlterna = () => {
    const message = this.createChatBotMessage(
      "Desea realizar alguna otra consulta?, aqui tenemos algunas opciones, visitas nuestras paginas oficiales."
      ,{
        widget:'PaginasOficiales',
        delay:3000,
        withAvatar: true,
      }
    );

    this.updateChatbotState(message);
  }

handleInicioSession = () => {
    const message = this.createChatBotMessage(
      "Sus credeciales para inicio de sesion  " +
      "se encuentran en su hoja de inscripcion. " +
      "Su codigo de usuario es su numero de Registro estudiantil, el que esta escrito al lado izquierdo de su nombre " +
      "y su pin o contraseña se encuentran al pie de pagina."
      ,{
        withAvatar: true,
      }
    );
    
    this.updateChatbotState(message);
    this.respuestaAlterna()
  };

  handlePlataformaEstudiantil = () => {
    const message = this.createChatBotMessage(
      "Para visitar nuestra Platafoma Estudiantil, ingrese al siguiente link"
      ,
      {
        widget: "plataforma",
        delay:500,
        withAvatar: true,
      },

    );
    this.updateChatbotState(message);
    this.respuestaAlterna()
  };




  handleNotas = () => {
    const message = this.createChatBotMessage(
      "Para Consultas notas ingrese al siguiente link: "
      , {
        widget: 'notas',
        withAvatar: true,
        delay:500
      }

    );
    this.updateChatbotState(message);
    this.respuestaAlterna()

  };

  updateChatbotState(message) {

    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))

  this.saveMessages(message)
  }


  saveMessages(messages) {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }
}



export default ActionProvider;