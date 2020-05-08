import Header from './components/Header';
import styles from './index.css';


function BasicLayout(props) {
  let { pathname } = props.location
  let isShowLayout = ['', '/'].indexOf(pathname) > -1
  return isShowLayout ? (
    <div className={styles.normal}>
      <Header />
      <div className={styles.content} id="scrollDom">
        {props.children}
      </div>
      <footer className={styles.footer}><a href="https://juejin.im/user/5b985481f265da0a87264251">徐小夕</a></footer>
    </div>
  ) : props.children;
}

export default BasicLayout;
