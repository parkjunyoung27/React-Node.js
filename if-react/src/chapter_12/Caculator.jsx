import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){ // 섭씨 100도 이상이면
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit){ //화씨 계산
    return ((fahrenheit - 32) * 5 ) / 9;
}

function toFahrenheit(celsius){ //섭씨 계산
    return (celsius * 9) / 5 +32;
}

function tryConvert(temperature, convert){ 
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input); // 계산 
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props){ //온도 저장 
    const [ temperature, setTemperature ] = useState(""); //기본값 빈값 //1 
    const [scale, setScale] = useState("c"); // 기본값 c

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature); //1
        setScale("c"); //c
    };

    //같은 상태값을 쓰고있어서 같이 이용 
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature; //화씨면 tryConvert(섭씨교환함수) // 아니면 그냥 섭씨

    const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature; //섭씨면 tryCOnvert(화씨교환함수) // 아니면 화씨

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}
export default Calculator;

