import React from "react";
import { Line } from "react-chartjs-2";
import styled from '@emotion/styled';
import { numberWithSpaces } from "../common/utils";

// export enum ActiveRange {
//     Day, Week, Month
// }

interface Props {
    sumLabel: string;
    sumValue: string;
    logo: string;
    growth: boolean;
    percent: number;
    data: Array<number>;
    // activeRange: ActiveRange.Day;
}
interface SwitchItemProps {
    background?: string;
    color?: string;
    border?: string;
    fontWeight?: number;
    // isActive: boolean;
}

const Graph = styled.div`
    /* flex: 1; */
`;

const SwitchRow = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const DaySwitchItem = styled.div`
    display:flex;
    align-items:center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding: 14px;
    margin-right: 10px;
    height: 40px;
    width: 59px;

    background: ${(props: SwitchItemProps) => props.background};
    color: ${(props: SwitchItemProps) => props.color};
    border: ${(props: SwitchItemProps) => props.border};
    font-weight: ${(props: SwitchItemProps) => props.fontWeight};
`;

const WeekSwitchItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding: 14px;
    margin-right: 10px;
    height: 40px;
    width: 71px;

    background: ${(props: SwitchItemProps) => props.background};
    color: ${(props: SwitchItemProps) => props.color};
    border: ${(props: SwitchItemProps) => props.border};
    font-weight: ${(props: SwitchItemProps) => props.fontWeight};
`;

const MonthSwitchItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding: 14px;
    margin-right: 10px;
    height: 40px;
    width:65px;

    background: ${(props: SwitchItemProps) => props.background};
    color: ${(props: SwitchItemProps) => props.color};
    border: ${(props: SwitchItemProps) => props.border};
    font-weight: ${(props: SwitchItemProps) => props.fontWeight};
`;

const ActiveSwitchItem = styled.div`
    display:flex;
    align-items:center;
    border-radius: 4px;
    font-size: 12px;
    padding: 14px;
    margin-right: 10px;
    height: 40px;

    background: #FFFFFF;
    color: #000000;
    border: none;
    font-weight: 500;

`;

const GraphArea = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 575px;
    height: 315px;
`;

const SummaryRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SummaryBlock = styled.div`
    display: flex;
`;

const NetInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const NetValue = styled.div`
    display: flex;
`;

const Currency = styled.div`
    color: #000000;
    font-size: 18px;
    line-height: 40px;
    padding-left: 5px;
`;

const Label = styled.div`
    font-size: 13px;
    line-height: 19px;
    color: #000000;
    opacity: 0.5;
`;

const Value = styled.div`
    font-size: 26px;
    line-height: 38px;
    color: #000000;
`;

const ChangePercent = styled.div`
    font-size: 13px;
    line-height: 19px;
`;

const Increment = styled.div`
    color: rgba(82, 173, 91, 1);
    display: flex;
    margin-top: 22px;
    padding: 10px;
`;

const Decrement = styled.div`
    color: rgba(237, 15, 72, 1);
    display: flex;
    margin-top: 22px;
    padding: 10px;
`;

const GraphContainer = styled.div`
    width: 535px;
    height: 189px;
    margin-top:25px;
`;

const Wrapper = styled.div`
    margin-right: 4px;
`;


const GraphBlock = (props: Props): JSX.Element => {


    const lineChartState = {
        labels: [
            '23 сен', '24 сен', '25 сен', '26 сен', '27 сен', '28 сен', '29 сен'
        ],
        datasets: [
            {
                label: '',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(46, 113, 243, 0.1)',
                borderColor: '#2E71F3',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointHoverBorderColor: "red",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverBorderWidth: 3,
                data: props.data,
            }
        ]
    };

    const iconPath = (
        props.growth ? "/trending-up.svg" : "/trending-down.svg" 
    );

    return (
        <Graph>
            <SwitchRow>
                <DaySwitchItem
                    fontWeight={500}
                    color={'#000000'}
                    background={'#FFFFFF'}
                    border={'none'}
                    // isActive={ActiveRange.Day === props.activeRange}
                    // onClick={}
                >
                    {"День"}
                </DaySwitchItem>
                <WeekSwitchItem
                    // isActive={ActiveRange.Week === props.activeRange}
                >{"Неделя"}</WeekSwitchItem>
                <MonthSwitchItem>{"Месяц"}</MonthSwitchItem>
            </SwitchRow>
            <GraphArea>
                <SummaryRow>
                    <SummaryBlock>
                            <NetInfo>
                                <Label>{props.sumLabel}</Label>
                                <NetValue>
                                    <Value>{props.sumValue}</Value>
                                    <Currency>{" руб."}</Currency>
                                </NetValue>
                            </NetInfo>
                            { props.growth && <Increment>
                                <Wrapper>
                                    <img src={iconPath}/>
                                </Wrapper>
                                <ChangePercent>{props.percent}%</ChangePercent>
                            </Increment> }
                            { !props.growth && <Decrement>
                                <Wrapper>
                                    <img src={iconPath}/>
                                </Wrapper>
                                <ChangePercent>{props.percent}%</ChangePercent>
                            </Decrement> }
                    </SummaryBlock>
                    <div>
                        <img src={props.logo} />
                    </div>
                </SummaryRow>
                <GraphContainer>
                    <Line
                        data={lineChartState}
                        options={{
                            responsive:true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        lineWidth: 0,
                                        zeroLineWidth: 0,
                                        drawBorder: false,
                                        borderDashOffset: 0.0,
                                        tickMarkLength: 0.0,
                                        
                                    },
                                    offset: false,
                                    ticks: {
                                        labelOffset: 20,
                                        padding: 10,
                                        fontFamily: 'Jost',
                                        fontColor: 'rgba(0, 0, 0, 0.5)',
                                    },
                                }],
                                yAxes: [{
                                    gridLines: {
                                        tickMarkLength: 0.0,
                                        zeroLineWidth: 0,
                                        drawBorder: false,
                                    },
                                    ticks: {
                                        fontFamily: 'Jost',
                                        padding: 15,
                                        fontColor: 'rgba(0, 0, 0, 0.5)',
                                        maxTicksLimit: 6,
                                        callback: (value) => (`${value/1000} тыс. ₽`),
                                    }
                                }]
                            },
                            tooltips: {
                                enabled: true,
                                mode: 'index',
                                titleFontSize: 11,
                                titleFontFamily: 'Jost',
                                titleFontStyle: 'normal',
                                titleFontColor: "rgba(0, 0, 0, 0.5)",
                                yPadding: 10,
                                xPadding: 20,
                                backgroundColor: '#FFFFFF',
                                bodyFontSize: 13,
                                bodyFontFamily: 'Jost',
                                bodyFontStyle: 'normal',
                                bodyFontColor: "rgba(0, 0, 0, 1)",
                                displayColors: false,
                                cornerRadius: 0,
                                callbacks: {
                                    title: (tooltipItems) => {
                                        return 'Выручка за ' + tooltipItems[0].label + 'тября: ';
                                    },
                                    label: (tooltipItem) => {
                                        const num = Math.round(tooltipItem.yLabel);
                                        return numberWithSpaces(num) + ' ₽';
                                    }
                                }}
                        }}
                    />
                </GraphContainer>
            </GraphArea>
        </Graph>
    );

}

export default GraphBlock;
