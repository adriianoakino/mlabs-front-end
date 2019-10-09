import React from 'react';
import './Indicator.css';

export default props => {
    return (
        <>
            <div className = "md-stepper-horizontal orange">
                <div className = "md-step active">
                    <div className = "md-step-circle" />
                    <div className = "md-step-title"> Verificação </div>
                    <div className = "md-step-bar-left active" />
                    <div className = "md-step-bar-right active" />
                </div>
                <div className = "md-step active">
                    <div className = "md-step-circle" />
                    <div className = "md-step-title">Páginas</div>
                    <div className = "md-step-bar-left active" />
                    <div className = "md-step-bar-right" />
                </div>
                <div className = "md-step">
                    <div className = "md-step-circle" />
                    <div className = "md-step-title"> Segmento </div>
                    <div className = "md-step-bar-left" />
                    <div className = "md-step-bar-right" />
                </div>
                <div className = "md-step">
                    <div className = "md-step-circle" />
                    <div className = "md-step-title"> Concorrentes </div>
                    <div className = "md-step-bar-left" />
                    <div className = "md-step-bar-right" />
                </div>
            </div>
        </>

    );
}