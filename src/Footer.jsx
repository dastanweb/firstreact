import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h3>О нас</h3>
              <p>
                Мы - команда разработчиков, которая создает удивительные
                приложения для веба.
              </p>
            </div>
            <div className="footer-column">
              <h3>Ссылки</h3>
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="/about">О нас</a>
                </li>
                <li>
                  <a href="/contact">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Подписка на новости</h3>
              <form>
                <input type="email" placeholder="Введите ваш email" />
                <button type="submit">Подписаться</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
