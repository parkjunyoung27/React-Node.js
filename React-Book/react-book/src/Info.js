import {useState, useEffect } from 'react';

const Info = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=> { // componentDidMount(랜덤 후 실행할 것)와 componentDidUpdate(업데이트할 것)를 합친 형태
        console.log('effect');
        return () => {
            console.log('unmount');
        };
    },[]); // 이름이 바뀔때만  

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )

}

export default Info;