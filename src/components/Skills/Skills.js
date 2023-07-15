import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills skill_container' id='skills'>
      <div className=''>
        <h2 className='section__title'>
          I got the <span className='text-primary'>experience</span>. Here is my
          toolbelt for <span className='text-primary'>success</span>.
          <hr className='hr__primary' />
        </h2>
      </div>
      <ul className='skills__list skills__list_lp'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item '>
            <div className=''>
              <img src={skill.image} alt='html' width={40} height={40} />
            </div>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
