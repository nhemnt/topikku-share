import { withLayout } from "@/components/layout";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@clerk/nextjs';
import { getTodos, postTodo } from "@/library/utils/requests";


const TodoCard = ({ post }: any) => {
    return (
      <div className='prompt_card' key={post.id}>
        <div className='flex justify-between items-start gap-5'>
          <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
            <p className='my-4 font-satoshi text-sm text-gray-700'>{post.todo}</p>
            <p className='font-inter text-sm blue_gradient cursor-pointer'>
              {post.tag}
            </p>
          </div>
        </div>
      </div>
    );
  };

const TodoCardList = ({ data, handleTagClick }: any) => {
    return (
      <div className='mt-16 prompt_layout px-2 shadow-lg'>
        POSTS - 
        {/* {data.map((post) => (
          <TodoCard key={post._id} post={post} 
        //   handleTagClick={handleTagClick} 
          />
        ))} */}
      </div>
    );
  };

  
const Form = ({ type, post, setPost, submitting, handleSubmit }: any) => {
    return (
        <section className='w-full max-w-full flex-start flex-col shadow-lg p-2' >
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Todos</span>
            </h1>
            <p className='desc text-left max-w-md'>
                Stay organized, productive, and in control of your busy life with
                our revolutionary Todos Scheduler app. Designed to streamline your daily
                routines, this app offers a seamless and intuitive experience, ensuring
                that you never miss a beat.
            </p>

            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your Todos Schedular
                    </span>

                    <textarea
                        value={post.todo}
                        onChange={(e) => setPost({ ...post, todo: e.target.value })}
                        placeholder='Write your Todos here'
                        required
                        className='form_textarea '
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Field of Schedule{' '}
                        <span className='font-normal'>
                            (#school, #work, #gym, etc.)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='#Tag'
                        required
                        className='form_input'
                    />
                </label>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-black'
                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

function Channel() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
  

    const router = useRouter();
    const { userId, getToken } = useAuth();

    const [submitting, setSubmitting] = useState(false);
    const [posts, setPosts] = useState({ todo: '', tag: '' });

    // const createTodo = async (e) => {
    //     try {
    //         e.preventDefault();
    //         setSubmitting(true);
    //         const token = await getToken({ template: 'supabase' });
    //         const posts = await postTodo({ e, userId, token });
    //         // setPosts(posts)
    //         debugger
    //         if (posts) {
    //             alert(JSON.stringify(post) );
    //         }
    //         // console.log(posts);
    //     } catch (error) {
    //         // Handle the error here
    //         console.error('An error occurred:', error);
    //     } finally {
    //         setSubmitting(false);
    //     }
    // };

    // const handleTagClick = (tagName) => {
    //     setSearchText(tagName);
    
    //     const searchResult = filterPrompts(tagName);
    //     setSearchedResults(searchResult);
    //   };
    // useEffect(() => {
        
    //     const loadTodos = async () => {
    //     debugger
    //       const token = await getToken({ template: 'supabase' });
    //       const data = await getTodos( userId, token );
    //       debugger
    //       setList(data);
    //     };
    //     if(userId){
    //         loadTodos();    
    //     }
        
    //   }, [userId]);
    return (
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
             <TodoCardList data={list}
            //   handleTagClick={handleTagClick} 
              />
            {/* <Form
                type='Post'
                post={posts}
                setPost={setPosts}
                submitting={submitting}
                handleSubmit={createTodo}
            /> */}
        </div>
    );
}



export default withLayout(Channel, {});