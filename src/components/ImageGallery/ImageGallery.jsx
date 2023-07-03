import PropTypes from "prop-types";
import css from './ImageGallery.module.scss'

export const ImageGallery = ({children}) => {
    return (
        <ul className={css["imageGallery"]}>
          {children}
        </ul>
    )
  }

export default ImageGallery

ImageGallery.propTypes = {
  children: PropTypes.node
}