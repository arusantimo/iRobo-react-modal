#iRobo react-modal

아이로보의 간단한 모달 컴퍼넌트 입니다.
Simple modal component for React.JS

### 설치 Installation

```
npm install --save react-modal
```

### 사용방법 Usage

```
<IRoboModal
  isOpen={boolean}
  isWidth={widthValue}
  isHeight={heightValue}
  bgColor={colorValue}
>
{content}
</IRoboModal>
```

### 예시 Example

```
constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    })
  }

  render() {
    return (
      <div>
        <span
          onClick={() => this.toggleModal()}
          className="btn"
        >
          팝업 열기
        </span>
        <IRoboModal
          isOpen={this.state.isModalOpen}
          isWidth={400}
          isHeight={500}
          bgColor={'#fff'}
        >
          <div>팝업 내용은 자유롭게</div>
          <span 
            className="btn"
            onClick={() => this.toggleModal()}
          >
            팝업 닫기
          </span>
        </IRoboModal>
      </div>
    );
  }
```