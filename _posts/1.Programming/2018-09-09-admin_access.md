---
title: 명령프롬프트(cmd)
category: Programming
tags:
  - Cmd
  - Bat
---


services.msc

Oracle - 속성 - 수동


수동 실행 프로그램 생성
orcl_start.bat
~~~orcl_start.bat
net start OracleOraDB11g_home1TNSListener
net start OracleServiceORCL
net start OracleDBConsoleorcl
isqlplusctl start
~~~

orcl_start.bat
~~~orcl_start.bat
net start OracleOraDB11g_home1TNSListener
net start OracleServiceORCL
net start OracleDBConsoleorcl
isqlplusctl start
~~~

net user administrator /active:yes

배치파일.bat 관리자권한 자동으로 요청하는법
1)
@echo off
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
    echo 관리 권한을 요청 ...
    goto UACPrompt
) else ( goto gotAdmin )
:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params = %*:"=""
    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs"
    "%temp%\getadmin.vbs"
    rem del "%temp%\getadmin.vbs"
    exit /B
:gotAdmin
pushd "%CD%"
    CD /D "%~dp0"

2)바로 가기 만들기 - 속성 - 관리자 권한


1) 레지스트리편집(위험)
배치파일 실행시 항상 관리자 권한을 주고자 한다면 

HKEY_LOCAL_MACHINE\SOFTWARE\Classes\cmdfile\shell 의 기본값을 runas로 바꿔주시면 됩니다.

 

 

 

레지스트리 편집이 귀찮다면 다음 명령을 실행하면 됩니다.

reg add HKLM\Software\Classes\cmdfile\shell /ve /t REG_SZ /d "runas" /f

 

원상 복구는 다음 명령을 실행하면 됩니다.

reg delete HKLM\Software\Classes\cmdfile\shell /ve /f

 

 

+) UAC 비활성화 하기(설정 GUI가 뜹니다)

UserAccountControlSettings.exe


https://www.clien.net/service/board/lecture/7019757