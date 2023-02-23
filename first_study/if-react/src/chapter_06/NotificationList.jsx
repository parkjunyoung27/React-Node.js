import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
    {
        id : 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id : 2,
        message: "점심식사 시간입니다.",
    },
    {
        id : 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        //사용자는 앞으로 사용할 곳에 State에 넣어서 초기화 
        this.state={
            notifications: [], 
        };
    }
    
    //SetInterval을 넣어서 초기화 업데이트 
    componentDidMount(){
        const { notifications } = this.state;
        timer = setInterval(() => {
            if ( notifications.length < reserveNotifications.length){
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({ // 주목할 부분
                    notifications: notifications,
                });
            }else{
                this.setState({
                    notifications: [], // 마운트가 모두 끝나면 Unmount 됨 
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return( 
                        <Notification 
                            key={notification.id} //react element를 구분하기위해 사용 
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;