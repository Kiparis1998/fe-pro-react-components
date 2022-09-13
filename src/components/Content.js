import React from 'react';
import Article from './Article';

const Content = () => {
  const data = [
    {
      id: 1,
      title: '15 полезных однострочных выражений JavaScript',
      subtitle:
        'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
    },
    {
      id: 2,
      title: 'Полиморфизм простыми словами',
      subtitle:
        'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
    },
    {
      id: 3,
      title: 'Начало работы с Node.js',
      subtitle: 'Node Hero: Глава 1',
    },
    {
      id: 4,
      title:
        'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      subtitle:
        'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
    },
    {
      id: 5,
      title: '8 практичных хитростей веб-разработчика применить немедленно!',
      subtitle:
        'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
    },
    {
      id: 6,
      title: 'Насколько JavaScript сильный?',
      subtitle:
        'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
    },
    {
      id: 7,
      title: 'Изучите CSS-переменные за 5 минут',
      subtitle:
        'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
    },
    {
      id: 8,
      title: 'Создание MEVN-приложения (Часть 1/2)',
      subtitle:
        'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
    },
    {
      id: 9,
      title: 'Реактивность Vue.js',
      subtitle: 'Реактивность фреймворка Vue.js и использование метода Vue.set',
    },
    {
      id: 10,
      title: 'Микроптимизации производительности и JavaScript',
      subtitle:
        'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
    },
    {
      id: 11,
      title: 'Девшахта-подкаст',
      subtitle:
        '#108: Производительность кода — это важнейший критерий качества?',
    },
    {
      id: 12,
      title: 'Одна из самых красивых идей в информатике: Y-Combinator',
      subtitle:
        'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
    },
  ];
  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ul className="list">
            {data.map(({ id, title, subtitle }) => {
              return <Article key={id} title={title} subtitle={subtitle} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Content;
