import React from 'react';
import {useForm} from "react-hook-form";

const BookForm = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        // Submit the form data to the API
        console.log(data);
    };

    return (
        <>
        <form className={'form-control'} onSubmit={handleSubmit(onSubmit)}>
            <label className={'label'}>Book Code:</label>
            <input className={'input input-primary input-bordered'} type="text" name="bookCode" ref={register({ required: true })} />
            {errors.bookCode && <div className={'text-error'}>This field is required</div>}

            <label className={'label'}>Book Title:</label>
            <input className={'input input-primary input-bordered'} type="text" name="bookTitle" ref={register({ required: true })} />
            {errors.bookTitle && <div className={'text-error'}>This field is required</div>}

            <label className={'label'}>Author:</label>
            <input className={'input input-bordered input-primary'} type="text" name="author" ref={register({ required: true })} />
            {errors.author && <div className={'text-error'}>This field is required</div>}

            <label className={'label'}>Average Rating:</label>
            <input className={'input input-primary input-bordered'} type="number" name="averageRating" ref={register({ required: true })} />
            {errors.averageRating && <div className={'text-error'}>This field is required</div>}

            <label className={'label'}>Thumbnail:</label>
            <input className={'input input-primary input-bordered'} type="text" name="thumbnail" ref={register({ required: true })} />
            {errors.thumbnail && <div className={'text-error'}>This field is required</div>}

            <label className={'label'}>Status:</label>
            <input className={'input input-primary input-bordered'} type="text" name="status" ref={register({ required: true })} />
            {errors.status && <div className={'text-error'}>This field is required</div>}

            <button className={'btn btn-primary'} type="submit">Submit</button>
        </form>

            </>
    );
};

export default BookForm;