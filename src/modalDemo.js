import { Button, Modal } from "antd-mobile";
import React from "react";
import "./styles.css";

export class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false
    };
  }
  showModal = (key) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true
    });
  };
  onClose = (key) => () => {
    this.setState({
      [key]: false
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.showModal("modal1")}>open Modal</Button>
        <Modal
          visible={this.state.modal1}
          transparent={true}
          // 点击蒙尘可以关闭该提示框
          maskClosable={true}
          onClose={this.onClose("modal1")}
          title={"this is a test modal"}
          // footer = {[
          //   {
          //     text:'确定1',
          //     onPress:() => {
          //       console.log('确定1');
          //       // 关闭该modal
          //       this.onClose('modal1')();
          //     }
          //   },
          //   {
          //     text:'确定2',
          //     onPress:() => {
          //       console.log('确定2');
          //       // 关闭该modal
          //       this.onClose('modal1')();
          //     }
          //   }
          // ]}
          afterClose={() => {
            console.log("afterColse");
          }}
        >
          <div style={{ height: 200 }}>
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
          </div>
          <Button type={"primary"} onClick={this.onClose("modal1")}>
            close Modal
          </Button>
        </Modal>
      </div>
    );
  }
}
