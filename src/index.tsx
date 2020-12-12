import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import { Content, Title, Card } from './components';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        This is a work in progress
      </Card>
    </Content>
  </ ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
