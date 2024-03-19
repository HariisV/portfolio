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
          src={project.image?.[0]}
          alt=''
          style={{
            width: '100%',
            height: 230,
            marginBottom: 0,
            padding: 15,
            borderRadius: 20,
          }}
        />
        <div className='project-detail'>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginBottom: 10,
              fontSize: 12,
            }}
          >
            {project?.stack?.map((tech) => (
              <span
                style={{
                  padding: '2px 10px',
                  margin: '0 5px',
                  borderRadius: '100px',
                  backgroundColor: '#f2f2f2',
                  color: '#333',
                  fontSize: 10,
                }}
              >
                {tech}
              </span>
            ))}
          </div> */}
          <ModalProject
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            openModal={() => setIsOpen(true)}
            project={project}
            closeModal={() => setIsOpen(false)}
          />
          <p className='project__description'>{project.description}</p>

          <ul className='project__stack'>
            {project?.stack?.map((tech) => (
              <li className='project__stack-item'>{tech}</li>
            ))}
          </ul>

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
