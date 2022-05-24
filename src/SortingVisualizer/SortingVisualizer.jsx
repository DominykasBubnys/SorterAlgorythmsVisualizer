import React from 'react'
import "./SortingVisualizer.css"
// import getMergeSortAnimations from "../SortingVisualizer/SortngAlgorythms/MergeSort"
import bubbleSort from './SortngAlgorythms/BubbleSort';


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
        
    }

    bubbleSort(){

        const animations = bubbleSort(this.state.array);

        for(let i = 0; i < animations.length; i++){//animations.length


            setTimeout(() => {

                const arrayBars = document.getElementsByClassName("array-bar");

                arrayBars[i].style.backgroundColor = "red"

            }, i * 200);
        }

    }

    heapSort(){

    }

    render(){
        const {array} = this.state;

        return (
            <>
            <div className="array-container">
                
                {array.map((numb, index) => (
                    <div 
                        className="array-bar"
                        style={{height:`${numb * 20}px`}}
                        key={index}
                    >{numb}</div>
                )
                )}
            </div>

            <div className="header">
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