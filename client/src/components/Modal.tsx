import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { Button, ButtonToolbar, Modal } from 'reactstrap';

interface Props {
  title: string
  message?: string
  color: string
  colored: boolean,
  header: boolean,
  btn: string,
  backdrop: boolean,
  btnStyle?: React.CSSProperties,
  showButtons: boolean
}

interface State {
  modal: boolean
}

class ModalComponent extends PureComponent<Props, State> {
  static defaultProps = {
    title: '',
    message: null,
    colored: false,
    header: false,
    backdrop: false,
    btnStyle: {},
    showButtons: true
  };

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  render() {
    const {
      color, btn, title, message, colored, header, children, backdrop, btnStyle, showButtons
    } = this.props;
    const { modal } = this.state;
    let Icon;

    switch (color) {
      case 'primary':
        Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
        break;
      case 'success':
        Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
        break;
      case 'warning':
        Icon = <span className="lnr lnr-flag modal__title-icon" />;
        break;
      case 'danger':
        Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
        break;
      default:
        break;
    }
    const modalClass = classNames({
      'modal-dialog--colored': colored,
      'modal-dialog--header': header,
      'theme-light': true,
      'ltr-support': true
    });

    const childWithProp = React.Children.map(children, (child: JSX.Element) => {
      return React.cloneElement(child, { toogleModel: this.toggle });
    });


    return (
      <div style={{ flex: 1 }}>
        <Button color={color} onClick={this.toggle} style={btnStyle}>{btn}</Button>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          modalClassName="ltr-support"
          className={`modal-dialog--${color} ${modalClass}`}
          backdrop={backdrop}
        >
          <div className="modal__header">
            <button className="lnr lnr-cross modal__close-btn" type="button" onClick={this.toggle} />
            {header ? '' : Icon}
            <h4 className="text-modal  modal__title" style={{
              color: '#fff'
            }}>{title}</h4>
          </div>
          <div className="modal__body">
            {message || childWithProp}
          </div>
          {showButtons && <ButtonToolbar className="modal__footer">
            <Button className="modal_cancel" onClick={this.toggle}>Cancel</Button>{' '}
            <Button className="modal_ok" outline={colored} color={color} onClick={this.toggle}>Ok</Button>
          </ButtonToolbar>}
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
