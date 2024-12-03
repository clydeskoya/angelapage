"use client"

import { useState } from 'react'
import styles from './page.module.css'
import {ChevronRight,PhoneCall, ClipboardPlus, Armchair, Users } from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' })
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [language, setLanguage] = useState('pt')

  const translations = {
    pt: {
      home: 'Sobre',
      services: 'Serviços',
      contact: 'Contactos',
      heroTitle: 'Mais de 30 anos de experiência',
      heroText: 'Como psiquiatra, a minha missão é ajudá-lo(a) a enfrentar os seus problemas. Com experiência no sector público e privado há mais de 30 anos que trato condições como neurose, ansiedade, depressão, vários transtornos de personalidade, entre outras. Com um olhar sempre atento às suas necessidades e características. O meu compromisso é ajudá-lo a a compreender e controlar as suas emoções, fortalecer sua saúde mental e encontrar equilíbrio. Juntos podemos construir um caminho para uma vida mais tranquila e em plenitude. Conte comigo nessa jornada.',
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
      sendMessage: 'Enviar Mensagem',
      subject: 'Assunto',
      cv: 'CV',
      openPdf: 'Abrir PDF',
      location: 'Localização',
      address: 'Avenida de Roma 3,2°-E 1000-260 Lisboa, Portugal'
    }
  }

  const t = translations[language as keyof typeof translations]
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
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

        </div>
      </header>

      <main>
      <section id="home" className={styles.heroSection}>
          <div className={styles.heroContent}>

            <h2 className={styles.heroTitle}>{t.heroTitle}</h2>
            {/* <p className={styles.heroText}>{t.heroText}</p> */}
            <a href="tel:218480046" className={styles.ctaButton}>
              <PhoneCall className={styles.buttonIcon} />
              {t.ctaButton}
              <ChevronRight className={styles.buttonIcon} />
            </a>
          </div>
        </section>
        <section id="about" className={styles.heroSection}>
          <div className={styles.heroContent}>

            <h2 className={styles.heroTitle}>{t.heroTitle}</h2>
            <p className={styles.heroText}>{t.heroText}</p>
            <a href="tel:218480046" className={styles.ctaButton}>
              <PhoneCall className={styles.buttonIcon} />
              {t.ctaButton}
              <ChevronRight className={styles.buttonIcon} />
            </a>
          </div>
        </section>

        <section id="home" className={styles.heroSection}></section>
        <section id="features" className={styles.videoSection}>
          <h2 className={styles.sectionTitle}>{t.features}</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureBox}>
              <ClipboardPlus className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{t.repertoire}</h3>              <p className={styles.featureText}>{t.repertoireText}</p>
            </div>
            <div className={styles.featureBox}>
              <Armchair className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{t.flexibleHours}</h3>
              <p className={styles.featureText}>{t.flexibleHoursText}</p>
            </div>
            <div className={styles.featureBox}>
              <Users className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{t.ownEquipment}</h3>
              <p className={styles.featureText}>{t.ownEquipmentText}</p>
            </div>
          </div>
        </section>



        <section id="contact" className={styles.contactSection}>
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
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>{t.subject}</label>
                <input
                  type="subject"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
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
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button
                type="button"
                className={styles.submitButton}
                onClick={() => {
                  const subject = formData.subject;
                  const body = encodeURIComponent(`\n${formData.message}\n\nCumprimentos,\n${formData.name}`);
                  window.location.href = `mailto:joao.atalho@protonmail.com?subject=${subject}&body=${body}`;
                }}
              >
                {t.sendMessage}
              </button>
            </div>
          </div>
        </section>

        <section id="location" className={styles.locationSection}>
          <h2 className={styles.sectionTitle}>{t.location}</h2>
          <p>{t.address}</p>
          <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.123456789012!2d-9.1381768!3d38.7418947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a44ce293c3%3A0x6e381eb0d4a2f9cd!2sAv.%20de%20Roma%203%2C%201000-191%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2spt!4v1631234567890!5m2!1sen!2spt"
                width="600"                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
        </section>
      </main>

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