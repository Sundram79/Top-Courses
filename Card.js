import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function ClickHandler() {
        if (likedCourses.includes(course.id)) {
            //pehle se likha hua pda tha
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else {
            //pehle se like nhi hai ye course
            //insert karna h ye course liked courses me
            if (likedCourses.length == 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt=""></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full
                               absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={ClickHandler}>
                        {
                            !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2'>
                    {
                    course.description.length >100 ? (course.description.substr(0,100) + "...") :  (course.description)
                    }
                    </p>
            </div>
        </div>
    )
}
export default Card;