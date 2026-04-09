import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            UserInfo:{
                name:"Dummy",
                location:"Default"
            },
        };
        
        
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/Tarang2604");
            const json = await response.json();
            
            // Handle if Github API Rate Limited
            if (response.ok && !json.message?.includes("rate limit")) {
                this.setState({ UserInfo: json });
            } else {
                console.warn("GitHub API Rate Limited. Using default dummy data.", json.message);
            }
        } catch (error) {
            console.error("Failed to fetch user:", error);
        }
    }
    componentDidUpdate(){
        // console.log("ComponentDidUpdate")
    }
    render(){
    //    console.log(" child Render");
       
       const{name,location,avatar_url}= this.state.UserInfo
        return(
        <div className="user-card">
            <img src={avatar_url}></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:tarangupadhyay26@gmail.com </h4>
        </div>
    );
    }
}
export default UserClass;