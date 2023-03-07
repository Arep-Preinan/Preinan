import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

const RatingReview = (props) => {
    let [isComment, setComment] = useState(false);

    let {data, setData, post} = useForm({
        booking_id: props.wisata.id,
        user_id: props.user.id,
        tempat_wisata_id: props.wisata.id,
        rating : props.wisata.komentar ? props.wisata.komentar.rating : 0,
        komentar: props.wisata.komentar ? props.wisata.komentar.isi : '',
    })

    useEffect(() => {
        // console.log(props.wisata.komentar);
        if(props.wisata.komentar) {
            setComment(true);            
        }
    }, [])

    const ratingClick = (e) => {
        setData('rating', e.target.value);
    }
    
    const handleKomentar = () => {
        post(route('komentar.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setComment(true);
            },
            onError: () => {
                console.log('gagal');
            }
        })
    }

    return (
        <>
            <div className="rating">
                <input type="radio" name="rating-2" className={`mask mask-star-2 ${data.rating >= 1 ? 'bg-orange-500' : 'bg-orange-100'}`}
                    value={1} onChange={ratingClick}  
                    disabled={isComment}
                    />
                <input type="radio" name="rating-2" className={`mask mask-star-2 ${data.rating >= 2 ? 'bg-orange-500' : 'bg-orange-100'}`}
                    value={2} onChange={ratingClick} 
                    disabled={isComment}
                    />
                <input type="radio" name="rating-2" className={`mask mask-star-2 ${data.rating >= 3 ? 'bg-orange-500' : 'bg-orange-100'}`}
                    value={3} onChange={ratingClick} 
                    disabled={isComment}
                    />
                <input type="radio" name="rating-2" className={`mask mask-star-2 ${data.rating >= 4 ? 'bg-orange-500' : 'bg-orange-100'}`}
                    value={4} onChange={ratingClick} 
                    disabled={isComment}
                    />
                <input type="radio" name="rating-2" className={`mask mask-star-2 ${data.rating >= 5 ? 'bg-orange-500' : 'bg-orange-100'}`}
                    value={5} onChange={ratingClick} 
                    disabled={isComment}
                    />
            </div>
            <div class="flex items-center">
                <input type="text" value={data.komentar} class="py-2 px-4 border border-gray-300 rounded-lg mr-2" placeholder="Masukkan teks..." onChange={(e) =>  setData('komentar', e.target.value)} />
                {
                    !isComment && <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleKomentar()}>Kirim</button> 
                }
            </div>
        </>
                                
    )
}

export default RatingReview
