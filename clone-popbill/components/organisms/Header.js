import Styles from './Header.module.css';
import HeaderBtn from '../atoms/HeaderBtn'

const Header = () => {
    return(
        <header className={Styles.header}>
            <div className={Styles.tnb}>
                <div className={Styles.inner + ' inner'}>
                    <div className={Styles.logo}>
                        <a href="/">
                            <img src="/images/common/header/logo.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={Styles.gnb}>
                <div className={Styles.inner + ' inner'}>
                    <nav className={Styles.menu}>
                        <ul>
                            <li><a href="Taxinvoice">전자세금계산서</a></li>
                            <li><a href="Statement">전자명세서</a></li>
                            <li><a href="Cashbill">현금영수증</a></li>
                            <li><a href="HomeTax">홈택스연동</a></li>
                            <li><a href="EasyFin">계좌조회</a></li>
                            <li><a href="#">연동서비스</a></li>
                            <li><a href="#">고객센터</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={Styles.mnb}>
                <div className="inner">
                    <HeaderBtn href="/register" text="회원가입" color="#222" bg="#e7ebef" />
                    <HeaderBtn href="/Member/Login" text="팝빌 로그인" color="#fff" bg="#16416d" />
                </div>
            </div>
        </header>
    )
}

export default Header;