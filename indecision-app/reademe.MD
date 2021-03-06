# REACT PROJECT

## yarn
`brew install yarn`
<br/>
yarn是一个快速可靠安全的依赖管理工具，yarn与npm的许多功能是相同的，描述包信息的文件也是package.json

## Setting up a Web Server using 
<br/>
本地开发常常需要搭建临时的服务，第一时间我们会想到用http-server，
但现在流行修改文件浏览器自动刷新，这时候又得用到live-reload。
服务启动后，又要浏览器能自动打开我的项目，这时候使用opener。
<br/>
live-server 集成了这三个插件的所有功能，很容易启动一个专业的本地服务。
<br/>

**安装live-server**
<br/>
`npm -g install live-server`
<br/>
或者
<br/>
`yarn global add live-server`
<br/>

**使用live-server**
<br/>
`live-server public --port=9090`
<br/>

## babel 编译JSX文件
<br/>
React中的jsx文件，浏览器不能直接运行，需要babel将jsx编译成javascript。
<br/>

**安装babel**
<br/>
`npm install -g babel-cli`
<br/>
或者
<br/>
`yarn global add babel-cli`
<br/>

**初始化项目依赖**
<br/>
`yarn init`
<br/>

**添加依赖**
<br/>
`yarn add babel-preset-react`
`yarn add babel-preset-env`
<br/>

**运行babel**
<br/>
`babel src/app.js --out-file=public/script/app.js --presets=env,react --watch`
<br/>
babel 输入文件 --out-file 输出文件 --presets编译时使用的presets，--watch表示实时编译。
