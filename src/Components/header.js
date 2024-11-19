import React,{ Component }  from "react";
 
class Header extends Component
{
    hello(){
        return(
            console.log('Hey, there')
        )
    }
    state = {
        name:'GABIRO',
        keyword:'',
        count:0
    }
    addOne(){
        this.setState({
            count:this.state.count + 1
        })
    }


    inputChangeHandler(event){
        // console.log(event.target.value);
        // this.hello()
            this.setState({
                keyword:event.target.value
            })
    }
    render(){
        return(
            <header>                
                <div className="Log"> LOG</div>
                <input 
                onChange ={(e) =>this.inputChangeHandler(e)}
                />
                <div>{this.state.keyword}</div>
                <br/>
                <div>{this.state.count}</div>
                <button onClick={()=>this.addOne()}>Add One </button>
            </header>
        )
    }
    
}
export default Header