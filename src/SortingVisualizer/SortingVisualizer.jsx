import React from 'react'
import classes from "./SortingVisualizer.module.css";
import mergeSort from './SortngAlgorythms/MergeSort';
// import bubbleSort from './SortngAlgorythms/BubbleSort';


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

        for(let i = 0; i < 20; i++){
            array.push(randomIntFromInterval(1,25));
        }

        this.setState({array});
    }

    mergeSort(){
        const sortedArray = mergeSort(this.state.array);

        console.log("Array: ", this.state.array);
        console.log("Sorted: ", sortedArray);
    }

    bubbleSort(){
        // const animations = bubbleSort(this.state.array);

        // for(let i = 0; i < animations.length; i++){

        //     setTimeout(() => {
                
        //         console.log('kazkas: ', animations[i])

        //     }, i * 100);
        // }

    }

    heapSort(){

    }

    render(){
        const {array} = this.state;

        return (
            <>
            <div className={classes.array_container}>
                
                {array.map((numb, index) => (
                    <div 
                        className={classes.array_bar} 
                        style={{height:`${numb * 20}px`}}
                        key={index}
                    >{numb}</div>
                )
                )}
            </div>

            <div className={classes.header}>
                <button onClick={() => this.resetArray()}>Reset array</button>
                <button onClick={() => this.bubbleSort()}>Bubble sort</button>
            </div>

            </>
        )
    }


}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default SortingVisualizer