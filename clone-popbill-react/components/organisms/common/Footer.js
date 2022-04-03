import Styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={Styles.footer}>
            <div className="inner">
                <div className={Styles.copyright}>
                    <p>
                        <span>(주)링크허브</span>
                        <span>대표자 : 이형국 </span>
                        <span>사업자등록번호 : 679-87-00433</span>
                        <span>통신판매번호 : 북구-0799</span>
                        <span>개인정보관리 : <span>privacy@linkhubcorp.com </span></span>
                    </p>
                    <p>
                        <span>고객센터</span>
                        <span>1599-7709</span>
                        <span>팩스</span>
                        <span>02-6442-9700</span>
                        <span>이메일</span>
                        <span>popbill@linkhubcorp.com</span>
                        <span>광주 북구 하남대로 705, LS빌딩 4층</span>
                    </p>
                    <p>Copyright LinkHub. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
