import React from 'react'
import Rodal from 'rodal'

const Modal = ({children,onClose,visible}) => {
  return (
    <div>
        <Rodal
          visible={visible}
          onClose={onClose}  >
          <div>{children}</div>
        </Rodal>
    </div>
  )
}

export default Modal
