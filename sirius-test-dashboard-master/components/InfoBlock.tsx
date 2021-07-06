import React from "react";
import styled from '@emotion/styled';


interface Props {
    icon: string;
    label: string;
    isButton?: boolean;
    value?: number;
    altValue?: string;
    extended?: Array<[ string, number ]>
}

const ExtendedListLine = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
`;

const ExtendedProperty = styled.div`
    font-size: 13px;
    line-height: 19px;
    color: #000000; 
    opacity: 0.5;
    white-space: nowrap;
`;

const ExtendedValue = styled.div`
    font-size: 13px;
    line-height: 100%;
    color: #000000;
`;

interface StatsBlockProps {
    background: string;
    height: string;
}

interface LabelProps {
    fontWeight: string;
    color: string;
    opacity: number;
}

const StatsBlock = styled.div`
    width: 277.5px;
    display: flex;
    flex-direction: column;
    background: ${(props: StatsBlockProps) => props.background};
    justify-content: flex-end;
    /* flex: 1; */
    padding: 15px;
    margin-top: 20px;
    height: ${(props: StatsBlockProps) => props.height};
`;

const InfoData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InfoIcon = styled.div`
    margin: 10px;
`;

const InfoDataText = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.div`
    font-size: 13px;
    line-height: 19px;
    font-weight: ${(props: LabelProps) => props.fontWeight};
    color: ${(props: LabelProps) => props.color};
    opacity: ${(props: LabelProps) => props.opacity};
`;

const Row = styled.div`
    display: flex;
`;

const Value = styled.div`
    font-size: 26px;
    line-height: 38px;
    color: #000000;
`;

const Currency = styled.div`
    color: #000000;
    font-size: 18px;
    line-height: 40px;
    padding-left: 5px;
`;

const ExtendedList = styled.div`
    padding: 10px;
`;

const Dots = styled.div`
    border-bottom: dotted 2px black;
    float: left;
    position: relative;
    display: block;
    height: 12px;
    opacity: 0.2;
    margin: 0 10px;
    flex-grow: 2;
`;

const InfoBlock = (props: Props): JSX.Element => {

    const extendedList = (
        props.extended && (
            <ExtendedList>
                {props.extended.map((element: [string, number]) => {
                    return (
                        <ExtendedListLine key={element[0]}>
                            <ExtendedProperty>{element[0]}</ExtendedProperty>
                            <Dots />
                            <ExtendedValue>{element[1]}</ExtendedValue>
                        </ExtendedListLine>
                    );
                })}
            </ExtendedList>
        )
    );

        return (
            <StatsBlock
                background={props.isButton ? "#2E71F3" : "#FFFFFF"}
                height={props.extended ? "230px" : "105px"}
            >
                <InfoData>
                    <InfoIcon>
                        <img src={props.icon}/>
                    </InfoIcon>
                    <InfoDataText>
                        <Label
                            fontWeight={props.isButton ? "500" : "normal"}
                            color={props.isButton ? "#FFFFFF" : "#000000"}
                            opacity={props.isButton ? 1 : 0.5}
                        >
                            {props.label}
                        </Label>
                        <Row>
                            <Value>{props.value}</Value>
                            <Currency>{props.altValue && <div>{`(${props.altValue} руб)`}</div>}</Currency>
                        </Row>
                    </InfoDataText>
                </InfoData>
                {extendedList}
            </StatsBlock>
        );
}

export default InfoBlock;
