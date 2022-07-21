import styled from 'styled-components';
import { TableButton } from '../../atoms/TableButton/TableButton'

export const BtnReview = styled(TableButton)`
    color: #fff;
    background-color: #64AD57;
`;
export const BtnModification = styled(TableButton)`
    background-color: #fff;
    border: 1px solid #E5E5E5;
`;
export const StyledTableContainer = styled.div`
    padding: 40px 40px 0;
`
export const StyledTable = styled.table`
    font-family: 'Noto Sans KR';
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    border-color: #E5E5E5;
`
export const StyledTh = styled.td`
    border: 1px solid #E5E5E5;
    padding: 8px;
    background-color: #F4F6F3;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`
export const StyledTd = styled.td`
    border: 1px solid #E5E5E5;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
`
export const StyledTablePagination = styled.div`
    margin: 60px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`