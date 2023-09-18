import React from 'react'
import styles from './Footer.module.css'

const icons = [
  {
    id: 'github',
    src: './images/icons/github.png',
    href: 'https://github.com/lickoneyou',
  },
  {
    id: 'facebook',
    src: './images/icons/facebook.png',
    href: 'https://www.facebook.com/richard.durex.5',
  },
  {
    id: 'instagram',
    src: './images/icons/instagram.png',
    href: 'https://www.instagram.com/dick_durex/',
  },
  {
    id: 'linkedin',
    src: './images/icons/linkedin.png',
    href: 'https://www.linkedin.com/in/lickoneyou/',
  },
  {
    id: 'discord',
    src: './images/icons/discord.png',
    href: 'https://discord.com/invite/lickoneyou#1156',
  },
  {
    id: 'telegram',
    src: './images/icons/telegram.png',
    href: 'https://t.me/GoodFellaOnWeek',
  },
]

const Footer = () => {
  return (
    <footer>
      {icons.map((el) => (
        <a href={el.href} key={el.id} target="_blank">
          <img src={el.src} alt={el.id} />
        </a>
      ))}
    </footer>
  )
}

export default Footer
