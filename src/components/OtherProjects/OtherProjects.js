import uniqid from 'uniqid'
import { otherProjects } from '../../portfolio'
import ProjectContainer from '../OtherProjectsContainer/OtherProjectsContainer'
import './OtherProjects.css'

const Projects = () => (
  <section id='projects' className='section projects'>
    <div className='section__container'>
      <h2 className='section__title'>
        EMBRACING THE <span className='text-primary'>CHALLENGE</span>, <br />{' '}
        FINDING JOY IN <span className='text-primary'>CONTINUOUS</span> PROJECTS
        <hr />
      </h2>
    </div>

    <div className='projects__grid projects__grid_other'>
      {otherProjects.map((project) => (
        <ProjectContainer key={uniqid()} project={project} />
      ))}
    </div>
  </section>
)
export default Projects
