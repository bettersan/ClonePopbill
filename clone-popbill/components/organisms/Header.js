import Styles from './Header.module.css';
import HeaderBtn from '../atoms/HeaderBtn'

const Header = () => {
    return(
        <header className={Styles.header}>
            <div className={Styles.tnb}>
                <div class={Styles.inner + ' inner'}>
                    <HeaderBtn text="팝빌 로그인" href="" txtColor="#fff" bgColor="#16416d" />
                    <HeaderBtn text="회원가입" href="" txtColor="#ff0000" bgColor="#ddd" />
                </div>
            </div>
            <div className={Styles.gnb}>
                <div class={Styles.inner + ' inner'}>
                    <div className={Styles.logo}>
                        <a href="/">
                            <img src="/images/common/header/logo.png" />
                        </a>
                    </div>
                    <nav className={Styles.menu}>
                        <ul>
                            <li><a href="Taxinvoice">전자세금계산서</a></li>
                            <li><a href="Statement">전자명세서</a></li>
                            <li><a href="Cashbill">현금영수증</a></li>
                            <li><a href="#">홈택스연동</a></li>
                            <li><a href="#">계좌조회</a></li>
                            <li><a href="#">연동서비스</a></li>
                            <li><a href="#">고객센터</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={Styles.member}>
                <div className="inner">

                </div>
            </div>
        </header>
    )
}

export default Header;