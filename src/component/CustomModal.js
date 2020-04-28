import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from "antd-mobile";
import React from "react";

function closest(el, selector) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      visibleState: false,
    };
  }
  showModal = (key) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  };
  onClose = (key) => () => {
    this.setState({
      visible: false,
    });
  };

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, ".am-modal-content");
    if (!pNode) {
      e.preventDefault();
    }
  };

  render() {
    this.showModal("modal1");
    return (
      <Modal
        visible={this.props.visible}
        transparent
        maskClosable={false}
        title={this.props.title}
        footer={[
          {
            text: "Ok",
            onPress: () => {
              this.props.onClose();
            },
          },
        ]}
        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
      >
        <div>
          <img
            className="card-item-img-icon"
            src={"/images/big/" + this.props.image + ""}
            alt=""
          />
        </div>
      </Modal>
    );
  }
}

export default CustomModal;
