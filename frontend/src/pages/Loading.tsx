

const Loading = () => {
    return (
        <div className="w-dvh h-dvh flex justify-center items-center">
            <span className="loader relative w-12 h-12 block border-4 border-solid border-transparent border-t-white
        rounded-full animate-spin after:content-['']
         after:absolute after:top-0 after:left-0 after:w-12
         after:h-12 after:border-4 after:border-solid
         after:border-transparent after:border-l-red-600
         after:border-b-transparent after:rounded-full after:animate-spin-reverse"></span>
        </div>

    );
};

export default Loading;
