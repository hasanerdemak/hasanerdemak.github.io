import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import LightboxImage from "../../assets/components/LightboxImage";
import { Project } from "../../types/types";
import { sleep } from "../../utils/sleep";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  show: boolean;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  show,
}) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  // State for arrow visibility
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [rightArrowVisible, setRightArrowVisible] = useState(false);
  // Refs for drag (click-and-drag scrolling)
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragging = useRef(false);
  const DRAG_THRESHOLD = 5;

  const updateArrowVisibility = () => {
    if (galleryRef.current) {
      const {
        scrollLeft: sLeft,
        scrollWidth,
        offsetWidth,
      } = galleryRef.current;
      setLeftArrowVisible(sLeft > 0);
      setRightArrowVisible(sLeft < scrollWidth - offsetWidth - 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown.current = true;
    dragging.current = false; // reset dragging
    startX.current = e.pageX - (galleryRef.current?.offsetLeft ?? 0);
    scrollLeft.current = galleryRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > DRAG_THRESHOLD) {
      dragging.current = true;
    }
    galleryRef.current.scrollLeft = scrollLeft.current - walk;
    updateArrowVisibility();
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  // Eğer mouse modal dışına çıkarsa, drag durumunu sıfırlıyoruz.
  useEffect(() => {
    const handleWindowMouseUp = () => {
      isDown.current = false;
    };
    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, []);

  const handleScroll = () => {
    updateArrowVisibility();
  };

  useEffect(() => {
    const asyncUpdate = async () => {
      await sleep(10);
      updateArrowVisibility();
    };
    asyncUpdate();
  }, [show, project]);

  const handleScrollLeft = () => {
    galleryRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    galleryRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleImageClick = (img: string) => {
    setLightboxImage(img);
  };

  const handleLightboxClose = () => {
    setLightboxImage(null);
  };

  if (!project) return null;

  return (
    <Modal
      isOpen={show}
      toggle={onClose}
      className="modal-lg project-details-modal"
      backdrop="static"
      scrollable
      centered
    >
      <ModalHeader toggle={onClose}>{project.title}</ModalHeader>
      <ModalBody>
        {/* Ana resim */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="modal-main-image"
          />
        )}

        {/* Proje açıklaması */}
        <p className="modal-description">{project.description}</p>

        {/* Teknolojiler */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="modal-technologies">
            <p>
              <strong>Technologies:</strong>
            </p>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Repo / Download linkleri */}
        <div className="modal-links">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Repo
            </a>
          )}
          {project.downloadLink && (
            <a
              href={project.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download
            </a>
          )}
        </div>

        {/* Ek resimler */}
        {project.detailImages && project.detailImages.length > 0 && (
          <div className="additional-images-section">
            <h3>Additional Images</h3>
            <div className="project-gallery-wrapper">
              {/* Ok düğmelerini, scroll pozisyonuna göre gösteriyoruz */}
              {project.detailImages.length > 3 && leftArrowVisible && (
                <button
                  className="gallery-arrow left"
                  onClick={handleScrollLeft}
                >
                  <i className="fa-solid fa-angle-left" />
                </button>
              )}
              {project.detailImages.length > 3 && rightArrowVisible && (
                <button
                  className="gallery-arrow right"
                  onClick={handleScrollRight}
                >
                  <i className="fa-solid fa-angle-right" />
                </button>
              )}
              <div
                className="project-gallery"
                ref={galleryRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
              >
                {project.detailImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="gallery-item"
                    onClick={(e) => {
                      // Eğer sürükleme gerçekleştiyse tıklama (enlarge) yapılmasın
                      if (dragging.current) {
                        e.preventDefault();
                        return;
                      }
                      handleImageClick(img);
                    }}
                  >
                    <img
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </ModalBody>

      {/* Lightbox (büyütülmüş resim) */}
      {lightboxImage && (
        <LightboxImage
          imagePath={lightboxImage}
          handleLightboxClose={handleLightboxClose}
        />
      )}
    </Modal>
  );
};

export default ProjectDetailsModal;
