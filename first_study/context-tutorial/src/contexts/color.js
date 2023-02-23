import {createContext, useState } from 'react';

// 다른 파일과 구분하기 위해 디렉터리를 만듬

const ColorContext = createContext({
    state : { color: 'black', subcolor: 'red' },
    action: {
        setColor: () => {},
        setSubcolor: () => {}
    }
}); //안에 consumer가 들어있다 

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor } //actions...
    };
    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
