import Button from "../button/button.component";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./image-link-form.styles.scss";

const ImageLinkForm = ({ onPictureSubmit, ...otherProps }) => {
  return (
    <div className="image-link">
      <h3 className="image-link__title">
        This Magic Robot will detect faces in your pictures. Give it a try.
      </h3>
      <div className="image-link__container">
        <input className="image-link__container__input" placeholder="Enter an image address" {...otherProps} />
        <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.signup} onClick={onPictureSubmit}>
          Detect
        </Button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
