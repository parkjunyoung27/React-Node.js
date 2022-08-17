import {createContext} from 'react';

// 다른 파일과 구분하기 위해 디렉터리를 만듬

const ColorContext = createContext({ color: 'black' });

export default ColorContext;

