import React from 'react'
import './ProjectContainer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import ModalProject from '../Modal/modal'

const ProjectContainer = ({ project }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className='project'>
        <img
          src={project.image[0]}
          alt=''
          style={{
            width: '100%',
            height: 230,
            marginBottom: 20,
            // objectFit: project.isMobile ? 'contain' : 'unset',
          }}
        />
        <div className='project-detail'>
          <ModalProject
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            openModal={() => setIsOpen(true)}
            project={project}
            closeModal={() => setIsOpen(false)}
          />
          <p className='project__description'>{project.description}</p>
          <div className='project__detail'>
            <div className='project__detail-button'>
              <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='skills__list-item btn btn--plain button__detail'
              >
                detail projects
              </button>
            </div>
          </div>

          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
          )}

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
      </div>
    </>
  )
}

export default ProjectContainer
