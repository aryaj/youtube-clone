import React from 'react'
import Comment from './Comment';

const commentsData = [

    {
        name: "Ajay",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        replies: [
            {
                name: "Ajay",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
                replies: [
                    {
                        name: "Ajay",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
                        replies: [

                        ]
                    },
                ]
            }
        ]
    },
    {
        name: "Ajay",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        replies: [
            {
                name: "Ajay",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
                replies: [

                ]
            }
        ]
    }
];

const CommentsList = ({ comments }) => {
    return (
        comments.map((comment, index) => {
            return <div className='mb-5'>
                <Comment key={index} data={comment} />
                <div className='border-l border-gray-400 ml-10 pl-5'>
                    <CommentsList comments={comment.replies} />
                </div>
            </div>
        })
    )
}


const CommentsContainer = () => {
    return (
        <div className='my-5 p-2'>
            <h1 className='font-bold'>Comments : </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer