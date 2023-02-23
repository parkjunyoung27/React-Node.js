import { Component  } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component{
    static contextType = ColorContext; 
    // static contextTYpe을 정의하면 클래스 메서드에서도 Contezt에 넣어 둔 함수를 호출할 수 있다는 장점이 있다.
    // 단점이라면, 한 클래스에서 하나의 Context밖에 사용하지 못한다는 것

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render() {
      return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{ display: 'flex'}}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.handleSetColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            this.handleSetSubcolor(color);
                        }}
                    />
                ))}
            </div>
            <hr/>
        </div>
        );
          
    }
}

export default SelectColors;