import React from 'react'

const Form = () => {
  return (
    <div>
        <form className="flex flex-col sm:h-120 mb-5 shadow-lg mx-10">
          <div className="w-full flex flex-col items-center sm:h-100 sm:mt-10">
            <div className="flex w-full flex-row">
              <input
                className="h-10 w-[47%]  border rounded pl-3 mb-2 mx-5"
                type="text"
                name="name"
                placeholder="your name"
                required
              />
              <input
                className="h-10 w-[47%] border rounded pl-3 mx-5 mb-2"
                type="email"
                name="email"
               
                placeholder="your email"
                required
              />
            </div>
            <div className="w-full flex justify-center items-center">
            <textarea
              className="w-[96%] h-30 border rounded pl-3 sm:h-40 my-2 mb-7"
              name="message"
          
              placeholder="your message"
              required
            ></textarea>

            </div>
           

            <div className="w-full flex justify-center">
              <button
                className="w-[40%] h-10 cursor-pointer rounded-full bg-black text-white mb-10 disabled:bg-gray-400"
                type="submit"
              >
                send message
              </button>
            </div>
          </div>
        </form>
        
    </div>
  )
}

export default Form