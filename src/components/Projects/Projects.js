import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <div className='section__container'>
        <h2 className='section__title'>
          Every project is a <span className='text-primary'>challenge</span>,
          <br /> a chance to <span className='text-primary'>learn</span>{' '}
          something new.
          <hr />
        </h2>
      </div>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
