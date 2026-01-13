'use client'
import React from 'react';
import { useLanguage } from '@/contexts/LanguajeContext';
import '../../../styles/WorkInProgress.css'

interface WorkInProgressProps {
  titleKey?: string; // Clave de traducción como 'navbar.services'
  icon?: string;
  backgroundImage?: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({ 
  titleKey = 'workInProgress.defaultTitle', // Clave por defecto
  icon = '🚧',
  backgroundImage = '/images/hero/adventure-hero.jpg'

}) => {
  const { language, t } = useLanguage();
  
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

  // Traducir el título usando la clave
  const title = t(titleKey) as string;

  return (
    <div className="work-in-progress">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
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
  );
};

export default WorkInProgress;