import {React , Component} from "react" 
import {sendData ,getData ,   selector} from "./js/api" 
import "./EasyFramer.css" 
import "./Codewit.css"
const links = [
    {name : "Home" , url : "/"} , 
    {name : "About" , url : "/about"} , 
    {name : "Product" , url : "/product"} , 
    {name : "Documentation" , url : "/documentation"} , 
    {name : "Login" , url : "/login"} , 
    {name : "Signup" , url : "/signup"} 
] 
function DisplayListItems(props){
    const items = props.items.map((item , i) => {
        <a  href={item.url} key={i} className="dark-text">{item.name}</a>
    })
    return (
        <>
            {items}
        </>
    )
}

function Header(props){
    return(
        <header>
            <section className="fixed-to-top shadow bg-white wrapper">
                <div className="frame justify-content-between">
                    <div className="d-sm-hide">
                        <a className="brand" href="/">
                            Bigjara
                        </a>
                    </div>
                    <nav className="d-sm-hide md-nav pad-10">
                        <a href="/about">About</a>
                        <a href="/product">Product</a>
                        <a href="/documentation">Documentation</a>
                        <a href="/pricing">Pricing</a>
                        <a href="/login">Login</a>
                        <a href="/register">Signup</a>
                    </nav>
                    <div className="d-md-hide">
                        <a className="brand-name">
                            Bigjara
                        </a>
                    </div>
                    <div className="d-md-hide">
                        <DisplayListItems items={links} />
                    </div>
                </div>
            </section>
        </header>
    )
} 
function Jumbotron(props){
    return(
        <section class="bg-blue white-text after-fixed-header m-b-5 hero-section">
            <div class="framer">
                <div class="frame">
                    <div class="fr-3"></div> 
                    <div class="fr-6 center-text">
                        <h1 className="tax-hero-header">Welcome to Bigjara</h1>
                        <p className="header-text">We work daily towards building the next Internet</p> 
                        <a 
                            className="button no-border no-outline bg-red white-text radius-5 m-r-1"
                             href="/register">
                                 Join us
                        </a>
                        <a 
                            className="button no-border no-outline bg-white dark-text radius-5"
                             href="/register">
                                Learn more
                        </a>
                    </div>
                    <div class="fr-3"></div>
                </div>
            </div>
        </section>
    )
} 

const returnDate = (date) => date.toDateString()
function TableData(props){
    let data = props.data.map((item , i) => 
    
        <tr key={i}> 
            <td>{i+1}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{returnDate(new Date(item.dateCreated))}</td>
        </tr>
    ) 
    return(

        <tbody>
            {data}
        </tbody>
    )
}
class  Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [] , 
            message : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }  
    componentDidMount() {
	    getData("http://localhost:4400/api/v100/todos")
		.then(res => {
            this.setState({todos : res})
            console.log(res)
        })
		.catch(err => this.setState({backEnd : err}))
	}
    handleSubmit(e){
        e.preventDefault() 
        let userData = {
            title : selector("#title").value.trim() , 
            description : selector("#description").value
        }
        sendData("http://localhost:4400/api/v100/todos" , userData)
        .then(res => { 
            this.setState({
                todos : res
            }) 
        })
        .catch(err => {
            this.setState({
                message : "An error occured on the server"
            }) 
            console.error(err.message)
            
        })
    }
    render(){
        return(
            <main> 
                <section id="studentList" className="m-b-5">
                    <div class="framer">
                        <div class="frame justify-content-between">
                            <div className="fr-12 fr-md-4">
                                <div className="m-r-1">
                                    <form 
                                        className="shadow bg-white pad-20 radius-5 m-b-1" 
                                        onSubmit={this.handleSubmit}
                                    >
                                        <label htmlFor="title">Title</label> 
                                        <input 
                                            type="text" 
                                            placeholder="Enter todo list title" 
                                            className="input input-border-faint pad-10 m-b-1"
                                            id="title" 
                                            
                                        />
                                    
                                        <label htmlFor="desctiption">Description</label> 
                                        <input 
                                            type="text" 
                                            className="input input-border-faint pad-10 m-b-1"
                                            id="description"
                                        />
                                        
                                        <input 
                                            type="submit" 
                                            className="input input-border-faint pad-10 bg-red white-text"
                                            id="submit" 
                                            value="Add"
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="fr-8"> 
                               {
                                   this.state.todos.length > 0 ? 
                                        <table className="table table-bordered">
                                            <caption 
                                                style={{fontSize:"2rem" , color:"#f00"}}
                                            >
                                                List of our Items Created
                                            </caption> 
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Date Created</th>
                                                </tr>
                                            </thead> 
                                            <TableData data={this.state.todos} /> 
                                        </table> 
                                    : 
                                    <p>{this.state.message}</p>
                               }
                            </div>
                            
                        </div>
                    </div>
                </section>
                
            </main>

        ) 
    }
}
function Footer(props){
   return(
       <footer className="bg-white section-wrapper">
           <div className="framer">
               <div className="frame justify-content-between border-bottom-faint m-b-1"> 
                    <div className="w-20 fr-12 footer-navs">
                       <div className="frame justify-content-between">
                           <h5>Bigjara</h5> 
                           <p className="d-md-hide">
                                <i className="fa fa-plus tabber font-0-7"></i>
                           </p>
                       </div> 
                       <div className="tab-content mobile-hide">
                           <a href="/about">About</a>
                           <a href="/about">Mission</a>
                           <a href="/about">Team</a>
                           <a href="/about">Philosophy</a>
                       </div>
                    </div>
                    <div className="w-20 fr-12 footer-navs">
                       <div className="frame justify-content-between">
                           <h5>Product</h5> 
                           <p className="d-md-hide">
                                <i className="fa fa-plus tabber font-0-7"></i>
                           </p>
                       </div> 
                       <div className="tab-content mobile-hide">
                           <a href="/about">EasyFramer</a>
                           <a href="/about">FileMover</a>
                           <a href="/about">BigHead</a>
                           <a href="/about">Publisher</a>
                       </div>
                    </div>
                    <div className="w-20 fr-12 footer-navs">
                       <div className="frame justify-content-between">
                           <h5>Developers</h5> 
                           <p className="d-md-hide">
                                <i className="fa fa-plus tabber font-0-7"></i>
                           </p>
                       </div> 
                       <div className="tab-content mobile-hide">
                           <a href="/about">Documentation</a>
                           <a href="/about">Meetup</a>
                           <a href="/about">CodeFest</a>
                           <a href="/about">Community</a>
                       </div>
                    </div>
                    <div className="w-20 fr-12 footer-navs">
                       <div className="frame justify-content-between">
                           <h5>Marketing</h5> 
                           <p className="d-md-hide">
                                <i className="fa fa-plus tabber font-0-7"></i>
                           </p>
                       </div> 
                       <div className="tab-content mobile-hide">
                           <a href="/about">Ads</a>
                           <a href="/about">Promotion</a>
                           <a href="/about">Optimization</a>
                         
                       </div>
                    </div>
               </div>
           </div>
       </footer>
   )
}


export default class App extends Component { 
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <Header/> 
                <Jumbotron /> 
                <Main />
                <Footer />
            </>
        )
    }
}