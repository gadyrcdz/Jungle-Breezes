'use client'
import React from "react"
import { useLanguage } from "@/contexts/LanguajeContext"
import '../../../styles/WorkInProgress.css'

interface workInProgressProps {
    titleKey?: string;
    customTitle?: string;
    icon?: string;
    backgroundImage?: string;

}

const WorkInProgress: React.FC<workInProgressProps> = ({
    titleKey,
    customTitle,
    icon = '🚧',
    backgroundImage = '/images/hero/adventure-hero.jpg'
}) => {
    const {language} = useLanguage();
    const title = customTitle || titleKey || 'Página';

    const messages = {
    es: {
        working: 'Trabajando en ello',
        available: 'Esta sección estará disponible pronto'
    },
    en: {
        working: 'Work in progress',
        available: 'This section will be available soon'
    }
    };

    return (
        <div className="work-in-progress">
            <div 
                className=" absolute inset-0 bg-cover bg-center"   
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${backgroundImage}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            ></div>
            
            <div className="content">
                <div className="icon-wrapper">
                    <span className="tool-icon">{icon}</span>
                </div>
                <h1>{title}</h1>
                <p className="message">
                    {messages[language].working}<span className="dots">
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </p>
                <p className="sub-message">{messages[language].available}</p>
            </div>
        </div>

    )
}

export default WorkInProgress;