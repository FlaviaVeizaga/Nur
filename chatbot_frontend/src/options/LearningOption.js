import React from "react";
import '../options/LearningOption.css'


const LearningOptions = (props) => {
    const options = [
        {
            text: "Inicio Session",
            handler: props.actionProvider.handleInicioSession,
            id: 1,
        },
        {
            text: "Notas",
            handler: props.actionProvider.handleNotas,
            id: 3,
        },

        {
            text: "Plataforma Estudiantil",
            handler: props.actionProvider.handlePlataformaEstudiantil,
            id: 2,
        },


    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));
    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;