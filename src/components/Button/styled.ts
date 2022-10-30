import styled from 'styled-components';

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 9px 36px;
    background-image: linear-gradient(45deg, #ff512f 0%, #f09819 50%);
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.5s;
    cursor: pointer;
    border: none;

    &:disabled {
        pointer-events: none;
        cursor: not-allowed;
        background-image: unset;
        background-color: lightgray;
    }

    &:hover {
        box-shadow: rgba(218, 115, 59, 0.5) 0 1px 30px;
    }
`;
