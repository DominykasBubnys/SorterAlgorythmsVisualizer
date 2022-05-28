import React from 'react'
import "./SortingVisualizer.css"
import {getMergeSortAnimations} from "./SortngAlgorythms/MergeSort"
import bubbleSort from './SortngAlgorythms/BubbleSort';


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgba(250, 115, 135, 0.2)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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

        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(1,480));
        }

        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    // console.log("COLOR CHANGE. animation: ", animations[i]);
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    // console.log("ELSE. animation: ", animations[i]);
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort(){

        const animations = bubbleSort(this.state.array);

        for(let i = 0; i < animations.length; i++){//animations.length
            const arrayBars = document.getElementsByClassName("array-bar");


            setTimeout(() => {


                //arrayBars[i].style.backgroundColor = "red"

            }, i * ANIMATION_SPEED_MS);
        }

    }

    heapSort(){

    }

    render(){
        const {array} = this.state;

        return (
            <div className='container'>

                <div className='main-header'>
                    <h1>Sorting algorithm visualization</h1>
                </div>

                <div className="array-container">
                    
                    {array.map((numb, index) => (
                        // <div 
                        //     className="array-bar"
                        //     style={{height:`${numb * 20}px`}}
                        //     key={index}
                        // >{numb}</div>
                        <div 
                            className="array-bar"
                            style={{height:`${numb}px`}}
                            key={index}
                        ></div>
                    )
                    )}
                </div>

                <div className="header">
                    <button onClick={() => this.resetArray()}>Reset array</button>
                    <button onClick={() => this.mergeSort()}>merge sort</button>
                </div>

            </div>
        )
    }


}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default SortingVisualizer