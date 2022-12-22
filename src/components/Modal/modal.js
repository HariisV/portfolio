import React, { useState, useContext } from 'react'
import Modal from 'react-modal'
import './modal.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { GitHub, Launch } from '@material-ui/icons/'
import { ThemeContext } from '../../contexts/theme'

export default function ModalProject({
  modalIsOpen,
  closeModal,
  openModal,
  project,
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  const customStyles = {
    content: {
      overflow: 'hidden',
      top: '50%',
      left: '50%',
      right: '50%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      maxHeight: '95%',
      marginTop: 0,
      marginbottom: 100,
      padding: 300,
    },
  }
  Modal.setAppElement('*')

  const tagToHtml = () => {
    const temp = {
      __html:
        project.descriptionLong.length > 0
          ? project.descriptionLong
          : project.description,
    }
    return temp
  }

  return (
    <div>
      <button onClick={openModal} type='button'>
        <h3>{project.name}</h3>
      </button>
      <Modal
        isOpen={modalIsOpen}
        cont
        onRequestClose={() => closeModal}
        style={customStyles}
        overlayClassName='Overlay'
        contentLabel='Example Modal'
        aria={{
          labelledby: 'heading',
          describedby: 'full_description',
        }}
      >
        <div className={`${themeName} scrollbar`} id='style-3'>
          {isLoading && (
            <div
              className='modal_title modal_skeleton'
              style={{ height: '50vh' }}
            />
          )}
          <Carousel
            showThumbs
            infiniteLoop
            animationHandler
            autoPlay
            emulateTouch
          >
            {project.image.map((img) => (
              <div style={{ display: isLoading ? 'none' : 'block' }}>
                <img
                  src={img}
                  onLoad={() => setIsLoading(false)}
                  className='modal_img'
                  alt=''
                  key={img}
                />
              </div>
            ))}
          </Carousel>
          <div className='container_modal'>
            <h3 className='modal_title'>{project.name}</h3>
            <div className='modal_desc'>
              <div className='modal_desc_item'>
                <p className='modal_desc_item-title'>Base Technologies</p>
                <p className='modal_desc_item-text'>{project.stack[0]}</p>
              </div>
              <div className='modal_desc_item'>
                <p className='modal_desc_item-title'>Date</p>
                <p className='modal_desc_item-text'>{project.date}</p>
              </div>
              <div className='modal_desc_item'>
                <p className='modal_desc_item-title'>Website Link</p>
                <div className='modal_desc_item-icon'>
                  {project.sourceCode && (
                    <p className='modal_desc_item-text'>
                      <a href={project.sourceCode} className='modal_desc_link'>
                        <GitHub />
                      </a>
                    </p>
                  )}
                  {project.livePreview && (
                    <p className='modal_desc_item-text'>
                      <a href={project.livePreview} className='modal_desc_link'>
                        <Launch />
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={tagToHtml()}
              className='modal_project_desc'
            />

            {project.stack && (
              <ul className='skills__list'>
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className='skills__list-item btn btn--plain btn-text-white'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className='modal_footer'>
              <button
                type='button'
                onClick={() => closeModal()}
                className='modal_close skills__list-item btn btn--plain btn-text-white'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
