import {createContext} from 'react';

// 다른 파일과 구분하기 위해 디렉터리를 만듬

const ColorContext = createContext({ color: 'black' }); //안에 consumer가 들어있다 

export default ColorContext;

