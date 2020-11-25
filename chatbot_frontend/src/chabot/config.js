import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../options/LearningOption";
import LinkList from "../options/LinkList";
import NurAvatar from "../img/NurAvatar";


const botName = "NURBot";

const config = {
    botName: botName,
    lang: "no",
    headerText: botName
    , customComponents: {
        botAvatar: (props) => <NurAvatar {...props} />,
    },
    customStyles: {
        chatButton: {
            backgroundColor: "#08A5DF",
        },
        botAvatar: {
            backgroundColor: "#08A5DF",
        }


    },
    initialMessages: [
        createChatBotMessage(
            `Hola soy el ${botName}. En que puedo ayudarte? `+
            `Aquí te doy algunas sugerencias.`, {
            widget: "learningOptions",
            withAvatar: true,
        }),
        createChatBotMessage('Si tu consulta no se encuentra en las opciones mostradas anteriormente,'+
        ' por favor escribeme en el la cajita de chat.',{
            delay: 1000,
            withAvatar: true
        })
    ],
    state: {
        gist: "",
    },
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "Informacion",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "notas",
                        url: "http://notas2.nur.edu/",
                        id: 1,

                    },
                    {
                        text: "informacion",
                        url: "http://nur.edu.bo/",
                        id: 2,
                    },
                    {
                        text: "Plataforma Virtual",
                        url: "http://cvsc.nur.edu/",
                        id: 3,

                    },
                ],
            },
        }, {
            widgetName: "PaginasOficiales",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Consulta de Notas",
                        url: "http://notas2.nur.edu/",
                        id: 1,

                    },
                    {
                        text: "Quienes somos?",
                        url: "http://nur.edu.bo/",
                        id: 2,
                    },
                    {
                        text: "Plataforma Estudiantil",
                        url: "http://cvsc.nur.edu/",
                        id: 3,

                    },
                ],
            },

        }
        ,

        {
            widgetName: "notas",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Notas aquí",
                        url: "http://notas2.nur.edu/",
                        id: 1,

                    }
                ],
            },
        },
        {
            widgetName: "plataforma",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Plaforma Estudiantil aquí",
                        url: "http://cvsc.nur.edu/",
                        id: 1,

                    }
                ],
            },
        }
    ],
};

export default config;