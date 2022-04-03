<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>
it was modifed by vim editor <br/>
<br>
deployed in aws's tomcat at 2021-11-29

<br/>
깃허브 깃토큰 발급받는법 : <br/>
github.com/bettersan 우측상단 내 아이콘 클릭 <<br/>
Setting 클릭 > Developers Setting 클릭 > Personal Access Token  클릭 > 토큰 발급받으셈

<br/>
WAR 파일 생성 방법 : <br/>.
STS 에서 maven Build 누르면 target 에 War파일 생성된다. <br/>

git으로 옮긴다음에 (gitWar 폴더에 레포지토리 있슴) <br/>

War 파일을 usr/share/tomcat/webapps 에다가 옮긴다음 <br/>
service tomcat restart 하셈


<br/>
</body>
</html>
