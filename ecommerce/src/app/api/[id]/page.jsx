

export default function produtDetails({params}){

    return(
        <section className="w-full h-[110vh] flex flex-row py-20">
            <div className="w-[50%] flex flex-col mx-5 h-full">
                <img className="w-full h-95 border" src="3" alt="" />
                <div className="my-2 w-full flex flex-row border h-30">
                    <img className=" flex-1  border" src="#" alt="" />
                    <img className="flex-1   border" src="#" alt="" />
                    <img className="flex-1  border" src="#" alt="" />
                    <img className="flex-1  border" src="#" alt="" />

                </div>

            </div>
            <div className="w-[50%] pr-5 h-full flex flex-col">
                <h4>home/T-shirt</h4>
                <h2 className="my-6">Man's Fashion T-shirt</h2>
                <h1 className="my-5">$300</h1>
                <div>

                </div>
                <select className="my-5 w-50 border" name="" id="">
                    <option value="xl">xl</option>
                    <option value="xxl">xxl</option>
                    <option value="small">extra small</option>
                    <option value="large">extra large</option>

                </select>
                <span>
                    <input
                    type="number"
                    value={1} 
                    className="pl-7 w-20 border rounded-full" 
                    />
                    <button className="w-30 bg-blue-400 rounded-full">add to cart</button>
                </span>
                <h3 className="my-5">Product details</h3>
                <p>descriptionLorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release 
                    of Letraset sheets containing Lorem</p>

            </div>

        </section>

    )
}