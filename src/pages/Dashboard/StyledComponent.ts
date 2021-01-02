import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #f7f5f6;
  margin:5%;
  border-radius: 2%;
`;

export const ListElementContainer = styled.div`
  border-bottom: 1px solid #a8a7a8;
  display:flex;
  padding: 2%;
  align-items: center;
`;

export const RankElement = styled.div`
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background-color: #8eb9f5;
  margin-right: 10px;
`;

export const PictureElement = styled.div`
  background-color: #a8a7a8;
  background-size: 100%;
  width: 30px;
  height: 30px;
  border-radius: 18px;
  margin-right: 10px;
`;

export const NameElement = styled.div`
  text-align: left;
`;

export const ScoreContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ScoreElement = styled.div`
  color:#e46a86;
`;