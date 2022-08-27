# 울산대학교 연구실 홈페이지

본 github 페이지는 Javascript 언어의 장점을 유지하면서 상태관리에 용이한 react 언어를 사용하여 개발되었습니다.   
이후 페이지의 디자인 변경을 위해 파일 내에 간단한 설명을 남겨놓았습니다.


# 홈페이지 변경

JSON 파일을 변경하거나 소스 코드를 직접적으로 변경하는 경우 몇 가지 절차가 필요합니다.   
홈페이지의 변경을 위해 pc에 git을 설치하여 github의 저장소에 코드를 합니다.
파일을 변경하고 git을 이용해 github에 push해야 하는데 이전에는 저장소에 연결만 하면 그냥 push가 가능했습니다.   
하지만 업데이트 후 이전과 달리 github에서 설정이 변경되어 계정에 대한 token을 미리 생성해 놓아야 합니다.   
계정 > setting > developer setting에서 token 생성이 가능합니다.   

아래 순서대로 진행을 하다 github push를 하는 도중 오류가 발생한다면 token이 만료된 것입니다.
이 경우 github에 접속하여 계정 > setting > developer setting 에서 새로운 token을 생성하면 해결됩니다.(token 값은 기억해야 합니다)

환경 구성 방법
---
#### 1. create-react-app이 설치되어 있는 폴더를 준비합니다.
node.js를 먼저 설치해줍니다.   
cmd를 이용해 cra를 설치할 directory로 이동하여 npx를 이용해 cra를 설치해줍니다.
<pre>
node --version                # node.js가 잘 설치되었는지 확인
cd [cra를 설치할 directory]   # 설치할 경로로 이동
npx create-react-app .        # 현재 directory(.)에 cra를 설치
npm run start                 # cra가 잘 설치되었는지 확인
</pre>

#### 2. github(여기)에서 cscUOU.github.io의 파일들을 다운로드 하여 해당 폴더의 파일과 교체해 줍니다.
github를 이용하기 위해서는 git을 먼저 설치해줍니다.   
cmd를 이용해 cscUOU.github.io의 파일들을 다운로드합니다.   
설치한 cra에 파일들을 붙여넣기(덮어쓰기) 합니다.   
이후 필요한 패키지를 설치한 후 cra를 실행하여 정상적으로 홈페이지가 로드되는지 확인합니다.
<pre>
git --version                                                             # git 설치 확인
git clone https://github.com/cscUOU/cscUOU.github.io.git                  # git storage의 파일들을 다운로드

# clone한 파일들을 위 cra를 설치한 폴더에 붙여넣기(덮어쓰기)를 한 후...

npm install antd                                                          # 필요 패키지 설치1
npm install gh-pages --save-dev                                           # 필요 패키지 설치2
npm run start                                                             # cra를 실행하여 정상적으로 동작하는지 확인
</pre>


홈페이지 변경 후 적용 방법
---
#### 1. 필요한 부분의 파일을 변경해줍니다.
ex> people변경, publication추가 등

#### 2. 파일 변경이 완료되면 github에 변경된 내용을 push 및 deploy 해주어야 합니다. prompt창에서 해당 폴더로 이동 후 아래 명령어를 차례로 실행해 줍니다.
git storage와 연동이 되어있다면 3번줄부터 cmd에 입력하면 됩니다.
<pre>
git init                                                                      # 프로젝트에 git설치
git remote add origin https://github.com/cscUOU/cscUOU.github.io.git          # git 저장소 연결
git add *                                                                     # .gitignore에 있는 파일 제외하고 모두 올리기
git commit -m 'web'                                                           # commit 메세지 작성
git push -u origin master                                                     # git master로 push
npm run deploy                                                                # 변경한 react 페이지를 배포
</pre>

#### 3. deploy 이후 도메인 설정이 초기화되기 때문에 cscUOU.github.io 저장소에서 도메인을 csc.ulsan.ac.kr로 바꿔줍니다.
도메인 설정은 저장소의 settings > pages 에서 설정할 수 있습니다.

#### 4. csc.ulsan.ac.kr에 접속하면 변경된 홈페이지를 확인할 수 있습니다.
