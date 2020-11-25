import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MessageParser from "./MessageParser";



const botName = "Asistente Virtual Nur";

const config = {
    botName: botName,
    lang: "no",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    initialMessages: [
        createChatBotMessage(
            `Hola soy el ${botName}. Estoy aqui para ayudarte.`
        ),
        createChatBotMessage(
            "Cual es tu consulta?",
            {
                withAvatar: true,
                delay: 500, 
                widget: "overview",
            }
        ),
    ],
    state: {
        gist: "",
    },
    customComponents: {},
    widgets: [
      /*  {
            widgetName: "overview",
            widgetFunc: (props) => <Overview {...props} />,
            mapStateToProps: ["gist"],
        },*/
        {
            widgetName: "messageParser",
            widgetFunc: (props) => <MessageParser {...props} />,
            mapStateToProps: ["gist"],
        },
    /*    {
            widgetName: "actionProviderDocs",
            widgetFunc: (props) => <ActionProviderDocs {...props} />,
            mapStateToProps: ["gist"],
        },*/
    ],
};

export default config;