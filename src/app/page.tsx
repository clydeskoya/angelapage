"use client"

import { useState } from 'react'
import styles from './page.module.css'
import {ChevronRight,PhoneCall, ClipboardPlus, Armchair, Users, Mail, Clock, ClipboardList } from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' })
  
  const [language, setLanguage] = useState('pt')
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const translations = {
    pt: {
      home: 'Sobre',
      services: 'Serviços',
      contact: 'Contactos',
      heroTitle: 'Sobre Mim',
      p1: 'Como psiquiatra, a minha missão é ajudar o paciente a compreender e controlar as emoções, fortalecer a sua saúde mental e encontrar equilíbrio.',
      p2:' Tanto no sector público como privado, há mais de 30 anos que trato patologias como neuroses, ansiedade, depressão, transtornos de personalidade, etc.',
      p3:'Com um olhar sempre atento às necessidades e características específicas de cada paciente, juntos vamos traçar o caminho para uma vida mais tranquila e em plenitude. Este é o meu compromisso, conte comigo nessa jornada.',
      ctaButton: '218 480 046',
      features: 'Serviços',
      repertoire: 'Psiquiatria',
      repertoireText: '',
      flexibleHours: 'Psicoterapia',
      flexibleHoursText: '',
      ownEquipment: 'Grupanálise',
      ownEquipmentText: '',
      getInTouch: 'Entre em contacto',
      name: 'Nome',
      message: 'Mensagem',
      sendMessage: 'Enviar mail',
      subject: 'Assunto',
      cv: 'CV',
      openPdf: 'Abrir PDF',
      location: 'Localização',
      address: 'Avenida de Roma 3, 2°E 1000-260 Lisboa, Portugal'
    }
  }

  const t = translations[language as keyof typeof translations]
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ zIndex: 1000 }}>
        <div className={styles.headerContent}>
          <Image
            src={require("./img/logo.png")}
            alt="Logo"
            className={styles.heroImage}
            layout="responsive"
            width={150}
            priority
            />
          <nav>
            <ul className={styles.navList}>
              <li><a href="#about" className={styles.navLink}>{t.home}</a></li>
              <li><a href="#features" className={styles.navLink}>{t.services}</a></li>
              <li><a href="#contact" className={styles.navLink}>{t.contact}</a></li>
              <li><a href="#location" className={styles.navLink}>{t.location}</a></li>
            </ul>
          </nav>
          <div className={styles.scheduleContainer}>
            <Clock className={styles.clockIcon} size={20.8} color='white' />
            <span style={{ fontSize: '1.3rem', color: 'white' }}>14h30 - 19h30</span>
          </div>
        </div>
      </header>
      <main>
      <section id="home" className={styles.heroSection} style={{ height: '70vh', minHeight: '70vh', paddingTop: '80px' }}>
          <div className={styles.heroContainer}>
              <Image
                src={require("./img/hero-fs8.png")}
                alt="Hero Image"
                className={styles.heroSideImage}
                style={{ filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))' }}
              />
            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>Cuide da mente, transforme a sua vida!</h2>
              <div className={styles.ctaSection}>
                <a href="tel:218480046" className={styles.ctaButton} style={{ width: '252px', justifyContent: 'center' }}>
                  <PhoneCall className={styles.buttonIcon} />
                  {t.ctaButton}
                  <ChevronRight className={styles.buttonIcon} />
                </a>
                <a href="tel:962556989" className={styles.ctaButton} style={{ width: '252px', justifyContent: 'center' }}>
                  <PhoneCall className={styles.buttonIcon} />
                  962 556 989
                  <ChevronRight className={styles.buttonIcon} />
                </a>
                <a href="#contact" className={styles.ctaButton} style={{ width: '252px', justifyContent: 'center' }}>
                  <Mail className={styles.buttonIcon} />
                  Email
                  <ChevronRight className={styles.buttonIcon} />
                </a>              
              </div>
            </div>          
          </div>       
      </section>

        <section id="about" className={styles.heroSection2} style={{ paddingTop: '80px' }}>
          <div className={styles.heroContent2}>
            <h2 className={styles.heroTitle2}>{t.heroTitle}</h2>
            <p className={styles.heroText}>{t.p1}</p> 
            <p className={styles.heroText}>{t.p2}</p> 
            <p className={styles.heroText}>{t.p3}</p>
          </div>
        </section>

        <div className={styles.sharedBackgroundSection}>
          
        <section id="features" className={`${styles.videoSection} ${styles.overlayContent}`} style={{ paddingTop: '80px' }}>
          <h2 className={styles.sectionTitle}>{t.features}</h2>
          <div className={styles.featureGrid}>
          {[
    {
      icon: <ClipboardPlus className={styles.featureIcon} />,
      title: t.repertoire,
      text: "Recolha cuidadosa do sintoma ou doença visando o seu alívio e cura",
      subject: "Consulta de Psiquiatria",
      message: "Gostaria de marcar uma consulta de Psiquiatria.(DEIXE O SEU CONTACTO TELEFÓNICO SFF)"
    },
    {
      icon: <Armchair className={styles.featureIcon} />,
      title: t.flexibleHours,
      text: "Tomar conhecimento psicodinâmico para obter estabilidade emocional. Difere da consulta de psiquiatria pelo forma de acompanhamento",
      subject: "Consulta de Psicoterapia",
      message: "Gostaria de marcar uma sessão de Psicoterapia. (DEIXE O SEU CONTACTO TELEFÓNICO SFF)"
    },
    {
      icon: <Users className={styles.featureIcon} />,
      title: t.ownEquipment,
      text: "Tratamento em grupo heterogéneo onde o conhecimento inter-pessoal através do olhar e reconhecimento de outros membros é chave, sempre com a interpretação do grupanalista.",
      subject: "Consulta de triagem para Grupanálise",
      message: "Olá, tenho interesse em fazer grupanálise. (DEIXE O SEU CONTACTO TELEFÓNICO SFF)"
    }
  ].map((feature, index) => (
    <div 
  key={index}
  className={styles.featureBox}
  onClick={() => {
    setExpandedFeature(expandedFeature === index ? null : index)
  }}
>
      {feature.icon}
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <div className={`${styles.featureContent} ${expandedFeature === index ? styles.expanded : ''}`}>
        <p className={styles.featureText} style={{ color: 'white' }}>{feature.text}</p>
        <div style={{ marginTop: '20px' }}></div>
        
        <button
          className={styles.bookButton}
          onClick={(e) => {
            e.stopPropagation()
            setFormData(prev => ({
              ...prev,
              subject: feature.subject,
              message: feature.message
            }))
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Marcar
        </button>
      </div>
    </div>
  ))}
          </div>
        </section>

        <section id="contact" className={`${styles.contactSection} ${styles.overlayContent}`} style={{ paddingTop: '80px' }}>
          <h2 className={styles.sectionTitle}>{t.getInTouch}</h2>
          <div className={styles.formContainer}>
            <div className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>{t.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  style={{ border: '1px solid black'}}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>{t.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  style={{ border: '1px solid black' }}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={styles.formInput}
                  style={{ border: '1px solid black' }}
                ></textarea>
              </div>
              <button
                type="button"
                className={styles.submitButton}
                onClick={() => {
                  const subject = formData.subject;
                  const body = encodeURIComponent(`\n${formData.message}\n\nCumprimentos,\n${formData.name}`);
                  window.location.href = `mailto:angela-ribeiro@sapo.pt?subject=${subject}&body=${body}`;
                }}
              >
                {t.sendMessage}
              </button>
            </div>
          </div>
        </section>
        </div>
        <section id="location" className={styles.locationSection} style={{ paddingTop: '80px' }}>
          
          <div style={{ position: 'relative', zIndex: 2}}>
            <h2 className={styles.sectionTitle}>{t.location}</h2>
            <p style={{ color: 'white', fontSize: '1.3rem' }}>{t.address}</p>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.123456789012!2d-9.1381768!3d38.7418947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a44ce293c3%3A0x6e381eb0d4a2f9cd!2sAv.%20de%20Roma%203%2C%201000-191%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2spt!4v1631234567890!5m2!1sen!2spt"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>© 2024 Dra. Ângela Ribeiro. All rights reserved.</p>
          <div className={styles.socialLinks}>
            
          </div>
        </div>
      </footer>
    </div>
  )
}