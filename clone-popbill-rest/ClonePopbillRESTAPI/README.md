# STUDY AWS

---

## 무엇을.
개인 프로젝트 배포/운영

---

## 어떻게.
1. JAVA Spring
2. AWS   
    EC2 생성
3. Git   
    자동배포    
    젠킨스 연동 방법 https://kingofbackend.tistory.com/141

---

## 지금까지 해낸것.
1. 운영체제는 Amazon Linux 2 AMI (HVM) - Kernel 4.14, SSD Volume Type
2. 키페어 생성 (putty, puttyGen 필요)
3. putty 접속 https://sujinisacat.tistory.com/17
4. Root계정 활성화 https://goddaehee.tistory.com/193
5. 자바 설치 (openJDk 1.8.0)
6. 톰캣 설치 https://skd03052.tistory.com/236 -> 그냥 yum으로 깔음   
7. EC2 인바운드 포트 개방
8. GIT 설치
9. Jenkins 설치(9090) http://blog.illunex.com/201207-2/   
     sudo amazon-linux-extras install epel
    아나.. 포트변경안되서 삽질했는데 생각해보니 인바운드 열어줘야됐음..   
    https://velog.io/@gahae37/Jenkins-%EC%82%AC%EC%9A%A9%EB%B2%95



---

## 그다음 스탭에 해낼것.
Jenkins 연동   
DB 연동 (mysql???)
postgre





---

## 물어볼것 || 알아볼것 


---

## 보여줄것
일단 도쿄에다가 서버 셋팅 해놓고 스터디때는 서울에다가 보여주기

---

## 나를 위한 메모   

> 1.  톰캣   
>  톰캣 실행 명령어 = service tomcat start    
> 2. 리눅스   
>   source 명령어   
    https://klero.tistory.com/entry/source-%EB%AA%85%EB%A0%B9%EC%96%B4%EB%9E%80   
>   IP 확인 명령어 = hostname -I   
>   tar 압축풀기    
    https://nota.tistory.com/53   
>   파일 찾기 = find . -name "파일명"
>   디렉토리 삭제 = rm -rf "디렉토리명"

> 3. 마크다운   
>   마크다운 문법    
    https://gist.github.com/ihoneymon/652be052a0727ad59601
> 4. GIT    
   git config 설정 하는방법 https://webisfree.com/2018-07-26/git-config-%EC%84%A4%EC%A0%95-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0
   

> 5. JENKINS   
    https://chinggin.tistory.com/397   
    https://krksap.tistory.com/1806

> 6. 조성일 / REACT NATIVE / DBeaver / REST API / POSTMAN / 노마드코더 / whimsical