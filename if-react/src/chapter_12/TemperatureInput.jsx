// 온도 측정방법 종류
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

// 온도 입력 함수 
function TemperatureInput(props){
    
    const handleChange = (event) => { // 바뀔때마다 //중요
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}) :
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;