import React from "react";
import GraphBlock from './GraphBlock';
import InfoBlock from './InfoBlock';
import styled from '@emotion/styled';
import { numberWithSpaces } from "../common/utils";


interface State {
    firstGraph: number[];
    secondGraph: number[];
}

const DashboardBlock = styled.div`
    display: flex;
    background-color: #F1F4F8;
    flex-direction: column;
    flex: 5;
`;

const HeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 10px;
`;

const Search = styled.form`
    background: #FFFFFF;
    border-radius: 67px;
    display: flex;
    justify-items: flex-start;
    width: 500px; 
    /* width: 40%; */
    padding: 0 15px;
    margin-left: 30px;
    height: 43px;
`;

const SearchInput = styled.input`
    border: none;
    margin: 10px 5px;
    width: 500px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;

const UserBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 43px;
`;

const Notifications = styled.div`
    padding: 8.5px 15px 8.5px 12px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserName = styled.div`
    font-size: 12px;
    line-height: 17px;
    text-align: right;
    color: #000000;
    padding: 0 10px 4px 15px;
`;

const UserIcon = styled.div`
    margin-right: 30px;
`;

const GraphRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
    /* justify-content: space-evenly; */
`;

const InfoRow = styled.div`
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    height: 230px;
    gap: 20px;
`;

const Column = styled.div`
    /* flex: 1; */
`;
class Dashboard extends React.Component<{}, State> {

    state = {
        firstGraph: this.getRandArray(),
        secondGraph: this.getRandArray(),
    };

    private getRandArray(): number[] {

        let result = [];

        for (let index = 0; index < 7; index++) {
            // для честной генерации случайных значений от 1000 до 5000 откомментировать строку 120 и закомментировать строку 122:
            // result.push( Math.random() * 4000 + 1000 ); 
            // чтобы чаще видеть смену иконки, искусственно снизим вероятность получения суммы выручки выше 15000 (точки отсчета): 
            result.push( (Math.random() * 4000 + 1000) - Math.random() * 1000 ); 
        }

        return result;
    }

    public render(): JSX.Element {

        setTimeout(() => {
            this.setState({
                firstGraph: this.getRandArray(),
                secondGraph: this.getRandArray(),
            })
        }, 3000);

        return (
            <DashboardBlock>
                <HeaderRow>
                    <Search>
                        <img src="/search.svg"/>
                        <SearchInput placeholder="Поиск клиента" />
                    </Search>
                    <UserBlock>
                        <Notifications>
                            <img src="/notifications.png"/>
                        </Notifications>
                        <UserName>Alexander Gerasimuk</UserName>
                        <UserIcon>
                            <img src="/users/user1.svg"/>
                        </UserIcon>
                    </UserBlock>
                </HeaderRow>
                <GraphRow>
                    <GraphBlock
                        sumLabel={"Выручка:"}
                        sumValue={ numberWithSpaces( Math.round(this.state.firstGraph.reduce((a, b) => a + b, 0)) )}
                        logo={"/logo1.svg"}
                        // по данным графика 19000 это плюс 5 процентов, а 11000 это минус 5 процентов. из этого находим, что отсчет ведется от 15000 
                        growth={ ((this.state.firstGraph.reduce((a, b) => a + b, 0)) - 15000) > 0 }
                        percent={ Math.round(Math.abs(((this.state.firstGraph.reduce((a, b) => a + b, 0)) - 15000) / 800)) }
                        data={this.state.firstGraph}
                    />
                    <GraphBlock
                        sumLabel={"Выручка:"}
                        sumValue={ numberWithSpaces( Math.round(this.state.secondGraph.reduce((a, b) => a + b, 0)) )}
                        logo={"/logo2.svg"}
                        growth={ ((this.state.secondGraph.reduce((a, b) => a + b, 0)) - 15000) > 0 }
                        percent={ Math.round(Math.abs(((this.state.secondGraph.reduce((a, b) => a + b, 0)) - 15000) / 800)) }
                        data={this.state.secondGraph}
                    />
                </GraphRow>
                <InfoRow>
                    <Column>
                        <InfoBlock icon={"/info/info1.svg"} label={"Количество учеников:"} value={250} extended={[["За последнюю неделю", 25],["Без абонемента", 150],["Неактивные", 25],["Добавлено за день", 50]]}/>
                    </Column>

                    <Column>
                        <InfoBlock icon={"/info/info2.svg"} label={"Должников:"} value={12} altValue={"1 850,5"}/>
                        <InfoBlock icon={"/info/info3.svg"} label={"К оплате сегодня:"} value={121} />
                    </Column>

                    <Column>
                        <InfoBlock icon={"/info/info4.svg"} label={"Без абонемента:"} value={30} />
                        <InfoBlock icon={"/info/info5.svg"} label={"К оплате завтра:"} value={32} />
                    </Column>

                    <Column>
                        <InfoBlock icon={"/info/info6.svg"} label={"Количество тренеров:"} value={250} />
                        <InfoBlock isButton icon={"/buttonicon.svg"} label={"Получить выписку по зарплате тренеров"} />
                    </Column>
                </InfoRow>
            </DashboardBlock>
        );
    }
}

export default Dashboard;

        