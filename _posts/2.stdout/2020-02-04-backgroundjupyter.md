---
# title: 
# tags : -
category: stdout
toc: false
notice: false
---

# 2020-02-04-backgroundjupyter

# 콘솔창없이 jupyter notebook(Lab) 사용하기

**구성환경**

windows10, anaconda3, jupyter lab

## 바로가기를 생성

항목 위치 입력 란에 다음과 같이 입력해준다.

![image0_Untitled](/assets/img/2020-02-04-backgroundjupyter/Untitled.png)

link

```bash
%USERPROFILE%\Anaconda3\pythonw.exe %USERPROFILE%\Anaconda3\cwp.py %USERPROFILE%\Anaconda3 %USERPROFILE%\Anaconda3\pythonw.exe %USERPROFILE%\Anaconda3\Scripts\jupyter-lab-script.py "%USERPROFILE%\jupyter notebook" --port=8889
```

pythonw는 python을 콘솔창없이 실행해주는 프로그램같다. 위와 같은 바로가기를 만들어주면 백그라운드에서 jupyter lab이 [자신계정경로]notebook 폴더에서 실행된다. 만약 콘솔창에서 보고싶으면 pythonw.exe를 python.exe으로 수정한다.

%USERPROFILE% 이라는 환경 변수는 윈도위 사용자 경로 == `C:\Users\****\`

**jupyter notebook 사용자**라면 위 경로에서 `jupyter-lab-script.py` -> `jupyter-notebook-script.py`

## 종료하는 배치파일 만들기

백그라운드에서 돌고 있는 pythonw를 종료하고 싶으면 배치파일을 생성해주면 된다.

***.bat 이라는 배치파일을 만들고 다음과 같은 cmd 명령어를 저장한다.

```powershell
taskkill /pid pythonw.exe /f
```

`taskkill` 명령어는 윈도우 process 를 종료시켜준다. 단, `pythonw.exe` 라는 모든프로세스를 종료시키므로 다른 작업중이라면 주의해야한다.

## 윈도우 실행시 자동으로 시작

실행에서 ’작업 스케줄러’를 실행한다.

작업 스케줄러 라이브러리에서 ’새작업 만들기’를 누른다.

![image1_Untitled 1](/assets/img/2020-02-04-backgroundjupyter/Untitled 1.png)

taskscheduler

일반 탭에서 이름을 입력한다.

![image2_Untitled 2](/assets/img/2020-02-04-backgroundjupyter/Untitled 2.png)

taskscheduler1

트리거 탭에서 새로만들기를 누르고 작업시작은 ’로그온 할때’로 하고, 고급설정에서 사용을 체크한다.

![image3_Untitled 3](/assets/img/2020-02-04-backgroundjupyter/Untitled 3.png)

taskscheduler2

동작 탭에서 새로만들기를 누르고 동작은 프로그램 시작, 프로그램/스크립트는 다음과 같고,

```powershell
%USERPROFILE%\Anaconda3\pythonw.exe
```

인수는 다음과 같이 입력한다.

```powershell
%USERPROFILE%\Anaconda3\cwp.py %USERPROFILE%\Anaconda3 %USERPROFILE%\Anaconda3\pythonw.exe %USERPROFILE%\Anaconda3\Scripts\jupyter-lab-script.py --no-browser --notebook-dir="%USERPROFILE%\jupyter notebook" --port=8889
```

![image4_Untitled 4](/assets/img/2020-02-04-backgroundjupyter/Untitled 4.png)

taskscheduler3

이렇게 하면 윈도우 시작하고 주피터 lab이 자동으로 실행된다. (시작하고 조금 있어야 실행)

참고 : http://nathanielobrown.com/blog/posts/directions_for_running_jupyter_in_the_background_on_windows.html

참고로, 만들어놓은 바로가기 파일을 시작메뉴에 넣는 방법도 있다.