import Image from "next/image"
import Link from "next/link"

// const Carouselhome = ({ data }) => {
//     return (
//         <div className="carousel carousel-center carousel-box h-3/4 w-full relative">
//             {
//                 data?.map((item, index) => {
//                     return (
//                         <div key={index} className="h-full w-1/2 bg-gray-950">
//                             <div className="absolute right-0 top-0 ">
//                                 <Image
//                                     src={item.images.jpg.large_image_url}
//                                     alt={item.title}
//                                     fill
//                                     style={{ objectFit: "cover" }}
//                                     className="opacity-80"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
//                             </div>

//                             {/* <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center p-10">
//                                 <h1 className="text-white text-5xl font-bold mb-5">Your Title Here</h1>
//                                 <p className="text-white text-lg">
//                                     Some descriptive text goes here. It sits on top of the image, blending with the gradient background.
//                                 </p>
//                             </div> */}
//                         </div>

//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Carouselhome



const Carouselhome = ({ data }) => {
    return (
        <div className="carousel carousel-start h-[400px]">
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="w-full h-full carousel-item">
                            <Image
                                src={item.images.jpg.large_image_url}
                                height={250}
                                width={800}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Carouselhome