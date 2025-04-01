
export default function NewsLetter(){
    return(
        <section className="bg-green-100 w-full h-[25vh] flex flex-row border rounded justify-between px-10 my-10">
            <div className="flex flex-col justify-center">
                <h2>sign up for newsletters</h2>
                <p> get email updates for a special offer</p>

            </div>
            <div className="flex items-center">
                <span>
                    <input type="text"
                    placeholder="enter your emails"
                    className="h-[5vh] w-80 rounded-l border" />
                    <button className="h-[5vh] rounded-r bg-blue-300">sign up</button>
                </span>

            </div>

        </section>
    )
}