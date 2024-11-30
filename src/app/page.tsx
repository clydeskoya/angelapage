"use client"

import { useState } from 'react'
import styles from './page.module.css'
import { Mail, Music, Calendar, Guitar, ChevronRight, ChevronLeft, FileText, PhoneCall } from 'lucide-react'
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
      heroText: 'Reconhecemos a necessidade de responder aos pedidos dos nossos pacientes o mais rapidamente possível. Prometemos por isso prestar um serviço eficiente, lidando de forma rápida e rigorosa com as necessidades dos nossos clientes. Tratando de doenças agudas e/ou crónicas, prestamos também cuidados preventivos e educação em saúde para todas as idades e ambos os sexos. A nossa base de conhecimentos continua a expandir-se com os novos avanços na medicina e a nossa promessa é continuar este desenvolvimento para que possamos prestar um diagnóstico eficiente. Continuaremos a trabalhar com os especialistas líderes no sector da psiquiatria de forma a garantir que dispomos do conhecimento e das competências para tratar pacientes com a maior precisão possível. Continuaremos a desafiar-nos com o objetivo último de prestar continuamente serviço de topo aos nossos pacientes.',
      ctaButton: '218 480 046',
      watchVideos: 'Serviços',
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
          {/* <h1 className={styles.header}>João Atalho</h1> */}
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
              <li><a href="#home" className={styles.navLink}>{t.home}</a></li>
              <li><a href="#video" className={styles.navLink}>{t.services}</a></li>
              <li><a href="#contact" className={styles.navLink}>{t.contact}</a></li>
              <li><a href="#location" className={styles.navLink}>{t.location}</a></li>
            </ul>
          </nav>

        </div>
      </header>

      <main>
        <section id="home" className={styles.heroSection}>
          <div className={styles.heroContent} style={{ height: '800px' }}>

            <h2 className={styles.heroTitle}>{t.heroTitle}</h2>
            <p className={styles.heroText}>{t.heroText}</p>
            <a href="mailto:angela-ribeiro@sapo.pt?subject=Agendar%20consultao&body=Olá,%20estou%20interessado%20em%20marcar%20uma%20consulta%20para%20dia%20dd/mm/aaaa%20às%20XX%20horas.%20Tens%20disponibilidade?%0ACumprimentos," className={styles.ctaButton}>
              <PhoneCall className={styles.buttonIcon} />
              {t.ctaButton}
              <ChevronRight className={styles.buttonIcon} />
            </a>
          </div>
        </section>

        <section id="video" className={styles.videoSection}>
          <h2 className={styles.sectionTitle}>{t.watchVideos}</h2>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.featureGrid}>
            <div className={styles.featureBox}>
              <Music className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{t.repertoire}</h3>
              <p className={styles.featureText}>{t.repertoireText}</p>
            </div>
            <div className={styles.featureBox}>
              <Calendar className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{t.flexibleHours}</h3>
              <p className={styles.featureText}>{t.flexibleHoursText}</p>
            </div>
            <div className={styles.featureBox}>
              <Guitar className={styles.featureIcon} />
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
                src="https://www.google.com/maps/place/Av.+de+Roma+3,+1000-191+Lisboa,+Portugal/@38.7418272,-9.1379329,79m/data=!3m1!1e3!4m6!3m5!1s0xd1933a44ce293c3:0x6e381eb0d4a2f9cd!8m2!3d38.7418947!4d-9.1381768!16s%2Fg%2F11c2f1vs_k?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                width="600"
                height="450"
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