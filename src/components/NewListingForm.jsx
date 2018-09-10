import React from 'react';

function NewListingForm(){
    return(
        <div>
            <form>
                <div>
                    <form>
                        <input
                            type='text'
                            id='type'
                            placeholder='Type of Rental'/>
                        <input
                            type='text'
                            id='city'
                            placeholder='Location'/>
                        <input
                            type='text'
                            id='title'
                            placeholder='Title'/>
                        <input
                            type='text'
                            id='description'
                            placeholder='Description'/>
                        <input
                            type='text'
                            id='image'
                            placeholder='Image URL'/>
                        <button type='submit'>Create New Listing</button>
                    </form>
                </div>
            </form>
        </div>
    );
}

export default NewListingForm;
