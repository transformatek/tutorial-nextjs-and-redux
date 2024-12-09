# Tutorial nextjs and redux
Tutorial integration NextJS with And Design, Redux and Translations

## Prerequisite 

* Visual Studio code [https://code.visualstudio.com/](https://code.visualstudio.com/)
* A working installations of Docker and Docker compose
    - [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

## Clone the repo

```sh
git clone git@github.com:transformatek/tutorial-nextjs-and-redux.git
cd tutorial-nextjs-and-redux
```

## Project setup using VSCode

Start VSCode 
```bash
code .
```

In the Extensions menu, search for "Remote - Containers" and install it:
![](docs/vscode-remote-container.png)


If VSCode dont detect the remote container: 
- open the Command Palette (usually Ctrl or Command + Shift + P) 
- and type ">Remote-Containers: Open Folder in Container", 
- select it and choose the location of this project.

If you are prompted to Rebuild the container do it: 
![](docs/devcontainer-rebuild.png)

If the **Rebuild** prompt don't shows up : 
- open the Command Palette (usually Ctrl or Command + Shift + P) 
- and type ">Remote-Containers: Rebuild Container", 
- select it.

## Developement
First run or after adding new packages 
```bash
cd nextjs-and-redux-app
npm install
```

Run in developement mode 
```bash
cd nextjs-and-redux-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check build 
```bash
cd nextjs-and-redux-app
npm run build
```


## Useful links

