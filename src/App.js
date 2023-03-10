import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAvaice();
        console.log('kop');
    }

    fetchAvaice = async () => {
        const result = await axios.get('https://api.adviceslip.com/advice');
        const { advice } = result.data.slip;
        this.setState({ advice });
    };
    render() {
        return (
            <div className="hello h-screen flex justify-center flex-col items-center">
                <div className="text-black text-4xl  bg-white w-1/2 text-center mx-auto p-20 rounded-xl shadow-lg flex justify-center flex-col gap-6">
                    {this.state.advice && this.state.advice}
                    <button className=" px-5 py-3 bg-red-600 w-1/2 mx-auto text-xl font-bold text-white rounded-lg cursor-pointer active:px-3 active:py-2 " onClick={this.fetchAvaice}>
                        <span>Give ME Advice!!</span>
                    </button>
                </div>
                ;
            </div>
        );
    }
}
