import React from 'react'
import classes from "./SortingVisualizer.module.css";
import mergeSort from './SortngAlgorythms/MergeSort';

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

        for(let i = 0; i < 200; i++){
            array.push(randomIntFromInterval(5,550));
        }

        this.setState({array});
    }

    mergeSort(){
        const sortedArray = mergeSort(this.state.array);

        console.log("Array: ", this.state.array);
        console.log("Sorted: ", sortedArray);
    }

    heapSort(){

    }

    bubbleSort(){

    }

    render(){
        const {array} = this.state;

        return (
            <div className={classes.array_container}>
                <div className={classes.header}>
                    <button onClick={() => this.resetArray()}>Reset array</button>
                    <button onClick={() => this.mergeSort()}>Merge sort</button>
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