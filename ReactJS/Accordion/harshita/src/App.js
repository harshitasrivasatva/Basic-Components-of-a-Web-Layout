import React from 'react'

import './App.css'

class App extends React.Component {
    constructor(){
        super();
        this.state={
            isAccordion1: false,
            isAccordion2:false,
            isButton: false
        }
    }

    render(){
        return (
            <div className="accordion">
                
                <div 
                    className="container"
                    onClick={() => this.setState({isAccordion1: !this.state.isAccordion1})}
                >
                    Accordion-1
                </div>
                {
                    this.state.isAccordion1 ? (
                       <div className="item">
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       
                       <div>Accordion1 Item-1</div>
                       </div>
                     ) : null
                }
    
                <div 
                    className="container"
                    onClick={() => this.setState({isAccordion2: !this.state.isAccordion2})}
                >
                    Accordion-2
                </div>

                {
                    this.state.isAccordion2 ? (
                       <div className="item">
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       <div>Accordion1 Item-1</div>
                       </div>
                     ) : null
                }

                <div 
                    className="button"
                    onClick={() => this.setState({isButton: !this.state.isButton})}
                >
                    Normal Button
                </div>
                {
                    this.state.isButton ? (
                        <div className="button-content">
                           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quaerat. Perspiciatis facere vitae qui accusantium nisi ut minima quae officiis pariatur? Culpa tempore optio sint nemo saepe omnis, cumque molestias!</p>
                        </div>
                    ) : null
                }

                
            </div>
        )
    }
}

export default App
