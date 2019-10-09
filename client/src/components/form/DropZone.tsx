import React, { PureComponent } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

interface Props {
  name: string
  onChange: Function,
  customHeight?: boolean
}

class DropZoneField extends PureComponent<Props> {
  static defaultProps = {
    customHeight: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(file: File[]) {
    const { onChange } = this.props;
    onChange(file.map(fl => Object.assign(fl, {
      preview: URL.createObjectURL(fl),
    })));
  }

  removeFile(e) {
    const { onChange } = this.props;
    e.preventDefault();
    onChange();
  }

  render() {
    const {
      customHeight, name,
    } = this.props;


    return (
      <div className={`dropzone dropzone--single${customHeight ? ' dropzone--custom-height' : ''}`}>
        <Dropzone
          accept="image/jpeg, image/png"
          name={name}
          multiple={false}
          onDrop={(fileToUpload) => {
            this.onDrop(fileToUpload);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone__input">
              <div className="dropzone__drop-here">
                <span className="lnr lnr-upload" /> Drop file here to upload
              </div>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}

const renderDropZoneField = (props) => {
  const { input, customHeight } = props;
  return (
    <DropZoneField
      {...input}
      customHeight={customHeight}
    />
  );
};

renderDropZoneField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  customHeight: PropTypes.bool,
};

renderDropZoneField.defaultProps = {
  customHeight: false,
};

export default renderDropZoneField;
