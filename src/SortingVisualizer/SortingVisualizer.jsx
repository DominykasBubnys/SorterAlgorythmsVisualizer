import React from 'react'
import classes from "./SortingVisualizer.module.css";

class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: []
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];

        for(let i = 0; i < 300; i++){
            array.push(randomIntFromInterval(5,630));
        }

        this.setState({array});
    }

    mergeSort(){

    }

    heapSort(){

    }

    bubbleSort(){

    }

    render(){
        const {array} = this.state;


        // this.resetArray()

        console.log("masyvas: ", array)
        return (
            <div className={classes.array_container}>
                <div className={classes.header}>
                    <button onClick={() => this.resetArray()}>Reset array</button>
                </div>
                {array.map((numb, index) => (
                    <div 
                        className={classes.array_bar} 
                        style={{height:`${numb}px`}}
                        key={index}
                    ></div>
                )
                )}
            </div>
        )
    }


}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer