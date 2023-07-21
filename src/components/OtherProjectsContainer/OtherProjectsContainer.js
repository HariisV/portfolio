import React from 'react'
import './OtherProjectsContainer.css'
import LaunchIcon from '@material-ui/icons/Launch'

const OtherProjectsContainer = ({ project }) => (
  <>
    <div className=' other_project'>
      <img src={project.image[0]} alt='' className='other_project__image' />
      <div className='project-detail project-detail_other'>
        <div className='project__container-title_other'>
          <h3 className='project__title_other'>{project.name}</h3>

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
        <p className='project__description project__description_other'>
          {project.description}
        </p>
        <p className='project__description project__tech_other'>
          {project.stack?.map((tech) => (
            <span key={tech} className='project__tech'>
              {tech}

              {tech !== project.stack[project.stack.length - 1] && (
                <span>{' • '}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  </>
)

export default OtherProjectsContainer
