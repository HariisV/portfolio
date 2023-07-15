import { Email, WhatsApp } from '@material-ui/icons'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact_container'>
        <a href={`mailto:${contact.email}`}>
          <div type='button' className='btn btn--outline contact_item'>
            <Email />
            <p>hariswh9@gmail.com</p>
          </div>
        </a>
        <a href='https://wa.me/6282288855562'>
          <div type='button' className='btn btn--outline contact_item'>
            <WhatsApp />
            <p>+62 82288855562</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact
