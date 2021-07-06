import React from "react";
import styled from '@emotion/styled';

interface MenuItem {
    icon: string;
    value: string;
}

const LeftMenu = styled.div`
    display: flex;
    background-color: #FFFFFF;
    height: 100vh;
    flex-direction: column;
    width: 210px;
    /* flex: 1; */
`;

const NavHeader = styled.div`
    display: flex;
    padding: 30px 20px;
    justify-content: space-between;
    height: 129px;
    width: 210px;
`;

const LinkIcon = styled.div`
    align-self: auto;
`;

const IconWrapper = styled.div`
    margin-left: 30px;
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 30px;
    color: rgba(0, 0, 0, 0.5);
`;

const ActiveNavButton = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 30px;
    background-color: rgba(237, 240, 245, 0.6);
    color: #000000;
    width: -webkit-fill-available;
`;

const ItemIcon = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 15px;
`;

const ItemLabel = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 13px;
    line-height: 19px;
`;

const EasterEgg = styled.div`
    display: flex;
    background: linear-gradient(0deg, #2E71F3, #2E71F3), linear-gradient(180deg, #6B2FEB 0%, #334FFD 100%), #20003E;
    border-radius: 6px 0px;
    width: 3px;
`;

const Row = styled.div`
    display: flex;
`;

const getActiveButton = (element: MenuItem) => {
    return (
        <Row>
            <EasterEgg></EasterEgg>
            <ActiveNavButton>
                <ItemIcon><img src={element.icon}/></ItemIcon>
                <ItemLabel>{element.value}</ItemLabel>
            </ActiveNavButton>
        </Row>
    );
}

const getDefaultButton = (element: MenuItem) => {
    return (
        <NavButton>
            <ItemIcon><img src={element.icon}/></ItemIcon>
            <ItemLabel>{element.value}</ItemLabel>
        </NavButton>
    );
}

const Navigation = (): JSX.Element => {

    const menuLines: MenuItem[] = [
        {
            icon: "/menu/item1.svg",
            value: 'Занятия'
        },
        {
            icon: "/menu/item2.svg",
            value: 'Учащиеся'
        },
        {
            icon: "/menu/item3.svg",
            value: 'Тренеры'
        },
        {
            icon: "/menu/item4.svg",
            value: 'Финансы'
        },
        {
            icon: "/menu/item5.svg",
            value: 'Абонементы'
        },
        {
            icon: "/menu/item6.svg",
            value: 'Доступ в CRM'
        },
        {
            icon: "/menu/item7.svg",
            value: 'Рассылки'
        },
        {
            icon: "/menu/item8.svg",
            value: 'Отчеты'
        },
        {
            icon: "/menu/item9.svg",
            value: 'Настройки'
        },
    ];

    const activeButtonLabel = "Учащиеся";

    return (
        <LeftMenu>
            <NavHeader>
                <IconWrapper><img src="/mainlogo.svg"/></ IconWrapper>
                <LinkIcon>
                    <img src="/linkicon.svg" />
                </LinkIcon>
            </NavHeader>
            <NavMenu>
                {menuLines.map((element: MenuItem) => (
                    <div key={element.value}>
                        { element.value === activeButtonLabel
                            ? getActiveButton(element)
                            : getDefaultButton(element) }
                    </div>
                ))}
            </NavMenu>
        </LeftMenu>
    );
}

export default Navigation;
