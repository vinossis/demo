import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import close from '../img/close.svg';

class Modal extends PureComponent {
  render() {
    const { onCloseModal, children } = this.props;
    return (
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <div className={styles.modalClose}>
            <img alt="closeIcon" onClick={onCloseModal} src={close} />
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
