import Image from "next/image"

const Card = ({data}) => {
    return (
        <div className="card glass w-96 p-3">
            <figure>
                <Image
                    src={data.images.webp.image_url}
                    alt={data.title} 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    )
}

export default Card