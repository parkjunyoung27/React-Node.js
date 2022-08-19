import { ColorConsumer } from "../contexts/color";


const ColorBox = () => {
    return(
        <ColorConsumer>
            {({ state }) => ( //value를 생략할 수도 있음 
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}        
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;