# React study note

I've spent 2 plus weeks to learn React.js which is a front end programming tool basic on the component concept. And I am going to go proceed studying other stuff, in case I would forget what I learned, I make some notes as below.

## Use node.js to install `create-react-app`

```cmd
## install the create-react-app globally 
npm i -g create-react-app
## create a react project names 'myapp'
npx create-react-app myapp

npm start

```

OK, now we have a react project myapp



## Lifecycle hooks



## Use props to pass parameters to other component or Children component



##  Raising and Handling Events





## Lifting the state Up



## Single Source of Truth







## Some tips

1. Access data from an array which nested in an object to render some `jsx` snippet.

   I asked a question on '[stack overflow](https://stackoverflow.com/questions/59509106/how-to-access-elements-in-an-object-which-nested-in-an-array-of-state-in-react)' and on it someone explained this question in detail.

2. Form controller universal method:

   ```javascript
   class sample extends React.Component{
       state={
           textinput:''
       }
       handleChange=(event)=>{
           const{name,value} = event.target;
           this.setState({[name]:value}) //since if we don't put the `name` in square brackets, the js will consider the name as "name" rather than a variable which means the key of the object was hardcoded. We intend to make the `name` changeable and as ES6 rule request, we should square bracket it. 
       }
       
       render(){
           <input 
           type="text" 
           onChange={this.handleChange}
           name="textinput"
           value="this.state.textinput"
           />
       }
   }
   ```

   



