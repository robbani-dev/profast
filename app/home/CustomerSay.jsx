import Image from 'next/image'
import React from 'react'


const comments = [
    {
        image: "/images/comment/user1",
        name: "Sajib Sarkar",
        designation: "Verified Buyer",
        comment: "Get your orders delivered quickly and reliably."
    },
    {
        image: "/images/comment/user2",
        name: "Arafat Hossain",
        designation: "Regular Customer",
        comment: "Excellent service and very fast delivery."
    },
    {
        image: "/images/comment/user3",
        name: "Nusrat Jahan",
        designation: "VIP Customer",
        comment: "The delivery team was professional and polite."
    },
    {
        image: "/images/comment/user4",
        name: "Tanvir Ahmed",
        designation: "Customer",
        comment: "Products arrived safely and on time."
    },
    {
        image: "/images/comment/user5",
        name: "Mehedi Hasan",
        designation: "Verified Buyer",
        comment: "Very smooth ordering process, highly recommended."
    },
    {
        image: "/images/comment/user6",
        name: "Rumana Akter",
        designation: "Regular Customer",
        comment: "Customer support was helpful and responsive."
    },
    {
        image: "/images/comment/user7",
        name: "Imran Khan",
        designation: "VIP Customer",
        comment: "Fast delivery even during busy hours."
    },
    {
        image: "/images/comment/user8",
        name: "Farhana Rahman",
        designation: "Customer",
        comment: "Loved the packaging and timely delivery."
    },
    {
        image: "/images/comment/user9",
        name: "Rakibul Islam",
        designation: "Verified Buyer",
        comment: "Great experience from order to delivery."
    },
    {
        image: "/images/comment/user10",
        name: "Sharmin Sultana",
        designation: "Regular Customer",
        comment: "Reliable service, I will order again."
    },
    {
        image: "/images/comment/user11",
        name: "Mahmudul Hasan",
        designation: "Customer",
        comment: "Delivery was quicker than expected."
    },
    {
        image: "/images/comment/user12",
        name: "Sadia Afrin",
        designation: "VIP Customer",
        comment: "Very user-friendly platform and fast service."
    },
    {
        image: "/images/comment/user13",
        name: "Nazmul Huda",
        designation: "Verified Buyer",
        comment: "Everything was handled professionally."
    },
    {
        image: "/images/comment/user14",
        name: "Tania Ahmed",
        designation: "Customer",
        comment: "On-time delivery and great communication."
    },
    {
        image: "/images/comment/user15",
        name: "Hasibul Islam",
        designation: "Regular Customer",
        comment: "Affordable and dependable delivery service."
    },
    {
        image: "/images/comment/user16",
        name: "Mim Akter",
        designation: "VIP Customer",
        comment: "The courier was very friendly and helpful."
    },
    {
        image: "/images/comment/user17",
        name: "Shahriar Kabir",
        designation: "Customer",
        comment: "Fast, safe, and trustworthy delivery."
    },
    {
        image: "/images/comment/user18",
        name: "Anika Tasnim",
        designation: "Verified Buyer",
        comment: "Received my order in perfect condition."
    },
    {
        image: "/images/comment/user19",
        name: "Rifat Chowdhury",
        designation: "Regular Customer",
        comment: "Great service quality and fast response."
    },
    {
        image: "/images/comment/user20",
        name: "Jannatul Ferdous",
        designation: "VIP Customer",
        comment: "Highly satisfied with the delivery experience."
    }
];




const CustomerSay = () => {
    return (
        <div className='st-container text-center '>
            <div className='max-w-80 mx-auto mb-4'>
                <Image src="/images/customerSay.png" alt='customrer say' height={100} width={300} />
            </div>
            <div>
                <h1 className='title-section' style={{ textAlign: "center" }}>What our customers are sayings</h1>
                <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>


            {/* Customizable section */}




            <div>
                {
                    comments.map((commen, index) => {

                        return (
                            <div key={index} className='max-w-100 bg-base-200 rounded-2xl p-3 md:p-4 my-10 text-left'>
                                <Image src="/images/quat.png" alt='customrer say' height={30} width={30} className='size-10' />
                                <p>{commen.comment}</p>
                                <div className='border-b-2 border-dashed my-4'></div>
                                <div className='flex gap-4'>
                                    <div><Image src="/Images/logo.png" alt='a' height={10} width={10} className='rounded-full bg-primary object-cover size-10' /></div>
                                    <div>
                                        <h3 className='font-bold text-xl'>{commen.name}</h3>
                                        <p>{commen.designation}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>


        </div>
    )
}

export default CustomerSay