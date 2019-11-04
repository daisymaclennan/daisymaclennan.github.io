import Layout from '../../components/Layout'
import ExpandingSections from '../../components/ExpandingSections'
import Projects from '../../components/Projects'
import myWork from '../../static/myWork'
import React, {useState} from 'react'

import Slider from "react-slick"

import Lightbox from 'react-image-lightbox'
import LightboxStyle from '../../components/LightboxStyle'

export default () => {
  const [activeDrops, setActiveDrops] = useState([])

  var sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  }

  const [activeImage, setActiveImage] = useState({
    photoIndex: 0,
    isOpen: false
  })
  return(
    <Layout>
      <LightboxStyle />
      <Projects>
        {myWork.map(work => (

          <div className="project" key={work.slug}>
            <h3 className="subheading">
              {work.title}
            </h3>
            <h5>
              {work.time_period}
            </h5>

            <ExpandingSections>
              <div className={`expandingSection`}>
                <button className="link--icon" onClick={(e) => {e.target.classList.toggle("open")}}>
                  Read more
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>
                  <div class='expandingSection--child'>
                    <p>
                      {work.description}
                    </p>
                  </div>
              </div>

              <div className="expandingSection">
                <button className="link--icon" onClick={(e) => {e.target.classList.toggle("open")}}>
                  Gallery
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>
                <div className='expandingSection--child'>
                  <Slider {...sliderSettings}>
                    {work.img.map(i => (
                      <div onClick={() => setActiveImage({photoIndex: i.index,
                                                          project: work.slug,
                                                          isOpen: true })}
                           key={i.index}
                      >
                          <img src={`/static/img/${i.filename}`} alt={`${i.alt}`}/>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </ExpandingSections>
            {activeImage.isOpen && (
              <Lightbox
                mainSrc={`/static/img/${myWork.find(e => e.slug === activeImage.project).img[activeImage.photoIndex].filename}`}
                onCloseRequest={() => setActiveImage({isOpen: false})}
                imageCaption={myWork.find(e => e.slug === activeImage.project).img[activeImage.photoIndex].alt}
                enableZoom={false}
              />
            )}
          </div>
        ))}
      </Projects>
    </Layout>
)
}
