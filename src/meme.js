import React, { Component }from "react"

class Meme extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",

            allmemeTags: []
        }
        this.handlechange = this.handlechange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({allmemeTags: memes})
            })
    }
    handlechange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
        
    }


    handleSubmit(event) {
        event.preventDefault()
        const Rand = Math.floor(Math.random() * this.state.allmemeTags.length)
        const RandImg = this.state.allmemeTags[Rand].url
        this.setState({
            randomImg : RandImg
        })
    }
    render() {
        
        return (
            <div>
            <form onSubmit = {this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.topText}
                    name="topText"
                    placeholder="topText"
                    className="input"
                    onChange={this.handlechange}
                />
                <input
                    type="text"
                    value={this.state.bottomText}
                    name="bottomText"
                    placeholder="bottomText"
                    className="input"
                    onChange={this.handlechange}
                />
                <button id="button" >Generate</button>
                
                </form>
                <h1>{this.state.bottomText}</h1>
                <div className="meme">
                    <img src={this.state.randomImg} alt="network error"  />
                    <h1>{this.state.topText}</h1>
                    <h2>{this.state.bottomText}</h2>
            </div>
                
        </div>
        )
    }
}
  
export default Meme