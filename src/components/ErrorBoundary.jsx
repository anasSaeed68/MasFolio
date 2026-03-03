import React from 'react';

export class ErrorBoundary extends React.Component{
    constructor(props){
       super(props);
       this.state = {
        hasError: false,
       };
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render(){
        if(this.state.hasError){
            return (
                <div className='h-screen flex flex-col items-center justify-center '>
                    <h1>Oops😥<span className='animate-bounce inline-block text-2xl font-bold p-2 text-cyan-300'>... </span>Something went wrong!</h1>
                    <button className='mt-4 px-4 py-2 bg-black text-white shadow-2xl hover:shadow-amber-400 cursor-pointer hover:bg-red-400 hover:text-black-50 active:text-white-50'
                    onClick={() => window.location.reload()}>
                        Refresh Page
                    </button>
                    </div>
            );
        }

        return this.props.children;
    }
}