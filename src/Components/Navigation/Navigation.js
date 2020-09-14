import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { connect } from "react-redux";
import authActions from "../../redux/auth/authActions";

function Navigation({ isAuth, onLogout }) {

  return (
    <nav>
      <ul className={styles.navigation}>
        {isAuth ? (
          <>
            <li className={styles.navigationItem}>
              <NavLink exact to="/" className={styles.link} activeClassName={styles.linkActive}>
                ДІМ
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink to="/contacts" className={styles.link} activeClassName={styles.linkActive}>
                Контакти
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink
                to="/login"
                className={styles.link}
                activeClassName={styles.linkActive}
                onClick={() => {
                  onLogout();
                }}
              >
                Вийти
              </NavLink>
            </li>
          </>
        ) : (
            <>
              <li className={styles.navigationItem}>
                <NavLink exact to="/" className={styles.link} activeClassName={styles.linkActive}>
                  Дім
              </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink to="/register" className={styles.link} activeClassName={styles.linkActive}>
                  Зареєструватись
              </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink to="/login" className={styles.link} activeClassName={styles.linkActive}>
                  Вхід
              </NavLink>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.onAuth.token

});

const mapDispatchToProps = {
  onLogout: authActions.logoutSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
